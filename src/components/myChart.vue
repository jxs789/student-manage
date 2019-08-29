<template>
    <div id="myChart" :style="{width: '100%', height: '400px'}">
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
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
    created(){

    },
    mounted(){
this.drawLine()
    }
}
</script>
<style scoped lang="scss">
#myChart{
  margin-top: 20px;
}

</style>