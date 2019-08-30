<template>
  <div class="wrap">
    <Header></Header>
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
          <input type="text" placeholder="手机号" v-model="current.username" />
        </li>
        <br />
        <li>
          <input type="text" placeholder="密码" v-model="current.password" />
        </li>
        <li v-if="ind===0">
          <input type="checkbox" @input="changeCheck" />两周内自动登入
        </li>
        <li>
          <button v-if="ind===0" @click="gotoLogin">登入</button>
          <button v-else @click="signIn">注册</button>
        </li>
      </ol>
    </section>
    <div class="msg" v-show="current.status">
      <p>{{status}}</p>
    </div>
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
      ind: (state: any) => state.login.ind,
      nav: (state: any) => state.login.nav,
      current: (state: any) => state.login.current
    }),

    status() {
      if (this.current.status === 1) {
        return "注册成功";
      } else if (this.current.status === 0) {
        return "账户已存在，请重新输入";
      } else if (this.current.status === 2) {
        return "登录成功";
      } else if (this.current.status === 3) {
        return "账户密码输入错误或账户不存在!";
      } else {
        return null;
      }
    }
  },
  methods: {
    ...mapMutations({
      updateInd: "login/updateInd",
      updateCheck: "login/updateCheck",
      updateTimer: "login/updateTimer"
    }),
    ...mapActions({
      getregister: "login/getregister",
      getlogin: "login/getlogin"
    }),
    tabLogin(ind) {
      this.updateInd(ind);
    },
    //登录
    gotoLogin() {
      if (this.current.flag === true) {
        this.getlogin({
          username: this.current.username,
          password: this.current.password,
          validlength: 24
        });
      } else {
        this.getlogin({
          username: this.current.username,
          password: this.current.password
        });
      }
      setTimeout(() => {
        this.updateTimer();
      }, 2000);
    },
    //注册
    signIn() {
      this.getregister({
        username: this.current.username,
        password: this.current.password
      });
    },

    changeCheck() {
      this.updateCheck();
    }
  },
  created() {},
  mounted() {}
});
</script>
<style scoped lang="scss">
@import "../style/login";
</style>