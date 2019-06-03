<template>
  <div class="numberBox">
    <div class="left">
       <div class="number">
        {{ percent }}%
      </div>
    </div> 
    <div class="right">
      <div class="describe">
        {{ describe }}
      </div>
      <div class="source-info">
        {{ sourceInfo }}
      </div>
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
  border-left: solid 2px #7d7d7d;
  padding-left: 10px;
  margin-bottom: 38px;
  @media screen and (min-width: 321px) {

  }
  @media screen and (min-width: 521px) {
    border: 0;
    padding: 0;
    display: flex;
  }
  @media screen and (min-width: 769px) {

  }
  .left {
    @media screen and (min-width: 521px) {
      width: 20%;
      text-align: right;
      padding-right: 14px;
    }
    @media screen and (min-width: 769px) {
      
    }
    .number {
      color: #fe0000;
      font-size: 25px;
      padding-bottom: 10px;
    }
  }
  .right {
    @media screen and (min-width: 521px) {
      width: 80%;
      padding-left: 20px;
      border-left: solid 1px #7d7d7d;
    }
    @media screen and (min-width: 769px) {
      
    }
    .describe {
      font-size: 15px;
      color: #000000;
      line-height: 2;
      padding-bottom: 12px;
    }
    .source-info {
      color: #7d7d7d;
      font-size: 12.5px;
    }
  }
}
</style>
