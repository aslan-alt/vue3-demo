<template>
  <div>
    <img src="../assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
name: "DocDemo"
}
</script>

<style lang="scss" scoped>
  div{
    

    width:100%;
    height: 85vh;

    background: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    > img{
      max-width: 100%
      
    }
  }

</style>