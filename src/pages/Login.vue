<template>
    <div
        :style="
            `background: url(${require('@/assets/vuexy-login-bg.jpg')}) no-repeat center center`
        "
        class="bg-cover h-100 container-fluid"
    >
        <div class="row justify-content-center align-items-center h-100">
            <div class="col-xl-8 col-11 shadow bg-mid-cyan p-0">
                <div class="row no-gutters">
                    <div class="col-lg-6 d-none d-lg-block">
                        <img :src="require('@/assets/login.png')" alt="login" />
                    </div>
                    <div class="col-12 col-lg-6 bg-white">
                        <div class="px-3 py-2">
                            <h2 class="text-bold-500">Login</h2>
                            <p>Welcome back, please login to your account.</p>
                            <form @submit.prevent="onLogin">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Username"
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Password"
                                    />
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div
                                        class="vs-checkbox-con vs-checkbox-primary"
                                    >
                                        <input type="checkbox" />
                                        <span class="vs-checkbox">
                                            <span class="vs-checkbox--check">
                                                <i
                                                    class="vs-icon feather icon-check"
                                                ></i>
                                            </span>
                                        </span>
                                        <span class="">Remember me</span>
                                    </div>
                                    <a href="#" class="card-link"
                                        >Forgot Password?</a
                                    >
                                </div>
                                <div
                                    class="d-flex justify-content-between my-2"
                                >
                                    <a href="#" class="btn btn-outline-primary"
                                        >Register</a
                                    >
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            <div class="login-footer">
                                <div class="divider">
                                    <div class="divider-text">OR</div>
                                </div>
                                <div class="footer-btn d-inline">
                                    <a href="#" class="btn btn-primary"
                                        ><span class="fa fa-facebook"></span
                                    ></a>
                                    <a href="#" class="btn btn-danger"
                                        ><span class="fa fa-google"></span
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onLogin() {
            console.log("login");
            this.$router.replace("admin");
        }
    }
};
</script>
