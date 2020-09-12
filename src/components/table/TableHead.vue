<template>
    <thead>
        <tr>
            <th
                v-for="(item, index) in configs"
                :key="index"
                class="text-uppercase"
            >
                {{ item.title }}
            </th>
        </tr>
    </thead>
</template>

<script>
export default {
    props: {
        configs: { type: Array }
    }
};
</script>
