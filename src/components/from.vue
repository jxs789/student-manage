<template>
  <div class="left">
    <p class="rich">
      <span>新添成绩--XX同学</span>
      <span @click="$emit('change',flag)">X</span>
    </p>
    <div class="widget">
      <p>
        <input type="text" placeholder="默认当前日期" />
        <button>昨天</button>
      </p>
      <p>
        <label for>技能</label>
        <input type="text" placeholder="数学" />
      </p>
      <p>
        <label for>理论</label>
        <input type="text" placeholder="0-100之间数学" />
      </p>
    </div>
    <p class="hcenter">
      <button @click="$emit('change',flag)">取消</button>
      <button @click="$emit('change',flag)">确定</button>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    flag: Boolean
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    change() {
      this.flag = !this.flag;
    },
    cancel() {
      this.flag = !this.flag;
    }
  },
  created() {},
  mounted() {}
};
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
    p:nth-of-type(1) > input {
      flex: 1;
      height: 50px;
      line-height: 25px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      border: 1px solid rgba(220, 223, 230, 1);
    }
    p:nth-of-type(1) > button {
      width: 95px;
      height: 40px;
      line-height: 20px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(230, 241, 252, 1);
      text-align: center;
      border: 1px solid rgba(163, 208, 253, 1);
      color: #0076ff;
    }
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
    p:nth-of-type(2) {
      margin-bottom: 14px;
    }
    p:nth-of-type(2) > label,
    p:nth-of-type(3) > label {
      padding: 0 20px;
      line-height: 40px;
    }
    p:nth-of-type(1) > input {
      flex: 1;
      height: 40px;
      line-height: 20px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      border: 1px solid rgba(220, 223, 230, 1);
    }
    p:nth-of-type(1) > button {
      width: 95px;
      height: 40px;
      line-height: 20px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(230, 241, 252, 1);
      text-align: center;
      border: 1px solid rgba(163, 208, 253, 1);
      color: #0076ff;
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