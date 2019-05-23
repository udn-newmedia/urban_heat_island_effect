<template>
  <div class="numberBox">
    <div class="number">
      {{ percent }}%
    </div>
    <div class="describe">
      {{ describe }}
    </div>
    <div class="source-info">
      {{ sourceInfo }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'numberBox',
  props: {
    percent: Number,
    describe: String,
    sourceInfo: String
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.numberBox {
  border-left: solid 3px #f2f2f2;
  padding-left: 10px;
  margin-bottom: 38px;
  .number {
    color: #fe0000;
    font-size: 25px;
  }
  .describe {

  }
  .source-info {
    color: #7d7d7d;
    font-size: 12.5px;
  }
}
</style>
