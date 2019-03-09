<template>
  <section class="search">
    <HeaderTop title="搜索">
      <el-col :span="4" slot="left"><div class="hea-search"><i class="iconfont icon-sousuo1"></i></div></el-col>
    </HeaderTop>
    <form class="s-form" action="#">
      <input type="text" placeholder="请输入商家或美食名称"><button type="submit">提交</button>
    </form>
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
  .search
    width: 100%
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
        font-size 20px
    .s-form
      width: 100%
      height:60px
      margin-top 50px
      line-height 60px
      background #fff
      input[type="text"]
        background-color #f5f5f5
        width 70%
        height:35px
        text-indent 10px
        font-size 14px
        color: #000
        font-weight bold
        margin 0 10px 0 10px
        border-radius 5px
      button
        background #42b983
        width 18%
        height:35px
        line-height:35px
        color: #fff
        font-size 16px
        font-weight bold
        border-radius 3px
        border:none
        outline none
</style>
