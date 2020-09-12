<template>
    <tr role="row">
        <td v-for="(config, index) in configs" :key="index">
            <component
                :is="componentTableItem(config.type)"
                :data="item[config.key]"
                :custom="config.custom"
            ></component>
        </td>
    </tr>
</template>

<script>
import TableItemText from "./TableItemText";
import TableItemImage from "./TableItemImage";
import TableItemProcess from "./TableItemProcess";
import TableItemStatus from "./TableItemStatus";
export default {
    components: {
        TableItemText,
        TableItemImage,
        TableItemProcess,
        TableItemStatus
    },
    props: {
        item: { type: Object },
        configs: { type: Array }
    },
    methods: {
        componentTableItem(type) {
            return `table-item-${type}`;
        }
    }
};
</script>
