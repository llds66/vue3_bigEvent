import request from "@/utils/request.js";

export const registerService = (registerData) => {
    var params = new URLSearchParams();
    for(let key in registerData){
        params.append(key, registerData[key]);
    }
    return request.post('/user/register', params)

}