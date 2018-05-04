<template>
  <div class="yrBtn">
      <btn msg="确定" class="small" @click="btnClicked001"></btn>
      <btn msg="另一个btn" class="small" @click="btnClicked002">
        <img src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png" slot="icon" >
      </btn>
  </div>
</template>

<script>
import yrBtn from '../components/yrButtonCmp.vue'
export default {
  name: 'yrBtn',
  components: {
      'btn':yrBtn
  },
  methods: {
    btnClicked001: function() {
      alert('点击了按钮，此事件是从父控件触发')
    },
    btnClicked002: function() {
      alert('点击了另一个按钮，此事件是从父控件触发')
    }
  }
}
</script>
