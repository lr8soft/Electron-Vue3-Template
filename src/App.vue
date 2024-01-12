<template>
    <div id="page">
        <header-comp class="header"></header-comp>
        <p>hello world!</p>
    </div>

</template>

<script setup>
import HeaderComp from "./components/HeaderComp.vue";
</script>

<style>
html, body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #2b2d30;
    overflow: hidden;
}


</style>

<style scoped lang="less">
#page{
    width: 100%;
    height: 100%;
    background-color: #2b2d30;

    .header {
        position: relative;
        top: 0;
        width: 100%;
        height: 60px;
        z-index: 10;
    }
}

</style>