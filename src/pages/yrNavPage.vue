<template>
    <div class="navWrapper">
        <Navg @click="selectedEvent"></Navg>
    </div>
</template>

<script>
import Nav from '../components/yrNavCmp.vue'
export default {
    name:'navWrapper',
    components: {
        'Navg': Nav
    },
    methods: {
        selectedEvent: function(items, index) {
            alert( items[index].text + ' 被选中了 ')
        }
    }
}
</script>

<style scoped>
.navWrapper {
    color: darkslategray;
}
</style>
