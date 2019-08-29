// class/create
import request from '../utils/request';

export function getEstablish(params:Object): Promise<Object>{
    
    return request.put('class/create',params);
}