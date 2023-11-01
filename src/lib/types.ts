import type { Database } from '$lib/database.types';
import type { SupabaseClient } from '@supabase/supabase-js';

export interface Supabase {
  public: SupabaseClient<Database>;
}

type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
type Insert<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Insert'];
type Update<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Update'];
type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T];

export type Session = Insert<'session_details'>;
export type User = Insert<'user_details'>;