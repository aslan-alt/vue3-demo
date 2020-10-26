<template>
  <div class="layout">
    <TopNav class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">

        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs"><span>Tabs </span>&nbsp; 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import {inject, Ref, onMounted} from 'vue'


export default {
  name: "Doc",
  components: {
    TopNav
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')

    onMounted(() => {
      menuVisible.value = true
    })
    return {
      menuVisible
    }
  }


}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
      aside {
        width: auto;
      }

    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }


  > main {
    flex-grow: 1;
    background: #fff;
  }
}

aside {
  background: #fff;
  width: 160px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 66px;


  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 6px 8px;
      border: 1px solid black;
    }
  }
}

main {
  overflow: auto;
}
</style>