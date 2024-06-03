<script>
import axios from 'axios';


export default {
    name: 'ProjectShow',
    data() {
        return {
            project: null,
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects/',
        };
    },
    methods: {
        callAPI() {
            const url = this.base_api_url + this.base_projects_url + this.$route.params.id;
            /* console.log(url); */
            axios
                .get(url)
                .then(response => {
                    /* console.log(response); */
                    this.project = response.data.response;
                }).catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        this.callAPI();
    }
}

</script>

<template>
    <div class="container">
        <div v-if="project">
            <h1>{{ project.title }}</h1>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<style></style>