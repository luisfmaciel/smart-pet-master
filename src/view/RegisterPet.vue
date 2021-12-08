<template>
    <div class="h-100 d-flex col-md-12 change-column">
        <div class="d-flex justify-content-center align-items-center rounded col-md-6">
            <img src="../assets/pet-register.jpg" class="adjust-img w-100 position-relative" alt="...">
            <div class="box-title position-absolute p-5">
                <h2 class="text-light fs-2 d-flex flex-column text-center"><span class="fw-bold">Register </span> Your Pet</h2>
            </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center my-auto adjust-height">
            <form @submit.prevent="createPet">
                <legend class="fw-bold mb-5 px-5">Enter your pet's details</legend>
                <div class="form-floating">
                    <input v-model="name" type="text" class="form-control mb-3" id="inputName" placeholder="Brad Pitbull" required>
                    <label for="inputName">Name</label>
                </div>
                <div class="form-floating">
                    <input v-model="species" type="text" class="form-control mb-3" id="inputSpecies" placeholder="Dog" required>
                    <label for="inputSpecies">Species</label>
                </div>
                <div class="mb-3">
                    <label for="select-size" class="me-3">Gender</label>
                    <select id="select-size" class="form-select" v-model="gender" aria-label="Default select example" required>
                        <option value="Male">Male</option>
                        <option value="Femalte">Female</option>
                    </select>                
                </div>
                <div class="form-floating">
                    <input v-model="birthday" type="date"  class="form-control mb-3" id="inputBirthday" placeholder="04/30/2010">
                    <label for="inputBirthday">Birthday</label>
                </div>
                <div class="form-floating">
                    <input v-model="weight" type="number" class="form-control mb-3" id="inputWeight" placeholder="16.5kg">
                    <label for="inputWeight">Weight</label>
                </div>
                <div class="w-100 text-center">
                    <button type="submit" class="btn btn-warning w-50">Save</button>
                </div>
            </form>
		</div>
		
    </div>
</template>

<script>
import router from '../router/index.js'
export default {
    name: 'RegisterPet',
    data() {
        return {
            name: '',
            species: '',
            gender: '', 
            birthday: '',
            weight: ''

        }
    },
    methods: {
        createPet() {
            let pet = {
                name: this.name,
                species: this.species,
                birthday: this.birthday,
                gender: this.gender,
                weight: this.weight,
            }
            this.$store.dispatch('createPet', pet) 
            router.push({name: 'VaccineCard'})
        }
    }
}
</script>

<style scoped>
.adjust-img {
    object-fit: cover;
    z-index: -1;
    height: 100%;
    filter: opacity(95%) grayscale(20%);
}
.glass {
    border-radius: 25px;
    background-color: #ffffffb0;
}
.box-title {
    background: linear-gradient(145deg, #472f4b, #291c2c);
 
}
@media (max-width: 769px) {
    .change-column {
        flex-direction: column;
    }
    .adjust-height {
        min-height: 100vh;
        padding-top: 50px;
    }
}
</style>