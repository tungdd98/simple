<template>
    <div class="el-modal" v-if="visible">
        <div class="el-modal__content">
            <div class="el-modal__close" @click="hide">
                <i class="fas fa-times"></i>
            </div>
            <div class="el-modal__body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import Modal from "@/plugins/modal";
export default {
    data() {
        return {
            visible: false
        };
    },
    beforeMount() {
        Modal.EventBus.$on("show", () => {
            this.show();
        });
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        }
    },
    beforeDestroy() {
        Modal.EventBus.$off("show", () => {
            this.show();
        });
    }
};
</script>
<style lang="scss" scoped>
.el-modal {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.15);
    &__content {
        position: relative;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 21px 36px;
    }
    &__body {
        min-width: 400px;
        width: 100%;
        padding: 30px 40px;
    }
    &__close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
}
</style>
