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
        <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
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
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "XX同学的日周考成绩统计表图",
          subtext: "仅供参考",
          textStyle: {
            color: "rgb(71,135,143)"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["技能", "理论"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: { yAxisIndex: "none" },
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "08-01",
              "08-02",
              "08-03",
              "08-04",
              "08-05",
              "08-06",
              "08-07",
              "08-08",
              "08-09",
              "08-10",
              "08-11",
              "08-12",
              "08-13"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}"
            }
          }
        ],
        series: [
          {
            name: "技能",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "理论",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    }
  },
  created() {},
  mounted() {
    this.drawLine();
  }
};
</script>
<style lang="scss">
@import "../style/visual.scss";
</style>