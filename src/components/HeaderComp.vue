<template>
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        background-color="#707070"
        text-color="#fff"
        active-text-color="white"
        id="header-menu"
        :ellipsis="false">
        <el-menu-item class="header-item-no-drag" index="0" @click="navigateTo('/')">
            <span id="title-info">Electron-Vue3-Template</span>
        </el-menu-item>

        <el-menu-item class="header-item-no-drag" index="1" @click="navigateTo('/')">标题栏</el-menu-item>
        <div style="flex-grow: 1;"/>
        <TitleButton class="header-item-no-drag"  type="min" />
        <TitleButton class="header-item-no-drag"  type="max" />
        <TitleButton class="header-item-no-drag"  type="close" />
    </el-menu>

</template>

<script>

import TitleButton from "./TitleButton.vue";

export default {
    name: "HeaderComp",
    components: {TitleButton},
    data() {
        return {
            activeIndex: '',
        }
    },
    methods: {
        navigateTo(url) {
            this.$router.push(url)
        }
    }
}
</script>

<style scoped>
#header-menu {
    width: 100%;
    -webkit-app-region: drag;
    border: none;
    position: fixed;
    z-index: 99;
}

.header-item-no-drag {
    -webkit-app-region: no-drag;
}

#title-info {
    font-size: 18px;
    font-weight: bold;
}

</style>