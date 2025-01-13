export interface AdminLoginProps {
    admin: UserProfile
    token: string
}
export type UserProfile = {
    user_id: string,
    full_name: string
    email: string,
}