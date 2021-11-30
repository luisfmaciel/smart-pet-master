<template>
    <div :class="getClass(item)"
        v-for="(item, index) in reverseVaccine()" 
        :key="item">
        <div @click="doneVaccine(index)" class="bg-warning d-flex align-items-center ms-3 p-2 h-50 rounded done-vaccine">
            <img src="../assets/vaccine.png" alt="icon vaccine">
        </div>
        <div class="d-flex justify-content-evenly w-100">   
            <div class="text-center">
                <span class="fw-bold">Date</span>
                <p class="text-secondary mt-2">{{ item.date }}</p>
            </div>
            <div class="text-center">
                <span class="fw-bold">Vaccine Used</span>
                <p class="text-secondary mt-2">{{ item.vaccine }}</p>
            </div>
            <div class="text-center">
                <span class="fw-bold">Next Date</span>
                <p class="text-secondary mt-2">{{ item.nextDate }}</p>
            </div>
        </div>
        
        <button @click="removeDate(index)" type="button" class="btn text-danger  me-1" aria-label="Close"><img src="../assets/bin.png" alt="icon bin"></button>
            
    </div>
</template>

<script>
export default {
    name: 'CardItem',
    data() {
        return {
            teste: true
        }
    },
    methods: {
        reverseVaccine() {
            return this.$store.getters.getVaccine
        },
        removeDate(index) {
            this.$store.dispatch('removeDate', index)
        },
        doneVaccine(index) {
            this.$store.dispatch('doneVaccine', index)
        },
        getClass(item) {
            return {
            'd-flex py-2 mb-3 w-100 mx-auto align-items-center shadow-sm card-item': !item.done,
            'd-flex py-2 mb-3 w-100 mx-auto align-items-center shadow-sm text-decoration-line-through card-item-done': item.done
            }
        }
    }
}
</script>

<style scoped>
.card-item {
    z-index: -999;
    background-color: white;
    border-radius: 15px;
}
.card-item-done {
    z-index: -999;
    background-color:rgb(219, 216, 216);
    border-radius: 15px;
}
.done-vaccine {
    cursor: pointer;
}
.done-vaccine:hover {
    background-color: gray !important;
}
</style>