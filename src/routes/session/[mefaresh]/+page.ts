import type { PageLoad } from './$types';
import { getMishna, getMefarshim } from '$lib/sefaria';
import type { Session } from '$lib/types';
import { saveSession } from '$lib/supabase';

export const load = (async ({ url, params }: { url: URL; params: { mefaresh?: string } }) => {
    // get session_id from url
    const session_id = url.searchParams.get('session');
    

    // get user_id
    // what mishna was user on
    // get data from sefaria

    //get the mefarshim
    const mefarshim = await getMefarshim("Mishna_Peah", 1, 1, params.mefaresh)
    console.log(mefarshim);

    return { mefarshim };
}) satisfies PageLoad;










