<template>
    <div>
        <a v-for="(item, index) in items" :class="[normalClass, item.active ? hilightClass : '']" @click="itemSelected(items, index)"> 
            <span class="nav-txt">{{ item.text }}</span>
        </a>
    </div>
</template>

<script>
export default {

    data: function() {
       return {
            normalClass: 'normal',
            hilightClass: 'hilight',
            items: [
                {
                    text: '首页',
                    active : true
                  },
                  {
                    text: '列表',
                    active : false
                  },
                  {
                    text: '关于',
                    active : false
                  },
                  {
                    text: '招聘',
                    active : false
                  }
            ]
       }
   },
   methods: {
      itemSelected: function(items, index) {
          items.forEach(item => {
              item.active = false
          })
          items[index].active = true
          this.$emit('itemSelected', items, index)
      } 
   }
}
</script>


<style scoped>
div {
    height: 100px;
}

a {
    font-size:30px;
}

span {
    margin: 0 10px;

}

.normal {
    -webkit-flex:1;
    flex:1;
    height: 40px;
    line-height: 40px;
    position: relative;
    overflow: hidden;
}

.hilight {
    color: #ffcd00;
    background: rebeccapurple;
}
</style>
