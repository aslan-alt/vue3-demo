<template>
  <div>
    <top-nav/>
    <div class="banner">
      <img src="../assets/panda.png" alt="">
      <h1>Panda UI</h1>
      <h2>一个基于Vue3的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/aslan-alt/vue3-demo">GitHub</a>
        <router-link to="doc">开始</router-link>

      </p>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";



export default {
  name: "Home.vue",
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped>
.banner {
  padding-top: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  h2{
    padding: 8px 0;
  }
  img{
    border-radius: 50%;
  }
  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
      border:1px solid black;
      &:hover{
        background: black;
        color: white;
      }
    }
  }
}
</style>