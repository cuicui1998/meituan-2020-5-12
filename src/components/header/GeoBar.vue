<template>
  <!-- 左侧部分地理位置模块 -->
  <div class="geo-bar">
    <svg class="icon icon-geo" aria-hidden="true">
      <use xlink:href="#iconicon-test1" />
    </svg>
    <span class="current-city">南通</span>
    <router-link to="/" tag="a" class="change-city">切换城市</router-link>
    <span>[</span>
    <router-link to="/" tag="a" class="city-guess">海门</router-link>
    <router-link to="/" tag="a" class="city-guess">张家港</router-link>
    <router-link to="/" tag="a" class="city-guess">常熟</router-link>
    <span>]</span>
    <router-link to="/landing" tag="a" class="user-entry">立即登录</router-link>
    <router-link to="/registration" tag="a" class="user-register">注册</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
a {
  font-size: 12px;
  color: #999;
}
a:hover {
  color: #fe8c00;
}
.geo-bar {
  height: 40px;
  display: flex;
  align-items: center;
  .icon-geo {
    font-size: 15px;
    color: #666;
  }
  .current-city {
    margin-left: -1px;
    font-size: 12px;
    color: #666;
  }
  .change-city {
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    padding: 0px 2px;
    margin: 0px 3px;
    background-color: #f4f4f4;
    color: #666;
    &:hover {
      color: #fe8c00;
    }
  }
  span {
    color: #999;
    font-size: 12px;
  }
  .city-guess {
    margin: 0 4px;
    &:hover {
      color: #fe8c00;
    }
  }
  .user-entry {
    margin-left: 25px;
    color: #fe8c00;
  }
  .user-register {
    margin-left: 10px;
  }
}
</style>