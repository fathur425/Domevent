// kita buah sbeuah function untuk memunculkan modal

const showModal = ()=>{
    // kita dapatkan element modal yang ingin dimunculkan 
    let modal = document.getElementById(`modalMenu`)

    //kita atur styling  element modal
    modal.style.display = "flex"

}
const closeModal =()=>{
    let modal= document.getElementById(`modalMenu`)
    modal.style.display = "none" 
}