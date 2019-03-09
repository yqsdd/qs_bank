<template>
  <div class="login">
    <div class="log-header">
      <span class="back" @click="$router.go(-1)"> < </span>
      <h5>硅谷外卖</h5>
    </div>
    <!--秘密获取，短信获取-->
    <div class="log-way">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="短信登录" name="first" class="tab-con">
          <form action="#" class="way-item on">
            <div class="txt-phone">
              <input type="text" placeholder="手机号" name="phone" id="phone"><button type="submit" name="qr-btn" id="qr-btn">获取验证码</button>
              <div style="clear: both"></div>
            </div>
            <input class="qr-name" type="text" placeholder="验证码" name="qr" id="qr">
            <p class="tips">温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意 <span>《用户服务协议》</span></p>
            <button class="btn-login" type="submit" id="btn-login" name="btn-login">登录</button>
            <span class="about-us">关于我们</span>
          </form>
        </el-tab-pane>
        <el-tab-pane label="密码登录" name="second" class="tab-con">
          <!--<div class="tab-con">-->
            <form action="#" class="way-item on">
              <input class="qr-name" type="text" placeholder="手机/邮箱/用户名" id="user-name">
              <input class="qr-name" type="password" placeholder="密码" id="pwd">
              <div class="txt-phone two">
                <input type="text" placeholder="验证码"><img class="captcha" src="./images/captcha.svg" alt="">
                <div style="clear: both"></div>
              </div>
              <button class="btn-login" type="submit" id="login-two" name="btn-login">登录</button>
              <span class="about-us">关于我们</span>
            </form>
          <!--</div>-->
        </el-tab-pane>
      </el-tabs>
      <!--<ul>-->
        <!--<li class="ways">-->
          <!--短信登录-->
        <!--</li>-->
        <!--<li class="ways line-blue">-->
          <!--密码登录-->
        <!--</li>-->
        <!--<div style="clear: both"></div>-->
      <!--</ul>-->

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        activeName:'second',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .login
    width 100%
    background-color #fff
    input
      border none
      outline:none
      text-indent 15px
    button
      border none
      outline:none
    .back
      width: 100%
      display: inline-block
      font-size 22px
      color: #7e8c8d
      margin 8px 0 0 10px
      line-height 30px
    h5
      font-size 50px
      color: #42b983
      text-align center
    .log-way
      width: 95%
      margin 0 auto
      height:auto
      .el-tabs__header
        margin 0 auto
        width: 50%
      .tab-con
        width 89%
        margin 0 auto
        .way-item
          width: 100%
          display none
        .way-item.on
          display: block
          .tips
            font-size 14px
            color: #7e8c8d
            line-height 20px
            margin 10px 0
            span
              color: #42b983
          .btn-login
            width 100%
            height 50px
            line-height 50px
            background-color #42b983
            color: #fff
            font-size 16px
          .about-us
            width 100%
            display: inline-block
            font-size 14px
            color: #7e8c8d
            line-height 40px
            text-align center
          .qr-name
            width 100%
            height:50px
            -webkit-box-sizing: border-box
            -moz-box-sizing: border-box
            box-sizing: border-box
            border 1px solid #f1f1f1
            border-radius 5px
            margin-top 20px
          input[type="text"]::-webkit-input-placeholder
            text-indent 15px
            color: #7e8c8d
          input[type="password"]::-webkit-input-placeholder
            text-indent 15px
            color: #7e8c8d
          .txt-phone
            height:50px
            line-height 50px
            border-radius 5px
            -webkit-box-sizing: border-box
            -moz-box-sizing: border-box
            box-sizing: border-box
            border: 1px solid #f1f1f1
            margin-top 20px
            button
              width 30%
              height: 100%
              float: right
              color: #7e8c8d
              background-color #fff
          .txt-phone.two
            margin-bottom 20px
            input[type="text"]
              width 70%
              height: 100%
              float: left
            .captcha
              width 30%
              height: 100%
              float: right
      .ways
        /*width: 50%*/
        float: left
        text-align center
        color: #7e8c8d
        font-size 14px
        margin 25px 20px 15px
        height:30px
        line-height 30px
      .ways:last-child
        text-align left
      .ways:first-child
        margin-left 30%
      .ways.line-blue
        border-bottom 3px solid #42b983

  .el-tabs__item
    /*margin-right 30px*/

</style>
