import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";
import {supabase} from '$lib/supabase';
import {user_id} from '$lib/stores';
import { get } from 'svelte/store';


interface Mishna {
    mishna: string;
    chapter: number;
    verse: number;
}

const newChavrutaSchema = z.object({
	chavrutaName: z.string().min(1),
	email: z.string().email(),
	id: z.string().min(1),
	mishna: z.string().min(1),
    chapter: z.number().int().min(1),
    verse: z.number().int().min(1),
});

export const load = async (event) => {
  const form = await superValidate(event, newChavrutaSchema);
//   console.log("Form on load:", form);
  return {
    form,
  };
};

export const actions = {
  default: async (event) => {
	const userIdValue = get(user_id);
    const form = await superValidate(event, newChavrutaSchema);
    console.log("Form on submit:", form);
	console.log("user id:", userIdValue)

    if (!form.valid) {
        return fail(400, {
            form
        });
    }

	const mishna: Mishna = {
		mishna: form.data.mishna,
		chapter: form.data.chapter,
		verse: form.data.verse,
	  };

	const {data, error} = await supabase.from('session_details').upsert({
		// the owner id is hardcoded bc i cant seem to access the user_id
		owner_id: '8ee73fef-2887-4260-86d3-521c627b6f73',
		owner_location: mishna,
		chavruta_location: mishna
	}).select()

	if (error) {
		console.log(error.message)
	} else if (data && data[0].session_id){
		throw redirect(303, `/session/${data[0].session_id}`)
		// await goto(`/session/${data[0].session_id}`)
	}

    return { form };
  },
};
