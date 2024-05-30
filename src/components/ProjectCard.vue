<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        },
        base_api_url: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="card mb-4">
        <div v-if="project.image.startsWith('uploads')" class="card-header">
            <img :src="base_api_url + '/storage/' + project.image" alt="Project Image" class="card-image">
        </div>
        <div v-else class="card-header">
            <img :src="project.image" alt="Project Image" class="card-image">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ project.subtitle }}</h6>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text"><strong>Type:</strong> {{ project.type.name }}</p>
            <a :href="project.url_code" class="btn btn-primary" target="_blank">Code</a>
            <a :href="project.url_web" class="btn btn-secondary" target="_blank">Demo</a>
        </div>
    </div>
</template>

<style></style>