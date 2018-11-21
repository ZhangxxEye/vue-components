<template>
    <div class="search-field flex-box">
        <i class="search-icon"></i>
        <div class="search-input flex-box flex-item">
            <input type="search" :value="value" @focus="focus" @input="change" :placeholder="placeholder" class="input-field" />
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    focus () {
      this.$emit('focus')
    },
    change($event) {
      this.$emit('input', $event.target.value)
    }
  },
  props: {
      placeholder: {
        type: String,
        default: '请输入'
      },
      value: String
  }
};
</script>
<style lang="less" scoped>
.search-field {
  width: 100%;
  background: rgba(242, 242, 242, 1);
  border-radius: 34px;
  padding: 8px 16px;
  // padding: 0px 16px;
  box-sizing: border-box;
  .search-icon {
    display: inline-block;
    width: 48px;
    height: 48px;
    background: url("./img/search.png") no-repeat;
    background-size: 100% 100%;
  }
  .search-input{
    height: 48px;
    align-items: center;
  }
  .input-field {
    height: 100%;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    // padding-top: 3px;
  }
}
</style>
