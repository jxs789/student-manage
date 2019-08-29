<template>
  <div class="wrap">
    <Header :navdata="this.$route.meta.title"></Header>
    <section>
      <p>网站工程</p>
      <div class="tab">
        <ul>
          <li
            v-for="(item,index) in nav"
            :key="index"
            @click="tabLogin(index)"
            :class="index===ind?'active':null"
          >{{item}}</li>
        </ul>
      </div>
      <ol>
        <li>
          <input type="text" placeholder="手机号" v-model="current.inp" />
        </li>
        <br />
        <li>
          <input type="text" placeholder="密码" v-model="current.pwd" />
        </li>
        <li v-if="ind===0">
          <input type="checkbox" />两周内自动登入
        </li>
        <li>
          <button v-if="ind===0" @click="gotoLogin">登入</button>
          <button v-else @click="signIn">注册</button>
        </li>
      </ol>
    </section>
  </div>
</template>
<script lang="ts">
import { mapState, mapActions, mapMutations } from "vuex";
import Vue from "vue";
export default Vue.extend({
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      ind: (state:any) => state.login.ind,
      nav: (state:any) => state.login.nav,
      current: (state:any) => state.login.current
    }),
    navdata() {
      return "重点学生日周考成绩录入管理系统";
    }
  },
  methods: {
    ...mapMutations({
      updateInd: "login/updateInd"
    }),
    ...mapActions({
      getregister:"login/getregister"
    }),
    tabLogin(ind) {
      this.updateInd(ind);
    },
    //登录
    gotoLogin() {
      // this.current.inp=''

      // console.log(this.current.inp);
    },
    //注册
    signIn() {
      this.getregister({
        inp:this.current.inp,
        pwd:this.current.pwd
      })
      // console.log(this.current.inp);
    }
  },
  created() {
  },
  mounted() {}
})
</script>
<style scoped lang="scss">
@import "../style/login";
</style>