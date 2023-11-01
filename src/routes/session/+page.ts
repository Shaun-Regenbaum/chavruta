import type { PageLoad } from './$types';
import {getMishna} from '$lib/sefaria';
import type { Session } from '$lib/types';
import { saveSession } from '$lib/supabase';

export const load = (async ({url}) => {
    // get session_id from url
    const session_id = url.searchParams.get('session');
    

    // get user_id
    // what mishna was user on
    // get data from sefaria
    const mishna = await getMishna("Mishna Berakhot 4.2");
    console.log(mishna)
    return {mishna};
}) satisfies PageLoad;