import { FormSignupData } from "app/(auth)/signup/page";
import http from "./httpService"
import { FormSigninData } from "app/(auth)/signin/page";

export const signupApi = async(data : FormSignupData)=>{
    return http.post("/user/signup",data).then(({data})=>data.data);
}
export const signinApi = async(data : FormSigninData)=>{
    return http.post("/user/signin",data).then(({data})=>data.data);
}
export const getUserApi = async()=>{
    return http.get("/user/profile").then(({data})=>data.data);
}