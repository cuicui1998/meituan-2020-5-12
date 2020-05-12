<template>
  <el-container class="container">
    <el-header class="el-header" height>
      <mt-header />
    </el-header>
    <el-main class="el-main">Main</el-main>
    <el-footer class="el-footer" height>
      <mt-footer />
    </el-footer>
  </el-container>
</template>

<script>
import MtHeader from "components/header/index";
import MtFooter from "components/footer/index";
export default {
  components: {
    MtHeader,
    MtFooter
  }
};
</script>

<style lang="less">
.el-container {
  .el-header {
    padding: 0;
  }
  .el-main,
  .el-footer {
    width: 1190px;
    margin: 0 auto;
    padding: 0;
  }
  .el-main {
    height: 500px;
  }
}
</style>