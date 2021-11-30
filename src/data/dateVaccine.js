const localVaccine = JSON.parse(window.localStorage.getItem('saveVaccine'))
const dateVaccine = localVaccine ? localVaccine : []

export default dateVaccine