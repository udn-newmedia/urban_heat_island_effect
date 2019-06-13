<template>
  <div id="editor-wrapper">
    <div class="editor">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor'
}
</script>

<style lang="scss" scoped>
  #editor-wrapper{
    font-weight: normal;
    font-size: 15px;
    line-height: 1.78;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    .editor {

    }
  }
</style>
