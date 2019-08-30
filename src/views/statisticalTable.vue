<template>
  <div class="wrap">
    <Header :navdata="'学生日周考试成绩统计表'"></Header>
    <main class="main">
      <section class="headline">
        <div class="lt">
          <span>讲师：XXX</span>
          <span class="studentname">学生：XX</span>
        </div>
        <select name id class="select">
          <option value>快捷选择其他学生</option>
        </select>
         <!-- <span class="titleDelete">X</span> -->
      </section>
      <ul class="list">
        <li>
          <span>序号</span>
          <span>日期</span>
          <span>理论</span>
          <span>技能</span>
          <span class="solve">分析与解决</span>
          <span>是否周考</span>
          <div>
            <span>操作</span>
          </div>
        </li>
        <li>
          <span>1</span>
          <span>11-30</span>
          <span>30</span>
          <span>60</span>
          <span class="solve">分析与分析与解决解决</span>
          <span>是</span>
          <div>
            <span @click="dialogVisible = true">编辑</span>
            <el-dialog
              title="编辑内容"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
            >
              <div class="choose">
                <span>理论：</span>
                <input type="text" placeholder="0-100之间的数字" />
              </div>
              <div class="choose">
                <span>技能：</span>
                <input type="text" placeholder="0-100之间的数字" />
              </div>
              <div class="day">
                <span>日考</span>
                <span>周考</span>
              </div>
              <div class="choose">
                <span>解决方案：</span>
                <textarea name id cols="30" rows="5"></textarea>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
            <span @click="open2">删除</span>
          </div>
        </li>
        <li>
          <span>1</span>
          <span>11-30</span>
          <span>30</span>
          <span>60</span>
          <span class="solve">分析与解决分析与解决分析与解决分析与解决分析与解决分析与解决分析与解决</span>
          <span>是</span>
          <div>
            <span>编辑</span>
            <span @click="open2">删除</span>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {
   
  },
  methods: {
    open2() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "@/style/statisticalTable.scss";
</style>