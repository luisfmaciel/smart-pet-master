<template>
    <header>
        <nav class="navbar navbar-dark bg-dark fixed-top w-100">
            <div class="container-fluid">
                <router-link class="navbar-brand ms-5 text-warning" :to="{name: 'RegisterPet'}"><span class="fw-bold text-light">Smart</span>Pet</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas bg-dark offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header text-light">
                        <router-link class="navbar-brand text-warning" :to="{name: 'RegisterPet'}"><span class="fw-bold text-light">Smart</span>Pet</router-link>
                        
                        <button type="button" class="btn-close bg-light text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <router-link class="text-decoration-none text-muted link mb-2" :to="{name: 'RegisterPet'}">Register</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="text-decoration-none text-muted link" :to="{name: 'VaccineCard'}">Vaccines</router-link>
                            </li>
                        </ul>
                        
                        <div v-if="this.$store.getters.getPet" class="text-light">
                            <hr>
                            <h4 class=" text-center mb-5 mt-5">My Pet</h4>
                            <p class="mb-4 mx-4"><span class="fw-bold pe-3">Name: </span>{{ this.$store.getters.getPet.name }}</p>
                            <p class="mb-4 mx-4"><span class="fw-bold pe-3">Species: </span>{{ this.$store.getters.getPet.species }}</p>
                            <p class="mb-4 mx-4"><span class="fw-bold pe-3">Gender: </span>{{ this.$store.getters.getPet.gender }}</p>
                            <p v-if="this.$store.getters.getPet.birthday" class="mb-4 mx-4"><span class="fw-bold pe-3">Birthday: </span>{{ formatDate(this.$store.getters.getPet.birthday) }}</p>
                            <p v-if="this.$store.getters.getPet.weight" class="mb-4 mx-4"><span class="fw-bold pe-3">Weight: </span>{{ this.$store.getters.getPet.weight }}kg</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        formatDate(date) {
            return date.split('-').reverse().join('/')
        }
    }
}
</script>

<style scoped>
.link:hover {
    color: yellow !important;
}
</style>