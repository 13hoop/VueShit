<template>
<div class="listEl">
   <YRList titleStr="1111" msg="hahahah"></YRList> 
   <YRList titleStr="222" @click="test" msg="2222"></YRList> 
   <YRList titleStr="333" ref="child1"  currentView="Arrow" msg="333333"></YRList> 
</div>
</template>

<script>
import YRList from '../components/yrListCmp'
export default {
    name: "listEl",
    components: {
        "YRList": YRList
    },
    beforeCreate:function(){},  //组件实例化之前
    created:function(){},       //组件实例化了
    beforeMount:function(){},   //组件写入dom结构之前
    mounted:function(){         //组件写入dom结构了
        console.log(this.$el);
        console.log(this.$children);
        console.log(this.$refs);
        console.log(this.$refs.child1.msg);
    },
    methods: {
        test: function() {

        }
    },
    beforeUpdate:function(){},//组件更新前
    updated:function(){},//组件更新比如修改了文案
    beforeDestroy:function(){},//组件销毁之前
    destroyed:function(){}//组件已经销毁
}
</script>



<style>

</style>
