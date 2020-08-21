<template>
    <div>
        <slider-ads></slider-ads>
        <div class="el-mt__10">
            <div class="el-d__flex el-home">
                <div class="el-home-sidebar el-bg__white">
                    <button
                        class="el-btn el-btn__select-category el-d-lg__none"
                        @click="isShowCategory = !isShowCategory"
                    >
                        <i class="fas fa-list-ul"></i>
                        <span>Select category</span>
                    </button>
                    <transition name="slide-height">
                        <ul
                            class="el-py__30 el-stick__top"
                            v-if="width >= 992 || isShowCategory"
                        >
                            <li v-for="n in 9" :key="n">
                                <a href="#" class="el-link el-p__20">
                                    <i class="fas fa-hamburger el-pr__10"></i>
                                    Fruits & Vegetables
                                </a>
                            </li>
                        </ul>
                    </transition>
                </div>
                <div
                    class="el-home-products el-flex-grow-1 el-container-fluid el-pb__30"
                >
                    <template v-if="menus">
                        <div v-if="menus.length">
                            <div class="el-row">
                                <item
                                    v-for="menu in menus"
                                    :key="menu.id"
                                    :data="menu"
                                ></item>
                            </div>
                            <div class="el-my__20 el-d__flex el-jus__center">
                                <button
                                    class="el-btn el-text__success el-box-shadow"
                                    @click="loadMore"
                                    v-if="isShowLoadMore"
                                >
                                    Load more
                                </button>
                            </div>
                        </div>
                        <div class="el-text__center el-py__30" v-else>
                            Data empty
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SliderAds from "@/components/slider/SliderAds";
import Item from "@/components/menu/Item";
import { mapActions } from "vuex";
export default {
    components: {
        SliderAds,
        Item
    },
    data() {
        return {
            width: 0,
            isShowCategory: false,
            isShowLoadMore: false,
            menus: null,
            page: 1
        };
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        ...mapActions({
            getMenus: "menu/getMenus"
        }),
        async fetchData(query) {
            const data = await this.getMenus(query);

            if (data) {
                if (data.data && data.data.length > data.per_page) {
                    this.isShowLoadMore = false;
                }
                this.menus =
                    this.page === 1
                        ? data.data || []
                        : [...this.menus, ...data.data];
            }
        },
        async loadMore() {
            await this.fetchData({
                page: ++this.page
            });
        },
        onResize() {
            this.width = window.innerWidth;
        }
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    }
};
</script>
