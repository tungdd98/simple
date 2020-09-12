<template>
    <div id="app">
        <router-view></router-view>
        <the-loading></the-loading>
    </div>
</template>

<script>
import TheLoading from "@/components/TheLoading";
export default {
    name: "App",
    components: {
        TheLoading
    }
};
</script>

<style lang="scss">
@import "sass/admin/main.scss";
</style>
