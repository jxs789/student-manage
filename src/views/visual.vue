<template>
  <div class="wrap">
    <header class="header">重点关注学生考试成绩统计图</header>
    <main class="main">
      <section class="navBox">
        <div class="lt">
          <b>切换班级：</b>
          <ul class="nav">
            <li>1703C</li>
            <li>1703E</li>
            <li>1703E</li>
            <li @click="add('addClass')">创建班级+</li>
          </ul>
        </div>
        <div class="switch">
          <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox" />
          <label for="cmn-toggle-1"></label>
          <p>柱形图/折线图</p>
        </div>
      </section>
      <section class="chart">
        <form action class="form">
          <label for>添加学生:</label>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button class="btn">添加</button>
        </form>
        <MyChart/>
        <!-- <div id="myChart" :style="{width: '100%', height: '400px'}"></div> -->
        <div class="layer">
          <span class="text" @click="add('add')">添加成绩+</span>
          <span class="text" @click="add('establish')">添加分析和解决方案+</span>
          <span class="text">查看和编辑该生所有成绩</span>
        </div>
      </section>
      <!-- <From  v-show="info.flag" @change="change"/> -->
       <Dialog v-show="info.flag" @change="change" />
    </main>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      // flag: false,
      // analyzes: false
    };
  },
  computed: {
  ...mapState({
      info: state => state.visual.info
    })
  },
  methods: {
     ...mapMutations({
      upstatus: "visual/upstatus"
    }),
    add(type) {
        this.upstatus(type)

      // this.flag=true
    },
    change(f){
     this.flag=f 
     this.analyzes=f
    },
    // establish(type){
    //   this.upstatus()
    //   // this.analyzes=true
    // }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
@import "../style/visual.scss";
</style>