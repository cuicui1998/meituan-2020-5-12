<template>
  <ul class="nav-bar">
    <li class="my-mt">
      <router-link to="/" tag="a" class="my-mt-link">我的美团</router-link>
      <dl class="my-mt-list">
        <dd>
          <router-link to="/">我的订单</router-link>
        </dd>
        <dd>
          <router-link to="/">我的收藏</router-link>
        </dd>
        <dd>
          <router-link to="/">抵用券</router-link>
        </dd>
        <dd>
          <router-link to="/">账户设置</router-link>
        </dd>
      </dl>
    </li>
    <li>
      <router-link to="/">手机APP</router-link>
    </li>
    <li class="business-center">
      <span>商家中心</span>
      <dl class="business-center-list">
        <dd>
          <router-link to="/">美团餐饮商户中心</router-link>
        </dd>
        <dd>
          <router-link to="/">登录商家中心</router-link>
        </dd>
        <dd>
          <router-link to="/">美团智能收银</router-link>
        </dd>
        <dd>
          <router-link to="/">我想合作</router-link>
        </dd>
        <dd>
          <router-link to="/">手机免费开店</router-link>
        </dd>
        <dd>
          <router-link to="/">餐饮代理商招募</router-link>
        </dd>
        <dd>
          <router-link to="/">商家申请开票</router-link>
        </dd>
        <dd>
          <router-link to="/">免费合作美团排队</router-link>
        </dd>
      </dl>
    </li>
    <li class="mt-plan">
      <span>美团规则</span>
      <dl>
        <dd>规则中心</dd>
        <dd>规则目录</dd>
        <dd>规则评议院</dd>
      </dl>
    </li>
    <li class="web-nav">
      <span>网站导航</span>
      <div class="web-nav-list">
        <dl class="hotel">
          <dt>酒店旅游</dt>
          <dd>
            <router-link :to="{path: '/'}">国际机票</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">火车票</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">名宿</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">经济型酒店</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">主题酒店</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">商务酒店</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">公寓</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">豪华酒店</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">客栈</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">青年旅社</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">度假酒店</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">别墅</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">农家院</router-link>
          </dd>
        </dl>
        <dl class="food">
          <dt>吃美食</dt>
          <dd>
            <router-link :to="{path: '/'}">烤鱼</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">特色小吃</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">烧烤</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">自助餐</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">火锅</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">代金券</router-link>
          </dd>
        </dl>
        <dl class="movie">
          <dt>看电影</dt>
          <dd>
            <router-link :to="{path: '/'}">热映电影</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">热门影院</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">热映电影口碑榜</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">最受期待电影</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">国内票房榜</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">北美票房榜</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">电影排行榜</router-link>
          </dd>
        </dl>
        <dl class="app">
          <dt>手机应用</dt>
          <dd>
            <!-- <a href="#"> -->
            <img
              src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
              title="美团app"
              alt="美团app"
            />
            <!-- </a> -->
          </dd>
          <dd>
            <!-- <a href="#"> -->
            <img
              src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
              title="外卖app"
              alt="外卖app"
            />
            <!-- </a> -->
          </dd>
          <dd>
            <!-- <a href="#"> -->
            <img
              src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
              title="民宿app"
              alt="民宿app"
            />
            <!-- </a> -->
          </dd>
          <dd>
            <!-- <a href="#"> -->
            <img
              src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
              title="点评app"
              alt="点评app"
            />
            <!-- </a> -->
          </dd>
          <dd>
            <!-- <a href="#"> -->
            <img
              src="  https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
              title="猫眼app"
              alt="猫眼app"
            />
            <!-- </a> -->
          </dd>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less">
.nav-bar {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  height: 40px;
  a,
  span,
  dd {
    color: #999;
  }
  a:hover {
    color: #fe8c00;
  }
  li {
    height: 40px;
    padding: 12px 14px;
    box-sizing: border-box;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    // 我的美团下拉列表样式
    &.my-mt {
      position: relative;
      &:hover {
        background-color: #fff;
        box-shadow: 0 -3px 5px 0 rgba(0, 0, 0, 0.1);
        border-color: #e5e5e5;
        dl {
          display: block;
        }
      }
      dl {
        display: none;
        position: absolute;
        z-index: 999;
        top: 40px;
        right: -1px;
        width: 78px;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
        border: 1px solid #e5e5e5;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        border-top: 0px solid #fff;
        box-sizing: border-box;
        dd {
          height: 35px;
          line-height: 35px;
        }
      }
    }
    // 商家中心下拉列表的样式
    &.business-center {
      position: relative;
      &:hover {
        background-color: #fff;
        box-shadow: 0 -3px 5px 0 rgba(0, 0, 0, 0.1);
        border-color: #e5e5e5;
        height: 40px;
        span {
          color: #fe8c00;
        }
        dl {
          display: block;
        }
      }
      dl::before {
        //   菜单与列表重叠处是白色的方法
        content: "";
        display: block;
        width: 76px;
        height: 5px;
        position: absolute;
        right: 0;
        top: -3px;
        background-color: #fff;
      }
      dl {
        display: none;
        position: absolute;
        z-index: 999;
        top: 100%;
        right: -1px;
        width: 140%;
        border: 1px solid #e5e5e5;
        background-color: #fff;
        text-align: center;
        border-radius: 4px;
        border-top-right-radius: 0;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        dd {
          height: 35px;
          line-height: 35px;
        }
      }
    }
    // 美团规则下拉列表的样式
    &.mt-plan {
      position: relative;
      &:hover {
        background-color: #fff;
        box-shadow: 0 -3px 5px 0 rgba(0, 0, 0, 0.1);
        border-color: #e5e5e5;
        span {
          color: #fe8c00;
        }
        dl {
          display: block;
        }
      }
      dl {
        display: none;
        position: absolute;
        z-index: 999;
        top: 40px;
        left: -1px;
        width: 78px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        border-top: 0px solid #fff;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        dd {
          height: 35px;
          line-height: 35px;
          text-align: center;
        }
      }
    }
    // 网站导航下拉列表的样式
    &.web-nav {
      position: relative;
      &:hover {
        background-color: #fff;
        box-shadow: 0 -3px 5px 0 rgba(0, 0, 0, 0.1);
        border-color: #e5e5e5;
        .web-nav-list {
          display: block;
        }
      }
      .web-nav-list::before {
        position: absolute;
        content: "";
        display: block;
        width: 76px;
        height: 4px;
        top: -2px;
        right: 0px;
        background-color: #fff;
      }
      .web-nav-list {
        display: none;
        position: absolute;
        z-index: 999;
        top: 40px;
        right: -1px;
        box-sizing: border-box;
        height: 300px;
        width: 1200px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        border-top-right-radius: 0;
        padding: 30px 36px 36px 47px;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        dl {
          float: left;
          margin-right: 47px;
          dt {
            margin-bottom: 26px;
            color: #222;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
          }
          &.hotel {
            width: 234px;
            dd {
              float: left;
              width: 33%;
              padding: 5px 0;
              text-align: center;
            }
          }
          &.food {
            width: 156px;
            dd {
              float: left;
              width: 50%;
              text-align: center;
              padding: 5px 0;
              text-align: center;
            }
          }
          &.movie {
            width: 90px;
            dd {
              float: left;
              width: 100%;
              text-align: center;
              padding: 5px 0;
              text-align: center;
            }
          }
          &.app {
            float: right;
            width: 380px;
            dd {
              float: left;
              margin: 0 8px;
              img {
                width: 60px;
                height: 60px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

