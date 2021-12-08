<template>
    <div :class="getClass(item)">
        <div @click="doneVaccine(index)" class="bg-warning d-flex align-items-center ms-3 p-2 h-50 rounded done-vaccine">
            <input type="checkbox" :checked="item.done">
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
        
        <div class="d-flex flex-column">
            <button @click="removeDate(index)" type="button" class="btn button"><i class="bi bi-trash fs-4"></i></button>
            <button @click="editDate(index)" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn button"><i class="bi bi-pencil-square fs-5"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardItem',
    props: ['item', 'index'],
    methods: {
        removeDate(index) {
            this.$store.dispatch('removeDate', index)
        },
        doneVaccine(index) {
            this.$store.dispatch('doneVaccine', index)
        },
        getClass(vaccine) {
            return {
            'd-flex py-2 mb-3 w-100 mx-auto align-items-center shadow-sm card-item': !vaccine.done,
            'd-flex py-2 mb-3 w-100 mx-auto align-items-center shadow-sm text-decoration-line-through card-item-done': vaccine.done
            }
        },
        editDate(index) {
            const obj = {
                idx: index,
                edit: true
            }
            this.$store.dispatch('editDate', obj)
            console.log(obj);
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
.button:hover {
    color: gray !important;
}
</style>