<template>
  <div class="left">
    <p class="rich">
      <span>{{headTitle}}</span>
      <span @click="change">X</span>
    </p>
    <div class="widget">
      <p>
        <label for>班级名</label>
        <input v-model="info.classname" type="text" placeholder="班级名" />
      </p>
      <p>
        <label for>教室名</label>
        <input v-model="info.classroom" type="text" placeholder="教室名" />
      </p>
      <p>
        <label for>辅导员</label>
        <input v-model="info.assistant" type="text" placeholder="铺导员" />
      </p>
    </div>
    <p class="hcenter">
      <button @click="change">取消</button>
      <button @click="btnChange">确定</button>
    </p>
  </div>
</template>
<script lang="ts">
import { mapState, mapActions, mapMutations } from "vuex";
import Vue from "vue";
export default Vue.extend({
  props: {
    analyzes: Boolean
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      info: state => state.visual.info
    }),
    headTitle() {
      if (this.info.type === "add") {
        return "添加成绩";
      } else if (this.info.type === "establish") {
        return "添加分析和解决方案";
      } else {
        return "创建班级";
      }
    }
  },
  methods: {
    ...mapActions({
      getestablish: "visual/getestablish"
    }),
    ...mapMutations({
      upstatus: "visual/upstatus"
    }),
    btnChange() {
      this.upstatus();
      if (
        this.info.classname == "" ||
        this.info.classroom == "" ||
        this.info.assistant == ""
      ) {
        alert("请输入内容");
      }
      this.getestablish({
        classname: this.info.classname,
        classroom: this.info.classroom,
        assistant: this.info.assistant
      });
    },
    change() {
      this.upstatus();
    }
  },
  created() {},
  mounted() {}
});
</script>
<style scoped lang="scss">
.left {
  display: flex;
  flex-direction: column;
  padding: 14px 14px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -176px;
  margin-left: -241px;
  width: 483px;
  height: 353px;
  line-height: 20px;
  border-radius: 4px 4px 4px 4px;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
}
.left {
  button {
    outline: none;
  }
  .rich {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .widget {
    width: 439px;
    height: 180px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 16px;
    text-align: left;
    font-family: PingFangSC-regular;
    padding: 0 40px;
    margin-bottom: 60px;
    p {
      display: flex;
      margin-bottom: 20px;
      width: 100%;
    }
    p > input {
      flex: 1;
      border-radius: 4px;
      padding-left: 10px;
      outline: none;
    }
    p:nth-of-type(3),
    p:nth-of-type(1),
    p:nth-of-type(2) {
      margin-bottom: 14px;
    }
    p:nth-of-type(1) > label,
    p:nth-of-type(2) > label,
    p:nth-of-type(3) > label {
      padding: 0 20px;
      line-height: 40px;
    }
  }
  .hcenter {
    padding-left: 300px;
    button:nth-of-type(1) {
      width: 65px;
      height: 36px;
      line-height: 20px;
      background: #ffffffff;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      border: 1px solid rgba(217, 217, 217, 1);
    }
    button:nth-of-type(2) {
      width: 65px;
      height: 36px;
      line-height: 20px;
      border-radius: 4px;
      background: #1989fa;
      text-align: center;
      color: #f1f1f1;
      border: 1px solid rgba(217, 217, 217, 1);
      margin-left: 10px;
    }
  }
}
</style>