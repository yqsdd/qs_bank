<template>
  <div class="footer-guide top-border-1px">
    <el-row class="bottom-border-1px">
      <el-col :span="6">
        <div class="guide-item" :class="{on : '/mSite'===$route.path}" @click="goTo('/mSite')">
          <i class="iconfont icon-waimai"></i>
          <span>外卖</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="guide-item" :class="{on : '/search'===$route.path}" @click="goTo('/search')">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="guide-item" :class="{on :'/order'===$route.path}" @click="goTo('/order')">
          <i class="iconfont icon-icon--copy"></i>
          <span>订单</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="guide-item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
          <i class="iconfont icon-wodedangxuan"></i>
          <span>我的</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .footer-guide
    position fixed
    left 0
    bottom:0
    width: 100%
    background #fff
  .bottom-border-1px
    position relative
    border none
    &:after
      content: ''
      position: absolute
      left: 0
      bottom: 0
      width: 100%
      height 1px
      background-color #e4e4e4
      transform scaleY(0.5)
  .guide-item
    text-align center
    font-size 14px
    color: #999
    padding-top 3px
    font-weight bold
    & > i
      font-size 22px
      line-height 30px
    & > span
      display: block
      margin-bottom  5px
  .guide-item.on
    color: #02a774
</style>
