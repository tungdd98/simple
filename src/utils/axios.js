import axios from "axios";
import store from "@/store";
import { API_BASE_URL } from "@/utils/constrant";

const instance = axios.create({
    baseURL: process.env.API_BASE_URL || API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=utf-8"
    }
});
instance.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

const onRequest = config => {
    const accessToken = store.state.authenticate.accessToken;
    if (accessToken) {
        config.headers["Authorization"] = "Bearer " + accessToken;
    }
    store.commit("display/setLoading", true);
    return config;
};

const onSuccess = response => {
    store.commit("display/setLoading", false);
    return response;
};

const onError = error => {
    store.commit("display/setLoading", false);
    return Promise.reject(error);
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onSuccess, onError);

export default instance;
