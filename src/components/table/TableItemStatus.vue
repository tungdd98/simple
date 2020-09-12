<template>
    <div v-if="custom.status[data]">
        {{ custom.status[data] }}
    </div>
</template>

<script>
export default {
    props: {
        data: [String, Number],
        custom: { type: [String, Array, Object, Number], required: false }
    }
};
</script>
