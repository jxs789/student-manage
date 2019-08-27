<template>
  <header>{{this.$attrs.navdata}}</header>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    // console.log(this);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
header {
  width: 100%;
  height: 70px;
  text-align: center;
  line-height: 70px;
  color: #fff;
  font-size: 21px;
  letter-spacing: 2px;
}
</style>