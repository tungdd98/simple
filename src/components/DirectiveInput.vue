<template>
    <input
        v-focus:foo.a.b="message"
        v-error="'Invalid email address'"
        v-model="value"
        v-valid="'email'"
        v-required="'This field is required'"
        type="text"
        placeholder="Enter keyword..."
    />
</template>
<script>
const validators = {
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
};
export default {
    data() {
        return {
            message: "Vàng ăn cứt",
            dir: "top",
            value: "",
            validators
        };
    },
    directives: {
        focus: {
            inserted(el, binding, vnode) {
                el.focus();
            }
        },
        pin: {
            bind(el, binding, vnode) {
                el.style.position = "fixed";
                el.style[binding.arg] = binding.value + "px";
            }
        },
        "change-color"(el, binding) {
            const { color, fontSize } = binding.value;
            el.style.color = color;
            el.style.fontSize = fontSize;
        },
        error: {
            bind(el, binding) {
                el.vError = document.createElement("div");
                el.vError.innerHTML = binding.value;
            }
        },
        required: {
            bind(el, binding) {
                el.vRequired = document.createElement("div");
                el.vRequired.innerHTML = binding.value;
            }
        },
        valid: {
            bind(el, binding, vnode) {
                const regex = vnode.context.validators[binding.value];
                const handler = () => {
                    if (el.vRequired && el.vRequired.parentNode !== null) {
                        el.vRequired.parentNode.removeChild(el.vRequired);
                    }
                    if (el.vError && el.vError.parentNode !== null) {
                        el.vError.parentNode.removeChild(el.vError);
                    }
                    if (el.value === "") {
                        if (el.vRequired) {
                            el.parentNode.appendChild(el.vRequired);
                            return;
                        }
                    }
                    if (!regex.test(el.value)) {
                        if (el.vError) {
                            el.parentNode.appendChild(el.vError);
                            return;
                        }
                    }
                };
                el.addEventListener("input", handler);
            },
            unbind(el) {
                el.removeEventListener("input", handler);
            }
        }
    }
};
</script>
