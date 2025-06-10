import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default function setCookieOnReq(cookies:ReadonlyRequestCookies){
    const accessToken =cookies.get("accessToken");
    const refreshToken =cookies.get("refreshToken");
    const options ={
         method: "GET",
        credentials: "include",
        headers: {
                 Cookie:`${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
        },
        
    }
    return options
}