<template>
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
</template>