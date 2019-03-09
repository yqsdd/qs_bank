<template>
  <section class="login-container">
    <slot name="top"></slot>

    <slot name="bottom"></slot>
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

</style>
