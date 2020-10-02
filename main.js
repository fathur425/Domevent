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
//kita ambil element yang diinginkan
let showcase = document.getElementById(`wrapper_showcase`)
//let nama = `halooooo`
//console.log(showcase)
//kita inject elementnya dengan synttax html
//showcase.innerHTML += `
    //<img src="https://picsum.photos/seed/56/300" alt="ini gambar no 13" />
//`
for(var i=1; i<40; i++){
    showcase.innerHTML += `
    <img src="https://picsum.photos/seed/${i}/100" alt="ini gambar ke ${i}"/>
    `
}