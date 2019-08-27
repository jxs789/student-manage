import request from '../utils/request';

export function getRegister(params) {
    console.log(params,'4444')
    return request.post('/emstu/teacher/register', params);
}