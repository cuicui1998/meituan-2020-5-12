<template>
  <div class="search-bar">
    <div class="container">
      <h1>
        <router-link to="/" tag="a">美团</router-link>
      </h1>
      <div class="input-bar">
        <!-- 双向数据绑定 searchWorld -->
        <input
          type="text"
          name
          id
          placeholder="搜索商家或地点"
          v-model="searchWorld"
          @focus="focus"
          @blur="blur"
        />
        <button>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconfangdajing1" />
          </svg>
        </button>
      </div>
      <div class="search-suggest">
        <dl class="search-hot" v-if="isSearchHot">
          <dt>热门搜索</dt>
        </dl>
        <dl class="related-words" v-if="isRelatedWords">
          <router-link to="www.baidu.com" tag="dd" v-for="item in relatedWords" :key="item">{{item}}</router-link>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWorld: "", // 1.记录用户在输入框中输入什么内容
      isFocus: false, // 2. 记录输入框是否被点击的状态
      relatedWords: ["火锅", "火锅自助餐", "火锅 重庆"]
    };
  },
  computed: {
    isSearchHot() {
      //   4.当输入框聚焦并且输入框没有内容的时候 展示热门搜索
      return this.isFocus && this.searchWorld.length == 0;
    },
    isRelatedWords() {
      //   5.当输入框聚焦并且输入框 有内容的时候 展示联想词
      return this.isFocus && this.searchWorld.length > 0;
    }
  },
  methods: {
    focus() {
      // 3. 当输入框聚焦 状态改成true
      this.isFocus = true;
    },
    blur() {
      // 6.当输入框失去聚焦 状态改成true
      //   因为当失去焦点的时候, isFocues就会变成false
      //   当点击列表中的内容时,需要跳转到别的页面,但是此时已经出发了blur事件  isFocues就会变成false
      //   这样会导致我们点击不到列表中的内容
      //   所以这里使用定时器 等用户点击列表之后 再触发blur事件
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    }
  }
};
</script>

<style lang="less">
.search-bar {
  width: 100%;
  height: 122px;
  background-color: #fff;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 28px;
    background-color: #fff;
  }
  box-shadow: 0 15px 27px -10px rgba(0, 0, 0, 0.1);
  .container {
    position: relative;
    width: 1190px;
    margin: 0 auto;
    //   网站logo样式
    h1 {
      text-indent: 9000px;
      white-space: nowrap;
      overflow: hidden;
      float: left;
      a {
        display: block;
        width: 126px;
        height: 46px;
        background: url(https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png);
        background-size: 126px;
      }
    }
    // 搜索框样式
    .input-bar {
      position: relative;
      float: left;
      width: 550px;
      height: 40px;
      background: #fff;
      margin-left: 194px;
      input {
        width: 85.45%;
        height: 100%;
        box-sizing: border-box;
        padding: 15px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border: 1px solid #e5e5e5;
        border-right: none;
        &::-webkit-input-placeholder {
          color: #999;
          font-size: 14px;
        }
      }
      button {
        position: absolute;
        width: calc(100% - 85.45%);
        height: 100%;
        background-color: #ffc300;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        svg {
          font-size: 25px;
        }
      }
    }
    // 搜索列表
    .search-suggest {
      position: absolute;
      width: 470px;
      top: 39px;
      left: 320px;
      font-size: 12px;
      color: #999;
      background-color: #fff;
      box-sizing: border-box;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
      .search-hot {
        padding: 10px 0 45px 10px;
        font-weight: bold;
        border-top: none;
        border: 1px solid #e5e5e5;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      .related-words {
        border-top: none;
        border: 1px solid #e5e5e5;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        dd {
          padding: 5px 0;
          color: rgba(51, 51, 51);
          padding-left: 10px;
          &:hover {
            background-color: rgb(248, 248, 248);
            color: #fe8c00;
          }
        }
      }
    }
  }
}
</style>