import type { PageLoad } from './$types';
import type { Session } from '$lib/types';
import { saveSession } from '$lib/supabase';
import { user_id } from '$lib/stores';
import {supabase } from '$lib/supabase';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import { onMount } from 'svelte';


export const load = (async () => {

    const userIdValue = get(user_id);

    console.log(userIdValue);
    
    const {data, error} = await supabase.from('session_details').select('*').eq('owner_id', userIdValue);
    let sessions: Session[] = [];
    console.log(data);

    if(data){
        sessions = data;
    }

    console.log(sessions);
    return { sessions };
}) satisfies PageLoad;










