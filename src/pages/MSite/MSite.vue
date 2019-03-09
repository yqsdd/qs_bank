<template>
  <section class="mSite">
    <HeaderTop title="柳州东路明发滨江新城小三期11栋103">
      <el-col :span="4" slot="left">
        <div class="hea-search">
          <i class="iconfont icon-sousuo1"></i>
        </div>
      </el-col>
      <el-col :span="6" slot="right">
        <router-link to="login">
          <div class="hea-login">
            <span>登录</span>|<span>注册</span>
          </div>
        </router-link>
      </el-col>
    </HeaderTop>
    <div class="nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <el-row class="nav-row">
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/9.jpg" alt="栏目1"></div>
                  <span>甜品饮品</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/10.jpg" alt="栏目1"></div>
                  <span>超市便利</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/11.jpg" alt="栏目1"></div>
                  <span>美食</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/12.jpg" alt="栏目1"></div>
                  <span>简餐</span>
                </a>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/13.jpg" alt="栏目1"></div>
                  <span>新店特惠</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/14.jpg" alt="栏目1"></div>
                  <span>准时达</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/1.jpg" alt="栏目1"></div>
                  <span>预定早餐</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/2.jpg" alt="栏目1"></div>
                  <span>土豪推荐</span>
                </a>
              </el-col>
            </el-row>
          </div>
          <div class="swiper-slide">
            <el-row class="nav-row">
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/3.jpg" alt="栏目1"></div>
                  <span>甜品饮品</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/4.jpg" alt="栏目1"></div>
                  <span>超市便利</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/5.jpg" alt="栏目1"></div>
                  <span>美食</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/6.jpg" alt="栏目1"></div>
                  <span>简餐</span>
                </a>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/7.jpg" alt="栏目1"></div>
                  <span>新店特惠</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/8.jpg" alt="栏目1"></div>
                  <span>准时达</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/11.jpg" alt="栏目1"></div>
                  <span>预定早餐</span>
                </a>
              </el-col>
              <el-col :span="6">
                <a href="javascript:void(0);" class="nav-item">
                  <div><img src="./images/nav/12.jpg" alt="栏目1"></div>
                  <span>土豪推荐</span>
                </a>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="shops">
      <div class="shop-tit">
        <span><i class="iconfont icon-gengduo"></i> 附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    mounted(){
      var swiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    components:{
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .mSite
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
        color: #fff
  .nav
    width 100%
    margin-top 50px
    text-align center
    font-size 14px
    color: #000
    height:194.5px
    overflow: hidden
    background-color #fff
    border-bottom 1px solid #999
    margin-bottom 20px
    div
      margin-bottom 10px
      img
        display: inline-block
        height:50px
        width 50px
    .nav-row
      margin-bottom 10px
  .middle-bg
    width 100%
    height:15px
    background #e4e4e4
    border-top 1px solid #7e8c8d
    border-bottom 1px solid #7e8c8d

  .shops
    width 100%
    background-color #fff
    border-top 1px solid #999
    margin-bottom 92px
    .shop-tit
      margin-left 10px
      margin-top 10px
    .shop-item
      width 100%
      height:auto
      border-bottom 1px solid #999
      padding 15px 0
      .head-pho
        height: 75px
        img
          width 100%
          height:100%
          margin-left 5px
      .shop-des
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        padding-left  10px
        h3
          position relative
          font-size 16px
          color: #333
          padding-left 31px
          font-weight bold
          &::before
            position: absolute
            top:0
            left:0
            content '品牌'
            color: #000
            font-size 11px
            line-height 11px
            background-color rgb(255,217,48)
            padding 2px
            border-radius 2px
            font-weight bold
        .shop-stars
          margin 15px 0
          .stars-num
            float left
            .star-item
              width 10px
              height:10px
              display inline-block
              background-size 10px 10px
              background-repeat no-repeat
            .star-item.on
              background-image  url(../../components/ShopList/images/stars/star24_on@2x.png)
            .star-item.half
              background-image  url(../../components/ShopList/images/stars/star24_half@2x.png)
            .star-item.off
              background-image: url(../../components/ShopList/images/stars/star24_off@2x.png)
        .price
          color: #666
          font-size 12px
        .sell-press
          float left
          margin-left 4px
          font-size 10px
          .shop-num
            color: #ff6000
          .shop-performance
            color: #666
      .shop-brand
        margin-bottom  20px
        span
          display: inline-block
          padding 1px
          border:1px solid #999
          color: #666
          font-size 10px
      .brand-name
        color: #02a774
        border:1px solid #02a774
        font-size 9px
        padding 1px
      .shop-item:last-child
        border-bottom 0


</style>
