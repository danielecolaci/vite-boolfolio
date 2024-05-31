<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light bg-white" id="nav">
            <div class="container">
                <!-- <a class="navbar-brand d-flex align-items-center" href="{{ url('/') }}">
                    <div class="logo_laravel">
                        <img src="{{ Vite::asset('resources/img/avatar.png') }}" alt="" style="width: 50px">
                    </div>
                </a> -->

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="{{ url('/') }}">{{ __('Home') }}</a> -->
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="{{ url('/projects') }}">{{ __('Projects') }}</a> -->
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="{{ url('/contacts') }}">{{ __('Contacts') }}</a> -->
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
</template>

<style></style>