<template>
  <button class="yr-btn" @click="btnClicked">
      <slot name="icon"></slot> 
      <span>{{ msg }}</span>
  </button>
</template>

<script>
export default {
//   data: function(){
//       return {
//           msg: "下载"
//       }
//   }
    props: {
        msg: {
            default: "下载"
        }
    },
    methods: {
        btnClicked: function() {
            alert('组建自身的默认文案' + this.msg)
            this.$emit('btnClicked')    // 触发机制： 父组件监听，子组件触发
        }
    }
}
</script>

<style scoped>
    @import './css/reset.import.css';
    @import './css/yr-btn.import.css';
</style>


