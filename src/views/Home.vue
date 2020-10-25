<template>
  <div>
    <top-nav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
export default {
  name: "Home.vue",
  components:{
    TopNav
  }
}
</script>

<style lang="scss" scoped>

</style>