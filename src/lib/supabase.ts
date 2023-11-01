import { createClient } from '@supabase/supabase-js'
import {PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY} from '$env/static/public';
import type { Supabase, Session } from './types';

// Create a single supabase client for interacting with your database
export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)

export async function saveSession(session:Session){
    const { data, error } = await supabase
        .from('session_details')
        .insert(session)
        return {data, error}
        
}