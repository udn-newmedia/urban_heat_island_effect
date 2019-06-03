<template>
  <div id="editor">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Editor'
}
</script>

<style scoped>
  #editor{
    font-weight: normal;
    font-size: 20px;
    line-height: 1.78;
    opacity: 0.8;
  }
</style>
