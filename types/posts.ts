import { Database } from "./supabase";

type PostType = Database['public']['Tables']['posts']['Row']
type UserType = Database['public']['Tables']['profiles']['Row']

export type Post = PostType & {
    profiles: UserType
}