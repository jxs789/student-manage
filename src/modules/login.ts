import { getRegister, getLogin } from "@/services/index"

export default {
    //命名空间
    namespaced: true,
    state: {
        ind: 0,
        nav: [] = ["登入", "注册"],
        current: {
            username: '',
            password: '',
            flag: false,
            status: ''
        }
    },
    mutations: {
        //tab切换
        updateInd(state: any, payload: any) {
            state.ind = payload
        },
        //两天登录
        updateCheck(state: any){
            state.current.flag=!state.current.flag
        },
        //改变状态
        updateStatus(state: any, payload: any) {
            if (payload === 1) {
                //注册成功
                state.current.status = 1;
                state.ind = 0;
                state.current.username = ''
                state.current.password = ''
            } else if (payload === 0) {
                state.current.status = 0;
                state.current.username = ''
                state.current.password = ''
            } else if (payload === '登陆成功！') {
                state.current.status = 2;
            } else {
                state.current.status = 3;
            }
        },
        //遮罩层2s消失
        updateTimer(state: any){
            state.current.status=''
        },
    },
    actions: {
        async getregister({ commit }: { commit: Function }, payload: Object): Promise<void> {
            let data: any = await getRegister(payload);
            commit('updateStatus', data.code)
        },
        //登录
        async getlogin({ commit }: { commit: Function }, payload: Object): Promise<void> {
            let data: any = await getLogin(payload);
            localStorage.setItem('userinfo',payload.username)
            console.log(data, '2222')
            commit('updateStatus', data.msg)
        }
    }
}