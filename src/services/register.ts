import request from '../utils/request';

export function getRegister(params:Object): Promise<Object>{
    // console.log(params,'222')
    return request.post('/teacher/register',params);
}

export function getLogin(params:Object): Promise<Object>{
    console.log(params,'222')
    return request.post('/teacher/login',params);
}