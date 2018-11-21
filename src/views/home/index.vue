<template>
  <div>

    <div class="greeter"> {{ greeter }}</div>
    <search v-model="searchVal"></search>
  </div>

</template>

<script>
import search from "@/components/search";
export default {
  name: "home",
  data() {
    return {
      greeter: "Hello, Vue!",
      searchVal: ''
    };
  },
  components: {
    search
  },
  watch: {
    searchVal (val) {
      console.log(val)
    }
  },
  created() {
    console.log("发送请求4444444444444");
    this.$http
      .getApiXxx()
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  }
};
</script>

<style lang="less" src="./index.less"></style>
