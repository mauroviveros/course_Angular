export interface AuthResponse {
    ok:     boolean;
    error?:  Error;
    errors?: Errors;
    token?:  string;
}

export interface Error {
    message: string;
}

export interface Errors {
    email:    ValidationRequest;
    password: ValidationRequest;
}

export interface ValidationRequest {
    msg:      string;
    param:    string;
    location: string;
}