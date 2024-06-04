<script>
export default {
    name: 'NotFound',
}
</script>

<template>
    <div class="container my-5 text-center">
        <h1 class="display-4 my-5">Page Not Found</h1>
        <p class="lead">The page you were looking for doesn’t exist. You may have mistyped the address or the page may
            have moved.</p>
        <h1 class="display-1 fw-bold my-5">404</h1>
        <router-link to="/" class="btn btn-outline-info mt-5">
            <i class="fa-solid fa-house"></i> Go to Home
        </router-link>
    </div>
</template>

<style></style>