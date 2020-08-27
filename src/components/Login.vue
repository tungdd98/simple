<template>
    <div>
        <template>
            <div class="el-text__center">
                <h2>
                    Welcome Back
                </h2>
                <p>Login with your email & password</p>
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
                <GoogleLogin
                    :params="params"
                    :onSuccess="onSuccess"
                    class="el-w-100 el-btn el-bg__danger el-text__white el-box-shadow"
                >
                    Login with Google
                </GoogleLogin>
                <div class="el-text__center el-py__5">
                    Don't have any account?
                    <span
                        class="el-text__success el-cursor__pointer"
                        @click="$emit('on-change-tab', 'register')"
                        >Sign Up</span
                    >
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import GoogleLogin from "vue-google-login";
import TheInput from "@/components/TheInput";

import { mapActions } from "vuex";
export default {
    components: {
        GoogleLogin,
        TheInput
    },
    data() {
        return {
            params: {
                client_id: process.env.GOOGLE_CLIENT_ID
            },
            renderParams: {
                width: 200,
                height: 40,
                longtitle: true
            },
            form: {
                email: "tungdd98@gmail.com",
                password: "123"
            }
        };
    },
    methods: {
        ...mapActions({
            loginWithGoogle: "authenticate/loginWithGoogle",
            login: "authenticate/login"
        }),
        async onSuccess(googleUser) {
            await this.loginWithGoogle(
                googleUser.getAuthResponse().access_token
            );
        },
        async hanleLogin() {
            const data = await this.login(this.form);
            this.$router.push("/");
        },
        handleReset() {
            this.form.email = "";
            this.form.password = "";
        }
    }
};
</script>
