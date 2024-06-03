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
    <div class="card mb-4 border-0">
        <div class="row g-0">
            <div class="col-md-4">
                <router-link :to="{ name: 'project', params: { id: project.id } }">
                    <img v-if="project.image.startsWith('uploads')" :src="base_api_url + '/storage/' + project.image"
                        alt="Project Image" class="img-fluid rounded-start">
                    <img v-else :src="project.image" alt="Project Image" class="img-fluid rounded-start">
                </router-link>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ project.subtitle }}</h6>
                    <div class="badge text-bg-info text-white">
                        {{ project.type.name }}
                    </div>
                    <p class="card-text">{{ project.description }}</p>
                    <a :href="project.url_code" class="btn btn-outline-info btn-sm me-2" target="_blank">Code</a>
                    <a :href="project.url_web" class="btn btn-outline-info btn-sm" target="_blank">Web</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>