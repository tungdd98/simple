<template>
    <div class="el-col__6 el-col-md__4 el-col-lg__3">
        <div
            class="el-home-product el-mb__30 el-bg__white el-cursor__pointer el-position__relative"
        >
            <div class="el-home-product__image el-position__relative">
                <img
                    v-lazy="data.image_url"
                    class="el-img__fluid"
                    alt="product"
                />
            </div>
            <div class="el-px__15 el-pt__10 el-pb__30">
                <a href="#" class="el-link el-text__truncate">
                    {{ data.name }}
                </a>
                <p class="el-font__12 el-text__gray-2 el-text__truncate">
                    {{ data.additional_information }}
                </p>
            </div>
            <div
                class="el-home-product__sale el-position__absolute el-font__12 el-text__success"
            >
                <i class="fas fa-tag"></i>
                Created by {{ data.created_by }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: { type: Object, default: {} }
    }
};
</script>
