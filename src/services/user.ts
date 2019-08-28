import request from '../utils/request';

export let  getRegister=(params:Object): Promise<Object>{
    console.log(params,'222')
    return request.get('/emstu/teacher/register');
}
// {username:params.inp,password:params.pwd}