<template>
    <div>
        <!-- BEGIN: Breadcrumb -->
        <div class="content-header">
            <div class="content-header-left mb-2">
                <div class="row breadcrumbs-top">
                    <div class="col-12">
                        <h2 class="content-header-title float-left mb-0">
                            List View
                        </h2>
                        <div class="breadcrumb-wrapper col-12">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">Data List</a>
                                </li>
                                <li class="breadcrumb-item active">
                                    List View
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END: Breadcrumb -->
        <div class="content-body">
            <!-- Data list view starts -->
            <section class="data-list-view-header">
                <button class="btn btn-outline-primary" type="button">
                    Add new
                </button>
                <table-list :configs="configs" :data="items"></table-list>
            </section>
            <!-- Data list view end -->
        </div>
    </div>
</template>
<script>
import TableList from "@/components/table/TableList";
export default {
    components: {
        TableList
    },
    data() {
        const thumbnail =
            "https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
        return {
            items: [
                {
                    thumbnail,
                    name: "Vangancut",
                    popularity: 70,
                    status: 0,
                    price: 10000
                },
                {
                    thumbnail,
                    name: "Hienancut",
                    popularity: 60,
                    status: 1,
                    price: 20000
                }
            ],
            configs: [
                {
                    title: "Thumbnail",
                    key: "thumbnail",
                    type: "image"
                },
                {
                    title: "Name",
                    key: "name",
                    type: "text"
                },
                {
                    title: "Popularity",
                    key: "popularity",
                    type: "process",
                    custom: {
                        color: "warning"
                    }
                },
                {
                    title: "Order status",
                    key: "status",
                    type: "status",
                    custom: {
                        status: {
                            0: "Processing",
                            1: "Done",
                            2: "Cancel"
                        }
                    }
                },
                {
                    title: "Price",
                    key: "price",
                    type: "text",
                    custom: {
                        filter: "formatMoney"
                    }
                }
            ]
        };
    }
};
</script>
