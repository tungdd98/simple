import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getMenus(ctx, params) {
        try {
            const response = await this.$axios.get(apis.menus, {
                params
            });
            return response.data.data;
        } catch (error) {
            return { error };
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
