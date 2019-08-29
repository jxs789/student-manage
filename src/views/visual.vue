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
            <li>创建班级+</li>
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
          <span class="text">添加成绩+</span>
          <span class="text">添加分析和解决方案+</span>
          <span class="text">查看和编辑该生所有成绩</span>
        </div>
      </section>
      <div class="from_box">
        <div class="left">
          <p class="rich">
            <span>新添成绩--XX同学</span>
            <span>X</span>
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
            <button>取消</button>
            <button>确定</button>
          </p>
        </div>
        <div class="right">
          <p class="rich">
            <span>新添分析--XX同学</span>
            <span>X</span>
          </p>
          <div class="widget">
            <p>
              <input type="text" placeholder="默认当前日期" />
              <button>昨天</button>
            </p>
            <p>
              <label for>分析</label>
              <input type="text"/>
            </p>
            <p>
              <label for>解决方案</label>
              <input type="text"/>
            </p>
          </div>
           <p class="hcenter">
            <button>取消</button>
            <button>确定</button>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
<script>

export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
  },
  created() {},
  mounted() {
  }
};
</script>
<style lang="scss">
@import "../style/visual.scss";
</style>