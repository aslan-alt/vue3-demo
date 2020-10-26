<template>
  <div class="topnav">
    <div class="logo">
      panda
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu">
      <img :src="unfold" alt="">

    </span>

  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'
import {useRoute,router} from '../router'
import unfold from '../assets/unfold.svg'

export default {
  name: "TopNav",
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const route = useRoute()
    const toggleMenu = () => {
      console.log('useRoute()')
      if(route.path === '/'){
        router.push('/doc')
      }
      menuVisible.value = !menuVisible.value
    }
    return {
      toggleMenu,
      unfold
    }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  background: #FEDC07;
  display: flex;
  padding: 24px 16px ;
  z-index: 10;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {

    width: 34px;
    height: 34px;

    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media(max-width: 500px) {
    > .toggleAside {
      display: inline-block;
      > img{
        max-width: 100%;
      }
    }
    > .menu {
      display: none
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>