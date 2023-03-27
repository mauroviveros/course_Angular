export interface AuthResponse {
    ok      : boolean;
    user    : User;
    token   : string;
}

export interface UserResponse {
    ok: boolean;
    user: User;
    token: string;
}
export interface User {
    _id:      string;
    name:     string;
    email:    string;
    password: string;
}