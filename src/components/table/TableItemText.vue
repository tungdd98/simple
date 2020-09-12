<template>
    <div>
        <template v-if="!custom || !custom.filter">
            {{ data }}
        </template>
        <template v-else> {{ filterData }} </template>
    </div>
</template>

<script>
export default {
    props: {
        data: [String, Number],
        custom: { type: [String, Array, Object, Number], required: false }
    },
    computed: {
        filterData() {
            return this.custom.filter
                ? this.$root.$options.filters[this.custom.filter](this.data)
                : null;
        }
    }
};
</script>
