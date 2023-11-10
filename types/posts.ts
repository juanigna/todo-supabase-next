import { Database } from "./supabase";

type PostType = Database['public']['Tables']['posts']['Row']
type UserType = Database['public']['Tables']['profiles']['Row']

export type Post = {
    content: string;
    created_at: string;
    id: string;
    user_id: string;
    completed: boolean;
    profiles: {
        full_name: string | null;
        avatar_url: string | null;
        username: string | null;
    }
}