<template>
    <div class="list">
        <span class="list-title">{{ titleStr }}</span>
        <!-- <Btn :msg=msg @click="btnClicked" class="small"></Btn> -->
        <component :is="currentView" :msg=msg @click="clicked" class="small" keep-alive></component>
    </div>
</template>

<script>
import YRBtn from "../components/yrButtonCmp"
import YRArrow from "../components/yrArrowCmp"
export default {
  props: {
    msg: {
      default: "下载"
    },
    titleStr: {
      default: "cell Title here!"
    },
    currentView: {
        default: 'Btn'
    }
  },
  methods: {
      clicked: function() {

      }
  },
  components: {
    Btn: YRBtn,
    Arrow: YRArrow
  }
};
</script>

<style>
.list {
  border: 1px solid red;
  background: #eeeeee;
}

span {
  color: #000;
  font-size: 20px;
}
</style>
