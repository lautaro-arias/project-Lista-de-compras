export interface LoginModel{
    email       : string;
    password    : string;
    
}
export interface LoginData{
    user      : string;
    email     : string;
    password  : string;
    exp       : number;
    iat       : number;
    token     : string;
}
export interface RegisterData {
    user      : string;
    email     : string;
    password  : string;
    exp       : number;
    iat       : number;
    token     : string;
}
export interface RegisterModel {
    email       : string;
    password    : string;
}