<template>
  <div class="shop-container">
    <div class="shop-item">
      <el-row>
        <el-col :span="5" class="head-pho">
          <a href="javascript:void(0);"><img src="./images/shop/1.jpg" alt="商家"></a>
        </el-col>
        <el-col :span="15" class="shop-des">
          <h3>嘟嘟最爱...</h3>
          <div class="shop-stars">
            <div class="stars-num">
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item half"></span>
              <span class="star-item off"></span>
            </div>
            <div class="sell-press">
              <span class="shop-num">3.6</span>
              <span class="shop-performance">月售106单</span>
            </div>
            <div style="clear: both"></div>
          </div>
          <P class="price"><span>¥20起送</span><span> / </span><span>配送费约¥5</span></P>
        </el-col>
        <el-col :span="4">
          <p class="shop-brand"><span>保</span><span>准</span><span>票</span></p>
          <span class="brand-name">嘟嘟专送</span>
        </el-col>
      </el-row>
    </div>
    <div class="shop-item">
      <el-row>
        <el-col :span="5" class="head-pho">
          <a href="javascript:void(0);"><img src="./images/shop/1.jpg" alt="商家"></a>
        </el-col>
        <el-col :span="15" class="shop-des">
          <h3>嘟嘟最爱...</h3>
          <div class="shop-stars">
            <div class="stars-num">
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item half"></span>
              <span class="star-item off"></span>
            </div>
            <div class="sell-press">
              <span class="shop-num">3.6</span>
              <span class="shop-performance">月售106单</span>
            </div>
            <div style="clear: both"></div>
          </div>
          <P class="price"><span>¥20起送</span><span> / </span><span>配送费约¥5</span></P>
        </el-col>
        <el-col :span="4">
          <p class="shop-brand"><span>保</span><span>准</span><span>票</span></p>
          <span class="brand-name">嘟嘟专送</span>
        </el-col>
      </el-row>
    </div>
    <div class="shop-item">
      <el-row>
        <el-col :span="5" class="head-pho">
          <a href="javascript:void(0);"><img src="./images/shop/1.jpg" alt="商家"></a>
        </el-col>
        <el-col :span="15" class="shop-des">
          <h3>嘟嘟最爱...</h3>
          <div class="shop-stars">
            <div class="stars-num">
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item half"></span>
              <span class="star-item off"></span>
            </div>
            <div class="sell-press">
              <span class="shop-num">3.6</span>
              <span class="shop-performance">月售106单</span>
            </div>
            <div style="clear: both"></div>
          </div>
          <P class="price"><span>¥20起送</span><span> / </span><span>配送费约¥5</span></P>
        </el-col>
        <el-col :span="4">
          <p class="shop-brand"><span>保</span><span>准</span><span>票</span></p>
          <span class="brand-name">嘟嘟专送</span>
        </el-col>
      </el-row>
    </div>
    <div class="shop-item">
      <el-row>
        <el-col :span="5" class="head-pho">
          <a href="javascript:void(0);"><img src="./images/shop/1.jpg" alt="商家"></a>
        </el-col>
        <el-col :span="15" class="shop-des">
          <h3>嘟嘟最爱...</h3>
          <div class="shop-stars">
            <div class="stars-num">
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item half"></span>
              <span class="star-item off"></span>
            </div>
            <div class="sell-press">
              <span class="shop-num">3.6</span>
              <span class="shop-performance">月售106单</span>
            </div>
            <div style="clear: both"></div>
          </div>
          <P class="price"><span>¥20起送</span><span> / </span><span>配送费约¥5</span></P>
        </el-col>
        <el-col :span="4">
          <p class="shop-brand"><span>保</span><span>准</span><span>票</span></p>
          <span class="brand-name">嘟嘟专送</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
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
            background-image  url(./images/stars/star24_on@2x.png)
          .star-item.half
            background-image  url(./images/stars/star24_half@2x.png)
          .star-item.off
            background-image: url(./images/stars/star24_off@2x.png)
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
