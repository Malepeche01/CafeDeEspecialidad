const container = document.getElementById("content");
container.classList.add("container")


const titulo = document.createElement("h2")
titulo.innerText = ("Café de Especialidad en Casa")
container.appendChild(titulo)

const verCompra = document.getElementById("verCompra")


const contenidoCarrito = document.getElementById("contenidoCarrito")


let carrito = JSON.parse(localStorage.getItem("miCarrito")) || []

variedadesCafe.forEach((variedad) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const nombreVariedad = document.createElement("h4")
    nombreVariedad.innerText =  variedad.nombre


    const imgVariedad = document.createElement("img")
    imgVariedad.src = variedad.imagen


    const precioVariedad = document.createElement("p")
    precioVariedad.innerText = `$ ${variedad.precio}`
    
    

    let botonAgregar = document.createElement("button")
    botonAgregar.innerText = "Agregar"
    

    botonAgregar.addEventListener("click", () => {
       carrito.push({
            id: variedad.id,
            imagen: variedad.imagen,
            precio: variedad.precio,
           
        })
        console.log(carrito)
        guardar()
    })
    verCompra.addEventListener("click", () =>{
        const tituloCarrito = document.createElement("div")
        tituloCarrito.innerHTML = `
        <h2>Carrito</h2>`

        contenidoCarrito.append(tituloCarrito)

       
    carrito.forEach((variedad) => {
        let miCarrito = document.createElement("div")
        miCarrito.innerHTML = `
            <img src="${variedad.imagen}">
            <h4> ${variedad.id}</h4>
            <p> $${variedad.precio}<p/>

        `
        contenidoCarrito.append(miCarrito)

    })
  
const total = carrito.reduce((acc,el) => acc + el.precio, 0)
const totalCompra = document.createElement("div")
totalCompra.innerHTML = `Su compra: $${total}`
contenidoCarrito.append(totalCompra)

})
card.appendChild(nombreVariedad);
card.appendChild(imgVariedad);
card.appendChild(precioVariedad);
card.append(botonAgregar)
container.appendChild(card);


}
)
const guardar = () => {
    localStorage.setItem("miCarrito", JSON.stringify(carrito))
}















   
   
    
    
    

   




 
 











  
  //btn.addEventListener("click", ()=>{
  
     //let cafeElegido = prompt("Elegí una variedad de café para conocer sus caracerísticas");
     //let preferidos = cafeElegido

    // localStorage.setItem("misPreferidos", preferidos)
    // let preferidosEnlocalStorage = localStorage.getItem("misPreferidos")
    
    // console.log(preferidosEnlocalStorage)

    //const nuevaCard =  document.createElement("div")
     //nuevaCard.innerHTML= `
    // <h2>${tipoDeCafe}</h2>
    // <p>${"Hacer Click para más info"}</p>
    
    //container.appendChild(newCard)
    // })