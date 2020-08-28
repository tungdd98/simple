<template>
    <div>
        <template>
            <div class="el-text__center">
                <h2>
                    Sign Up
                </h2>
                <p>By signing up, you agree to Pickbazar's</p>
            </div>
            <div class="el-login">
                <div class="el-box-shadow el-p__10 el-mb__30">
                    <the-input
                        v-model="form.email"
                        class="el-form__input el-flex-grow-1"
                        :placeholder="$t('Your email')"
                        rules="email|required"
                        name="Email"
                        type="text"
                    ></the-input>
                </div>
                <div class="el-box-shadow el-p__10 el-mb__30">
                    <the-input
                        v-model="form.password"
                        class="el-form__input el-flex-grow-1"
                        :placeholder="$t('Your password')"
                        rules="required"
                        name="Password"
                        type="password"
                    ></the-input>
                </div>
                <button
                    class="el-w-100 el-btn el-bg__success el-text__white el-box-shadow"
                >
                    Continue
                </button>
                <div class="el-text__center el-py__10">or</div>
                <div class="el-text__center el-py__5">
                    Already have an account?
                    <span
                        to="/"
                        class="el-text__success el-cursor__pointer"
                        @click="$emit('on-change-tab', 'login')"
                        >Login</span
                    >
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import TheInput from "@/components/TheInput";

export default {
    components: {
        TheInput
    },
    data() {
        return {
            form: {
                email: "",
                password: ""
            }
        };
    }
};
</script>
