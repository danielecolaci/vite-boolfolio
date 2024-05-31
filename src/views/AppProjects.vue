<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            projects: [],
            loading: true
        }
    },
    methods: {
        callApi(url) {

            axios
                .get(url)
                .then(response => {
                    /* console.log(response); */
                    this.projects = response.data.projects;
                    this.loading = false;
                })
                .catch(err => {
                    console.error(err);
                })

        }
    },
    mounted() {

        let url = this.base_api_url + this.base_projects_url;
        this.callApi(url);
    }
}

</script>

<template>
    <div id="app" class="container mt-5">
        <div v-if="loading" class="text-center">Loading...</div>
        <div v-else class="row">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project"
                :base_api_url="base_api_url" />
        </div>
    </div>
</template>

<style></style>