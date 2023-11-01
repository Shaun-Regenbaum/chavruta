export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      session_details: {
        Row: {
          created_at: string
          session_id: string
        }
        Insert: {
          created_at?: string
          session_id?: string
        }
        Update: {
          created_at?: string
          session_id?: string
        }
        Relationships: []
      }
      user_details: {
        Row: {
          created_at: string
          current_mishna: string | null
          current_perush: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          current_mishna?: string | null
          current_perush?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          current_mishna?: string | null
          current_perush?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_details_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}