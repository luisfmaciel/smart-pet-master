<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add new date</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <img src="../assets/pet-modal.jpg" style="height: 100px; object-fit: cover;" alt="">
                <div class="row col-md-12 modal-body container mx-auto">
                    <div class="card mb-3" style="max-width: 540px;">
                        <form @submit.prevent="saveVaccine">
                            <div class="w-100">
                                <div class="col-md-12 my-3">
                                    <label for="inputDate" class="form-label">Date</label>
                                    <input v-model="date" type="date" class="form-control" id="inputDate" required>
                                </div>
                                <div class="col-md-12 my-3">
                                    <label for="inputVaccine" class="form-label">Vaccine Used</label>
                                    <input v-model="vaccine" type="text" class="form-control" id="inputVaccine" placeholder="Insert the used vaccine" required>
                                </div>
                                <div class="col-md-12 my-3">
                                    <label for="inputNextDate" class="form-label">Next Date</label>
                                    <input v-model="nextDate" type="date" class="form-control" id="inputNextDate" required>
                                </div>
                            </div>
                            <div class="w-100 d-flex justify-content-center my-3">
                                <button type="submit" class="btn btn-warning w-50">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            newVaccine: {},
            date: null,
            vaccine: null,
            nextDate: null,
            createDate: null
        }
    },
    methods: {
        saveVaccine() {
            this.newVaccine = {
                date: this.formatDate(this.date),
                vaccine: this.vaccine,
                nextDate: this.formatDate(this.nextDate),
                createDate: Date.now()
            }
            this.$store.dispatch('saveVaccine', this.newVaccine)
            this.date = null
            this.vaccine = null
            this.nextDate = null
            this.createDate = null
            alert('Registered date!')
        }, 
        formatDate(date) {
            return date.split('-').reverse().join('/')
        }
    }
}
</script>