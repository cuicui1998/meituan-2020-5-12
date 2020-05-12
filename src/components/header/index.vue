<template>
  <div class="header-bar">
    <el-row>
      <el-col :span="24"><top-bar /></el-col>
      <el-col :span="24"><search-bar /></el-col>
    </el-row>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
export default {
  components: {
    TopBar,
    SearchBar
  }
};
</script>