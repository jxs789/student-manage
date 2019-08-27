<template>
  <div class="wrap">
    <Header :navdata="this.$route.meta.title"></Header>
    <section>
      <p>网站工程</p>
      <div class="tab">
        <ul>
          <li v-for="(item,index) in nav" :key="index" @click="tabLogin(index)" :class="index===ind?'active':null">{{item}}</li>
        </ul>
      </div>
      <ol>
        <li>
          <input type="text" placeholder="手机号" />
        </li>
        <br />
        <li>
          <input type="text" placeholder="密码" />
        </li>
        <li v-if="ind===0">
          <input type="checkbox" />两周内自动登入
        </li>
        <li>
          <button v-if="ind===0">登入</button>
          <button v-else>注册</button>
        </li>
      </ol>
    </section>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      ind: 0,
      nav: ["登入", "注册"]
    };
  },
  computed: {
    navdata(){
      return '重点学生日周考成绩录入管理系统'
    }
  },
  methods: {
    tabLogin(ind){
      this.ind=ind
    }
  },
  created() {
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../style/login";
</style>