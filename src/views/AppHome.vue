<script>
export default {
    name: 'AppHome',
}
</script>

<template>
    <div class="hero">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <img src="/img/avatar.png" alt="" class="avatar mb-5">
                    <h1 class="name">Hi There, I'm <span class="highlight">Daniele Colaci</span></h1>
                    <p class="intro">I Am a <span class="highlight">FullStack Developer</span></p>
                    <router-link class="btn btn-info my-5" to="/projects">Projects</router-link>
                    <div class="social-icons mt-4">
                        <a href="https://www.linkedin.com/in/danielecolaci/" target="_blank"><i
                                class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/danielecolaci" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-telegram"></i></a>
                        <a href="https://www.instagram.com/dakolaci/" target="_blank"><i
                                class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>