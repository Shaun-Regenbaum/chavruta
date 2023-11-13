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
          chavruta_id: string | null
          chavruta_location: Json | null
          created_at: string
          owner_id: string | null
          owner_location: Json | null
          session_id: string
        }
        Insert: {
          chavruta_id?: string | null
          chavruta_location?: Json | null
          created_at?: string
          owner_id?: string | null
          owner_location?: Json | null
          session_id?: string
        }
        Update: {
          chavruta_id?: string | null
          chavruta_location?: Json | null
          created_at?: string
          owner_id?: string | null
          owner_location?: Json | null
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_details_chavruta_id_fkey"
            columns: ["chavruta_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "session_details_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["user_id"]
          }
        ]
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
            isOneToOne: true
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
