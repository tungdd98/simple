<template>
    <div>
        <input
            :type="type"
            :value="value"
            :id="id"
            :placeholder="placeholder"
            :name="name"
            v-on="listeners"
            v-error="message"
            v-valid="rules"
        />
    </div>
</template>
<script>
const validators = {
    email: value => {
        return /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(value);
    },
    required: value => {
        return !!value;
    }
};
const errors = (name = "") => {
    return {
        email: `${name} is not valid`,
        required: `${name} is required`
    };
};
export default {
    props: {
        value: { type: String, default: "" },
        id: { type: String, default: "" },
        placeholder: { type: String, default: "" },
        type: { type: String, default: "text" },
        rules: { type: [String, Object] },
        name: { type: String, default: "The field" }
    },
    data() {
        return {
            validators,
            errors,
            message: "",
            count: 0
        };
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => this.$emit("input", event.target.value)
            };
        }
    },
    directives: {
        error: {
            bind(el, binding) {
                el.vError = document.createElement("div");
                el.vError.className = "el-font__10 el-text__danger el-error";
                el.vError.innerHTML = binding.expression;
            }
        },
        valid: {
            bind(el, binding, vnode) {
                const rules = binding.value.split("|");
                const { errors, validators, name } = vnode.context;

                el.handler = () => {
                    if (el.vError && el.vError.parentNode !== null) {
                        el.vError.parentNode.removeChild(el.vError);
                    }
                    rules.forEach(rule => {
                        if (!validators[rule](el.value)) {
                            if (el.vError) {
                                el.vError.innerHTML = errors(name)[rule];
                                el.parentNode.appendChild(el.vError);
                                return;
                            }
                        }
                    });
                };
                el.addEventListener("input", el.handler);
            },
            unbind(el) {
                el.removeEventListener("input", el.handler);
            }
        }
    },
    mounted() {}
};
</script>
