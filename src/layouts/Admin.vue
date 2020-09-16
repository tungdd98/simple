<template>
    <div class="h-100">
        <!-- BEGIN: Main Menu-->
        <div
            class="main-menu menu-fixed menu-light menu-accordion menu-shadow overflow-y-scroll"
        >
            <div class="navbar-header sticky-top bg-white shadow-sm">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mr-auto">
                        <router-link
                            class="navbar-brand"
                            :to="{ name: 'login' }"
                        >
                            <div
                                class="brand-logo"
                                :style="{
                                    background: `url(${require('@/assets/logo.png')}) no-repeat`
                                }"
                            ></div>
                            <h2 class="brand-text mb-0">Vuexy</h2>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="shadow-bottom"></div>
            <div class="main-menu-content">
                <ul class="navigation navigation-main">
                    <li class="nav-item">
                        <a href="#" class="d-flex justify-content-between">
                            <div class="d-flex align-items-center">
                                <home-icon size="1.4x" class="mr-1"></home-icon>
                                <span class="menu-title">Dashboard</span>
                            </div>
                            <span
                                class="badge badge badge-warning badge-pill float-right mr-2"
                                >2
                            </span>
                        </a>
                    </li>
                    <li class="navigation-header"><span>Apps</span></li>
                    <li class="nav-item active">
                        <a
                            href="app-email.html"
                            class="d-flex align-items-center"
                        >
                            <mail-icon size="1.4x" class="mr-1"></mail-icon
                            ><span class="menu-title" data-i18n="Email"
                                >Email
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            href="app-email.html"
                            class="d-flex align-items-center"
                        >
                            <activity-icon
                                size="1.4x"
                                class="mr-1"
                            ></activity-icon
                            ><span class="menu-title" data-i18n="Email"
                                >Chat
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            href="app-email.html"
                            class="d-flex align-items-center"
                        >
                            <instagram-icon
                                size="1.4x"
                                class="mr-1"
                            ></instagram-icon
                            ><span class="menu-title" data-i18n="Email"
                                >Todo
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- END: Main Menu-->
        <!-- BEGIN: Header -->
        <nav
            class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow"
        >
            <div class="navbar-wrapper">
                <div class="navbar-container content">
                    <div class="navbar-collapse" id="navbar-mobile">
                        <div
                            class="mr-auto float-left bookmark-wrapper d-flex align-items-center"
                        >
                            <ul class="nav navbar-nav">
                                <li
                                    class="nav-item mobile-menu d-xl-none mr-auto"
                                >
                                    <a
                                        class="nav-link nav-menu-main menu-toggle hidden-xs"
                                        href="#"
                                    >
                                        <menu-icon
                                            size="1.5x"
                                            class="custom-class"
                                        ></menu-icon>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav bookmark-icons">
                                <li class="nav-item d-none d-lg-block">
                                    <a class="nav-link" href="app-todo.html">
                                        <check-square-icon
                                            size="1.5x"
                                            class="custom-class"
                                        ></check-square-icon>
                                    </a>
                                </li>
                                <li class="nav-item d-none d-lg-block">
                                    <a class="nav-link" href="app-todo.html">
                                        <check-square-icon
                                            size="1.5x"
                                            class="custom-class"
                                        ></check-square-icon>
                                    </a>
                                </li>
                                <li class="nav-item d-none d-lg-block">
                                    <a class="nav-link" href="app-todo.html">
                                        <check-square-icon
                                            size="1.5x"
                                            class="custom-class"
                                        ></check-square-icon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul class="nav navbar-nav float-right">
                            <li class="nav-item nav-search">
                                <a class="nav-link nav-link-search">
                                    <search-icon
                                        size="1.5x"
                                        class="custom-class"
                                    ></search-icon>
                                </a>
                            </li>
                            <li class="dropdown-user nav-item">
                                <a class="nav-link dropdown-user-link" href="#">
                                    <div class="user-nav d-sm-flex d-none">
                                        <span class="user-name text-bold-600"
                                            >John Doe</span
                                        ><span class="user-status"
                                            >Available</span
                                        >
                                    </div>
                                    <span
                                        ><img
                                            class="round"
                                            :src="noimage"
                                            alt="avatar"
                                            height="40"
                                            width="40"
                                    /></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <!-- END: Header -->
        <!-- BEGIN: Content -->
        <div class="app-content content">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper">
                <router-view></router-view>
            </div>
        </div>
        <!-- END: Content -->
        <!-- BEGIN: Footer-->
        <footer class="footer footer-static footer-light">
            <p class="clearfix blue-grey lighten-2 mb-0">
                <span class="float-md-left d-block d-md-inline-block mt-25"
                    >COPYRIGHT &copy; 2020<a
                        class="text-bold-800 grey darken-2"
                        href="#"
                        target="_blank"
                        >Monstar,</a
                    >All rights Reserved</span
                ><span class="float-md-right d-none d-md-block"
                    ><i class="feather icon-heart pink"></i
                ></span>
                <button
                    class="btn btn-primary btn-icon scroll-top"
                    type="button"
                ></button>
            </p>
        </footer>
        <!-- END: Footer-->
    </div>
</template>
<script>
import noimage from "@/assets/no-image.png";
export default {
    data() {
        return {
            noimage
        };
    }
};
</script>
