<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light bg-white" id="nav">
            <div class="container">
                <router-link class="navbar-brand d-flex align-items-center" to="/">
                    <div class="logo_laravel">
                        <img src="/img/avatar.png" alt="" style="width: 50px">
                    </div>
                </router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/projects">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contacts">Contacts</router-link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
</template>

<style></style>