<template>
    <div :class="`progress progress-bar-${custom.color}`">
        <div
            class="progress-bar"
            role="progressbar"
            :style="`width:${data}%`"
        ></div>
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
