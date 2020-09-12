<template>
    <div class="table-responsive">
        <table
            class="table data-list-view dataTable no-footer dt-checkboxes-select pl-0"
        >
            <table-head :configs="configs"></table-head>
            <tbody>
                <table-item
                    v-for="(item, index) in data"
                    :key="index"
                    :item="item"
                    :configs="configs"
                ></table-item>
            </tbody>
        </table>
    </div>
</template>

<script>
import TableHead from "./TableHead";
import TableItem from "./TableItem";
export default {
    props: {
        data: { type: Array, default: null },
        configs: { type: Array, default: null }
    },
    components: {
        TableHead,
        TableItem
    }
};
</script>
