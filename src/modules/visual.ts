import { getEstablish } from "@/services/index"

export default {
    //命名空间
    namespaced: true,
    state: {
        info: {
            classname: "",
            classroom: "",
            assistant: "",
            flag:false,
            type:''
        },


    },
    mutations: {
        //创建班级
        EstablishData(state: any, payload: any) {
            state.info = payload
            console.log(state.info)
        },
        upstatus(state:any,payload:any){
            state.info.flag=!state.info.flag;
            // console.log(payload,'0000')
            state.info.type=payload

        }
    },
    actions: {
        async getestablish({ commit }: { commit: Function }, payload: Object): Promise<void> {
            console.log(payload)
            let data: any = await getEstablish(payload);
            commit("EstablishData", data)
        }
    }
}