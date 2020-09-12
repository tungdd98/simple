<template>
    <div>
        <img
            :src="data"
            :alt="data"
            width="80"
            height="80"
            style="object-fit: cover"
        />
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

<style></style>
