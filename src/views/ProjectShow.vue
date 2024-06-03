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
    <div class="container mt-5">
        <div v-if="project">
            <div class="row">
                <div class="col-md-8">
                    <img v-if="project.image.startsWith('uploads')" :src="base_api_url + '/storage/' + project.image"
                        alt="Project Image" class="img-fluid rounded">
                    <img v-else :src="project.image" alt="Project Image" class="img-fluid rounded">
                </div>
                <div class="col-md-4">
                    <h1>{{ project.title }}</h1>
                    <h6 class="text-muted">{{ project.subtitle }}</h6>
                    <div class="badge bg-info text-white mb-3">
                        {{ project.type.name }}
                    </div>
                    <p>{{ project.description }}</p>
                    <a :href="project.url_code" class="btn btn-outline-info btn-sm me-2" target="_blank">Code</a>
                    <a :href="project.url_web" class="btn btn-outline-info btn-sm" target="_blank">Web</a>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <h3>Technologies Used</h3>
                    <ul class="list-inline">
                        <li class="list-inline-item" v-for="tech in project.technologies" :key="tech.id">
                            <span class="badge bg-secondary">{{ tech.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
        <router-link to="/projects" class="btn btn-info text-white mb-3">
            Torna ai progetti
        </router-link>
    </div>
</template>

<style></style>