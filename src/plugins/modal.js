import TheModal from "@/components/TheModal";

const Modal = {
    install(Vue, options) {
        this.EventBus = new Vue();
        Vue.component("the-modal", TheModal);
        Vue.prototype.$modal = {
            show: () => {
                this.EventBus.$emit("show");
            }
        };
    }
};

export default Modal;
