<template>
    <div id="layout">
        <div
            class="el-banner"
            :style="{
                backgroundImage: `url(${require('@/assets/banner.png')})`
            }"
        >
            <div class="el-flex-center el-h__100 el-flex-column">
                <h2 class="el-font__45 el-my__10">
                    {{ $t("Groceries Delivered in 90 Minute") }}
                </h2>
                <p class="el-font__16 el-d-lg__block el-d__none">
                    {{
                        $t(
                            "Get your healthy foods & snacks delivered at your doorsteps all day everyday"
                        )
                    }}
                </p>
                <div
                    class="el-form el-d__none el-d-lg__flex el-align__center el-mt__20"
                >
                    <span
                        class="el-form__btn el-btn el-bg__gray-1 el-m__5 el-text__success"
                        >Food</span
                    >
                    <input
                        type="text"
                        :placeholder="$t('Search your products from here')"
                        class="el-form__input el-flex-grow-1"
                        v-model="searchQuery"
                    />
                    <button
                        class="el-btn el-form__search el-px__30 el-bg__success el-text__white el-font__16"
                    >
                        <i class="fas fa-search"></i>
                        <span>{{ $t("Search") }}</span>
                    </button>
                </div>
            </div>
        </div>
        <header
            class="el-header el-position__absolute el-py__20 el-px__20 el-px-lg__50"
        >
            <div
                class="el-container-fluid el-d__flex el-jus__between el-align__center"
            >
                <div class="el-d__flex el-align__center">
                    <div
                        class="el-hambuger el-d-lg__none"
                        @click="isShowSidebar = !isShowSidebar"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <img
                        src="https://img.icons8.com/officel/40/000000/logo.png"
                    />
                    <div class="el-ml__20 el-d__none el-d-lg__block">
                        <button
                            class="el-btn el-btn__dropdown el-d__flex el-align__center el-jus__between el-text__success el-position__relative"
                            @click="isShowCategory = !isShowCategory"
                            style="min-width: 150px;"
                        >
                            <div class="el-weight__bold">
                                <i class="fas fa-hamburger"></i>
                                <span class="el-pl__5">Foods</span>
                            </div>
                            <i
                                :class="[
                                    'fas',
                                    !isShowCategory
                                        ? 'fa-caret-down'
                                        : 'fa-caret-up'
                                ]"
                            ></i>
                            <transition name="fade">
                                <div
                                    class="el-position__absolute el-d__flex el-text__left el-flex-column el-py__20 el-btn__dropdown-sub"
                                    v-if="isShowCategory"
                                >
                                    <a
                                        class="el-py__10 el-px__20"
                                        href="#"
                                        v-for="n in 4"
                                        :key="`food-${n}`"
                                    >
                                        <i class="fas fa-hamburger"></i>
                                        <span class="el-pl__5">Foods</span>
                                    </a>
                                </div>
                            </transition>
                        </button>
                    </div>
                </div>
                <div class="el-d__flex el-align__center">
                    <div :class="['el-nav', { active: isShowSidebar }]">
                        <div
                            :class="[
                                'el-nav-content',
                                { visible: isShowSidebar }
                            ]"
                        >
                            <div
                                class="el-nav-close el-cursor__pointer el-position__absolute el-d-lg__none"
                                @click="isShowSidebar = false"
                            >
                                <i class="fas fa-times"></i>
                            </div>
                            <a href="#" class="el-px__10">Offer</a>
                            <a href="#" class="el-px__10">
                                <i class="fas fa-question-circle"></i> Need Help
                            </a>
                        </div>
                    </div>
                    <div class="el-mx__20">
                        <button
                            class="el-btn el-text__success el-position__relative el-btn__dropdown"
                            @click="isShowFlag = !isShowFlag"
                        >
                            <div
                                class="el-weight__bold el-d__flex el-align__center"
                            >
                                <img :src="locale.image" />
                                <span class="el-pl__5">{{ locale.name }}</span>
                            </div>
                            <transition name="fade">
                                <div
                                    class="el-position__absolute el-d__flex el-text__left el-flex-column el-py__20 el-btn__dropdown-sub"
                                    v-if="isShowFlag"
                                >
                                    <span
                                        class="el-py__10 el-px__20 el-d__flex el-align__center el-cursor__pointer"
                                        v-for="lang in languages"
                                        :key="lang.locale"
                                        @click="onSelecteLang(lang.locale)"
                                    >
                                        <img :src="lang.image" />
                                        <span class="el-pl__5">{{
                                            lang.name
                                        }}</span>
                                    </span>
                                </div>
                            </transition>
                        </button>
                    </div>
                    <div
                        class="el-cursor__pointer el-mr__20 el-d-lg__none"
                        @click="isShowSearch = true"
                    >
                        <i class="fas fa-search"></i>
                    </div>
                    <button
                        class="el-btn el-bg__success el-text__white el-weight__bold"
                        @click="onSignIn"
                    >
                        {{ $t("join") }}
                    </button>
                </div>
            </div>
        </header>
        <main class="">
            <router-view></router-view>
        </main>
        <transition name="fade">
            <div
                class="el-modal-search el-position__absolute el-bg__white el-p__10"
                v-if="isShowSearch"
            >
                <div class="el-form el-d__flex el-align__center">
                    <div
                        class="el-cursor__pointer el-ml__10 el-mr__20"
                        @click="isShowSearch = false"
                    >
                        <i class="fas fa-arrow-left"></i>
                    </div>
                    <span
                        class="el-form__btn el-btn el-bg__gray-1 el-m__5 el-text__success"
                        >Food</span
                    >
                    <input
                        type="text"
                        :placeholder="$t('Search your products from here')"
                        class="el-form__input el-flex-grow-1"
                        v-model="searchQuery"
                    />
                    <div class="el-cursor__pointer el-mx__10">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <the-modal>
                <keep-alive>
                    <component
                        :is="currentTab"
                        @on-change-tab="onChangeTab"
                    ></component>
                </keep-alive>
            </the-modal>
        </transition>
    </div>
</template>
<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
export default {
    components: {
        Login,
        Register
    },
    data() {
        return {
            isShowCategory: false,
            isShowFlag: false,
            isShowSidebar: false,
            isShowSearch: false,
            searchQuery: "",
            currentTab: "login",
            languages: [
                {
                    locale: "vi",
                    name: "Vietnamese",
                    image: "https://img.icons8.com/office/16/000000/vietnam.png"
                },
                {
                    locale: "en",
                    name: "English",
                    image: "https://img.icons8.com/office/16/000000/england.png"
                }
            ],
            langSelected: "en"
        };
    },
    computed: {
        locale() {
            return this.languages.find(
                lang => lang.locale === this.langSelected
            );
        }
    },
    methods: {
        onSignIn() {
            this.$modal.show();
        },
        onChangeTab(tab) {
            this.currentTab = tab;
        },
        onSelecteLang(locale) {
            this.langSelected = locale;
            this.$i18n.locale = locale;
        }
    }
};
</script>
