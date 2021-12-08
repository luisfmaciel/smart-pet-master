<template>
    <div class="d-flex flex-column justify-content-center align-items-center vh-100">
        <h2>Not Found</h2>
        <router-link class="btn btn-outline-dark" :to="{name: 'VaccineCard'}">Go to vaccine card</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
  
}
</script>

<style scoped>

</style>