const savedPet = JSON.parse(window.localStorage.getItem('myPet'))
const pet = savedPet ? savedPet : []

export default pet