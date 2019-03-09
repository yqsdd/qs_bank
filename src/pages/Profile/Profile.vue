<template>
  <section class="profile">
    <HeaderTop title="我的">
      <el-col :span="4" slot="left"><div class="hea-search"><i class="iconfont icon-sousuo1"></i></div></el-col>
    </HeaderTop>
    <router-link to="login" class="login-mou">
      <el-row>
        <el-col :span="5">
          <span><i class="iconfont icon-personal"></i></span>
        </el-col>
        <el-col :span="17" class="mou-col">
          <h2><span class="self-login">登录</span>/<span class="self-register">注册</span></h2>
          <p><i class="iconfont icon-shouji"></i> 暂无手机号绑定</p>
        </el-col>
        <el-col :span="2"><span class="col-rig"> > </span></el-col>
      </el-row>
    </router-link>
    <el-row class="pro-points">
      <el-col :span="8" class="point-item">
        <p class="money"><span>0.00</span>元</p>
        <span>我的余额</span>
      </el-col>
      <el-col :span="8" class="point-item">
        <p class="money"><span>0</span>个</p>
        <span>我的优惠</span>
      </el-col>
      <el-col :span="8" class="point-item item-none">
        <p class="money"><span>0</span>分</p>
        <span>我的积分</span>
      </el-col>
    </el-row>
    <section class="item-con">
      <div class="pro-item">
        <i class="iconfont icon-dd_active"></i>
        <div class="clearfix">
          <span>我的订单</span>
          <span class="arr"> > </span>
        </div>
      </div>
      <div class="pro-item">
        <i class="iconfont icon-jifen"></i>
        <div class="clearfix">
          <span>积分商城</span>
          <span class="arr"> > </span>
        </div>
      </div>
      <div class="pro-item">
        <i class="iconfont icon-huiyuan"></i>
        <div class="clearfix">
          <span>嘟嘟外卖会员卡</span>
          <span class="arr"> > </span>
        </div>
      </div>
      <div class="pro-item">
        <i class="iconfont icon-building"></i>
        <div class="clearfix">
          <span>服务中心</span>
          <span class="arr"> > </span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  export default {
    components:{
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .profile
    width 100%
    overflow hidden
    .header
      width 100%
      position fixed
      left:auto
      top 0
      background #42b983
      height:50px
      line-height 50px
      font-size 16px
      z-index 9999
      color: #fff
      .pos-border
        position relative
        &::after
          content: ''
          position: absolute
          bottom 0
          left:0
          width 100%
          height:0
          border-bottom 1px solid #fff
        h3
          text-align center
          font-size 22px
    .login-mou
      display: block
      margin-top 50px
      height:auto
      width: 100%
      background #42b983
      padding 25px 0
      .icon-personal
        display: inline-block
        font-size 62px
      h2
        font-size 30px
        line-height 30px
        color: #fff
        margin-bottom 5px
      p
        font-size 14px
        color: #fff
        line-height 14px
      .mou-col i
        font-size 14px
        color: #fff
      .col-rig
        font-size 14px
        color: #fff
        line-height 50px
    .pro-points
      width 100%
      border-bottom 1px solid #f1f1f1
      background-color #fff
      margin-bottom 20px
      text-align center
      .point-item
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        border-right 1px solid #f1f1f1
        span
          font-size 14px
          color: #666
          line-height 30px
        p
          font-size 13px
          color: #666
          margin 15px 0 0 0
          span
            color: #ff5f3e
            font-size 30px
            font-weight bold
        p:first-child
          span
            color: #f90
        p:last-child
          span
            color: #42b983
      .item-none
        border-right 0
    .item-con
      width: 100%
      .pro-item
        width 80%
        border-bottom 1px solid #000
        float: right
        height:40px
        i
          display: inline-block
          font-size 22px
          margin-right 20px
        div
          /*width:100%*/
          .arr
            float: right;
            color: #666
            font-size 18px
            margin-right 10px
</style>
