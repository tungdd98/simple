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
                    <input
                        type="email"
                        class="el-form__input el-w-100"
                        placeholder="Enter email"
                    />
                </div>
                <div class="el-box-shadow el-p__10 el-mb__30">
                    <input
                        type="password"
                        class="el-form__input el-w-100"
                        placeholder="Enter password"
                    />
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
