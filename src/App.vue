<template>
    <div class="layout-wrapper">
        <div class="layout-topbar">
            <a class="menu-button"><i class="pi pi-bars"></i></a>
            <router-link to="/" class="logo">
                <img alt="logo" src="./assets/images/primevue-logo.png">
            </router-link>
            <ul class="topbar-menu">
                <li><router-link to="/setup">Get Started</router-link></li>
                <li class="topbar-menu-themes">
                    <a>Themes</a>
                    <ul>
                        <li class="topbar-submenu-header">THEMING</li>
                        <li class="topbar-submenu-header">FREE THEMES</li>
                    </ul>
                </li>
                <li><router-link to="/support">Support</router-link></li>
            </ul>
        </div>
        <div class="layout-sidebar">
        </div>
        <div class="layout-content">
            <router-view/>

            <div class="content-section layout-footer clearfix">
                <span>Released under the MIT License,  Copyright © 2018 <a href="http://www.primetek.com.tr" target="_blank" rel="noopener noreferrer">PrimeTek</a></span>
                <div class="footer-links">
                    <a href="https://github.com/primefaces/primevue"><i class=" icon-github fa fa-github-square"></i></a>
                    <a href="https://twitter.com/primevue"><i class="icon-twitter fa fa-twitter-square"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>
