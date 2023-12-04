import type { PageLoad } from '../$types';
import { getMishna, getMefarshim } from '$lib/sefaria';
import type { Session } from '$lib/types';
import { saveSession } from '$lib/supabase';
import {user_id} from '$lib/stores';
import {supabase } from '$lib/supabase';
import { get } from 'svelte/store';
interface Mishna {
    mishna: string;
    chapter: number;
    verse: number;
}
export const load = (async ({ url, params }: { url: URL; params: { session_id?: string } }) => {
    let current:Mishna;
    console.log(params.session_id)
    const {data, error} = await supabase.from('session_details').select('*').eq('session_id', params.session_id).single();
    console.log(data)
    if (get(user_id) === data.owner_id) {
        current = data.owner_location
    }else if (get(user_id) === data.chavruta_id) {
        current = data.chavruta_location
    }else {
        current ={mishna: "Mishna_Peah", chapter:1, verse: 1}

    }
    
 
    //get the mefarshim
    const mishnaChapter = await getMishna(current)
    const mefaresh = await getMefarshim(current)
    return { mishnaChapter, mefaresh, current};
}) satisfies PageLoad;










