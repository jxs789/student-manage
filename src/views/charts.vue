<template>
  <div class="wrap">
    <Header :navdata="this.$route.meta.title"></Header>
    <section>
      <div class="head">
        <dl>
          <dt>选择班级：</dt>
          <dd>
            <span>1612B</span>
            <span>1612B</span>
          </dd>
        </dl>
        <dl>
          <dt>名字：</dt>
          <dd>
            <p>张三，里斯，（3/人）</p>
            <div class="switch">
              <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox" />
              <label for="cmn-toggle-1"></label><p>柱形图/折线图</p>
            </div>
          </dd>
        </dl>
      </div>
      <div class="myChart" ref="myChart" style="width: 100%;height:400px;"></div>
    </section>
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
      let myChart = this.$echarts.init(this.$refs.myChart);
      myChart.setOption({
        title: {
          text: "xx学生的日周考成绩统计图",
          subtext: "仅供参考"
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
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value",
          axisLabel: {}
        },
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
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
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

<style scoped lang="scss">
@import "../style/charts.scss";
</style>