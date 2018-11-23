<template>
  <div class="toast" v-show="isShow">
    <div class="cont">
      {{msg}}
    </div>
  </div>
</template>
<style lang="less" scoped>
.toast {
  min-width: 240px;
  padding: 16px 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  color: #fff;
  max-width: 80%;
  font-size: 28px;
  line-height: 40px;
  border-radius: 8px;
  word-break: break-all;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  box-sizing: border-box;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  background-color: rgba(0, 0, 0, 0.7);
  width: -webkit-fit-content;
  width: fit-content;
}
</style>
<script>
export default {
  name: "tips",
  data() {
    return {
      timer: null,
      msg: "",
      isShow: false
    };
  },
  mounted() {},
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    showFn(opts) {
      this.isShow = true;
      this.msg = opts.msg || "";
      this.timer = setTimeout(() => {
        this.isShow = false;
        opts.cb && opts.cb();
        clearTimeout(this.timer);
      }, opts.wait || 20000);
    }
  }
};
</script>
