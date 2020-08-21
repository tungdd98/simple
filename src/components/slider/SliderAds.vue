<template>
    <div class="el-slide el-p-lg__60 el-p__20 el-bg__white">
        <carousel
            :perPage="1"
            :paginationEnabled="false"
            :navigationEnabled="true"
            :loop="true"
            :scrollPerPage="true"
            :perPageCustom="[
                [576, 2],
                [992, 3]
            ]"
        >
            <slide>
                <div class="el-px__10 el-cursor__pointer">
                    <img
                        src="@/assets/slide1.png"
                        alt=""
                        class="el-img__fluid"
                    />
                </div>
            </slide>
            <slide>
                <div class="el-px__10 el-cursor__pointer">
                    <img
                        src="@/assets/slide2.png"
                        alt=""
                        class="el-img__fluid"
                    />
                </div>
            </slide>
            <slide>
                <div class="el-px__10 el-cursor__pointer">
                    <img
                        src="@/assets/slide3.png"
                        alt=""
                        class="el-img__fluid"
                    />
                </div>
            </slide>
        </carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    components: {
        Carousel,
        Slide
    }
};
</script>
<style lang="scss">
.el-slide {
    .VueCarousel-navigation-next,
    .VueCarousel-navigation-prev {
        transform: translate(0, -50%) !important;
    }
    .VueCarousel-navigation-button {
        padding: 0 !important;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
        background-color: #fff;
        &:focus {
            outline: none;
        }
    }
}
</style>
