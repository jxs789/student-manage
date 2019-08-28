import { getRegister } from "../../services/index"

export default {
    //命名空间
    namespaced: true,
    state: {
        box:{
            flag:false
        }
    },
    mutations: {
        updateFlag(state){
            state.box.flag=!state.box.flag
        }
    },
    actions: {
        // async getregister({ commit }, payload) {
        //     // console.log(payload)
        //     let data = await getRegister(payload)
        //     console.log(data)
        //     // if (data.res_code === 1) {
        //     //     commit('updateCountDown', data.res_code)
        //     // }
        // }

        async getregister({ commit }: { commit: Function },  payload : Object): Promise<void> {
            // console.log('444',payload)
            let data: any = await getRegister(payload);
            console.log(data)
            // 更新品牌信息
            // let brandList:any = {};
            // data.data.forEach((item:any) => {
            //     let letter = item.Spelling[0];
            //     if (brandList[letter]){
            //         brandList[letter].push(item);
            //     }else{
            //         brandList[letter] = [item];
            //     }
            // });
            // commit('updateBrandList', brandList);

            // 更新字母信息
            // let letterList: Array<string> = data.data.map((item: {Spelling: String})=>{
            //     return item.Spelling[0];
            // })
            // commit('updateLetterList', Array.from(new Set(letterList)));
        }
    }
}