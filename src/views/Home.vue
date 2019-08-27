<template>
  <div class="wrap">
    <Header :navdata="this.$route.meta.title"></Header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home",
  components: {},
  created() {
    // 变量限制
    let a: any = "100";

    // a.a();

    let list: object[] = [{}, {}, {}];
    let list2: Array<number> = [1, 2, 3];

    // 函数限制
    function func(a: any, b: any, c?: any): number {
      return 100;
    }

    func(1, 2);

    // 自定义数据结构
    interface ReduceItem {
      class: string;
      weight: number;
      romm?: number;
    }

    let classes: Array<ReduceItem> = [
      {
        class: "1612B",
        weight: 500
      },
      {
        class: "1612A",
        weight: 400
      },
      {
        class: "1612C",
        weight: 499
      }
    ];

    classes.sort((a: ReduceItem, b: ReduceItem) => a.weight - b.weight);
    // console.log("classes...", classes);

    // 泛型
    function minValue<T>(arrs: T[]): T {
      if (typeof arrs[0] == "string") {
        arrs.sort((a: any, b: any) => a - b);
        return arrs[0];
      } else if (typeof arrs[0] == "number") {
        arrs.sort((a: any, b: any) => a - b);
        return arrs[0];
      } else if (typeof arrs[0] == "object") {
        arrs.sort((a: any, b: any) => a.weight - b.weight);
        return arrs[0];
      } else {
        return arrs[0];
      }
    }

    // console.log(minValue([1, 2, 3, 4, 5, 6]));

    // console.log(minValue(["a", "b", "c", "4", "5", "6"]));

    // console.log(minValue(classes));
  }
});
</script>
<style scoped lang="scss">
@import "../style/home.scss";
</style>
