<template>
    <li :class="['nav-item', { 'not-hover': isChildren }]">
        <component
            :is="componentLink"
            :to="item.url || {}"
            class="d-flex justify-content-between"
            @click="isOpen = !isOpen"
        >
            <div class="d-flex align-items-center">
                <component
                    :is="item.icon"
                    class="mr-1"
                    :size="item.sizeIcon"
                ></component>
                <span class="menu-title">{{ item.label }}</span>
            </div>
            <span v-if="isChildren">
                <component :is="componentArrow" size="1x"></component>
            </span>
        </component>
        <transition name="fade">
            <ul v-show="isOpen" v-if="isChildren" class="menu-content">
                <nav-item
                    v-for="(child, index) in item.children"
                    :key="index"
                    :item="child"
                ></nav-item>
            </ul>
        </transition>
    </li>
</template>

<script>
import NavLink from './NavLink';
export default {
    name: 'nav-item',
    components: {
        NavLink
    },
    props: {
        item: Object
    },
    data() {
        return {
            isOpen: false
        };
    },
    computed: {
        isChildren() {
            return this.item.children && this.item.children.length;
        },
        componentArrow() {
            return this.isOpen ? 'chevron-down-icon' : 'chevron-right-icon';
        },
        componentLink() {
            return this.item.to ? 'nav-link' : 'a';
        }
    }
};
</script>
