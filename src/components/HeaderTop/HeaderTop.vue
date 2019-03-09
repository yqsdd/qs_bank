<template>
  <section class="header-top">
    <div class="header">
      <el-row>
        <slot name="left"></slot>
        <el-col :span="14">
          <div class="hea-title ellipsis">
            <span>{{title}}</span>
          </div>
        </el-col>
        <slot name="right"></slot>
      </el-row>
    </div>
  </section>
</template>

<script>
  export default {
    props:{
      title:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
    .hea-search
      width: 100%
      text-align center
      &> i
        color: #fff
        font-size 22px
    .hea-title
      width: 100%
      text-align center
    .hea-login
      width: 100%
      text-align center
</style>
