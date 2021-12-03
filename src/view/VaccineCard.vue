<template>
    <div class="">
        <img src="../assets/pet-main.jpg" class="adjust-img position-absolute" alt="pet pattern">
    </div>
    <div class="d-flex row col-md-12 align-items-center bg-light h-100">
        <div class="d-flex justify-content-center col-md-4 box-add">
            <div class="text-center card p-4 shadow border-0 rounded">
                <p class="fw-bold fs-4">Add new date</p>
                <span @click="editDate()" data-bs-toggle="modal" data-bs-target="#exampleModal" class="fs-1 text-warning btn-add">+</span>
            </div>
        </div>
        <div class="col-md-8 adjust-height mt-5 overflow-auto bg-light">
            <h4 class="fw-bold text-center mb-5">Vaccines</h4>
            <div v-if="$store.state.dateVaccine.length > 0">
                <CardItem/>
            </div>
            <div v-else class="text-center">
                <h4 class="text-dark">Empty List</h4>
                <p class=" text-secondary mb-5">Register your pet's vaccine</p>
                <img src="../assets/dog.png" class="icon" alt="dog icon">
            </div>
        </div>
    </div>
</template>

<script>
import CardItem from '../components/CardItem.vue'

export default {
    name: 'VaccineCard',
    components: {
        CardItem
    },
    methods: {
        editDate() {
            const obj = {
                idx: '',
                edit: false
            }
            this.$store.dispatch('editDate', obj)
        }
    }
}
</script>

<style scoped>
.adjust-img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 150px;
    filter: opacity(95%) grayscale(20%);
}
.adjust-height {
    height: 60%;
}
.btn-add {
    cursor: pointer;
    border-radius: 50px;
    background: linear-gradient(145deg, #ffffff, #dfe0e1);
    box-shadow:  8px 8px 16px #d3d4d5,
             -8px -8px 16px #ffffff;
}
.btn-add:hover {
    background: linear-gradient(145deg, #ffffffcc, #7d7e80d3);
    box-shadow:  25px 25px 51px #d3d4d5c7,
             -25px -25px 51px #ffffff80;
}
.icon {
    width: 65px;
}
@media (max-width: 768px) {
    .box-add {
        margin-top: 200px;
    }
}
</style>