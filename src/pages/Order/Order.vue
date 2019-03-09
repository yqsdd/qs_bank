<template>
  <section class="order">
    <HeaderTop title="订单列表">
      <el-col :span="4" slot="left"><div class="hea-search"><i class="iconfont icon-sousuo1"></i></div></el-col>
    </HeaderTop>
    <section class="ord-login">
      <img src="./images/person.png" alt="">
      <h2>请登录后查看外卖订单</h2>
      <button class="btn-none">立即登录</button>
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
  .order
    width 100%
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
      h3
        text-align center
        font-size 23px
    .ord-login
      width 60%
      margin 100px auto 10px
      text-align center
      img
        display: block
        width 100%
        height:30%
      h2
        font-size 18px
        color: #999
      button
        height:45px
        width:100px
        background #42b983
        line-height:45px
        color: #fff
        font-size 15px
        margin-top 10px
        border-radius 3px

</style>
