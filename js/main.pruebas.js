const articulos = [
    {id: 1, nombre: "televisor1"},
    {id: 2, nombre: "televisor2"},
    {id: 3, nombre: "televisor3"},
]
function eliminarArticuloDeLista(e) {
    e.preventDefault();
    console.log("llego")
    const idArticulo = e.target.dataset.id;
    console.log(idArticulo);
    articulos.splice(articulos.find((articulo)=> articulo.id == idArticulo),1);
    console.log(articulos);
}
articulos.forEach((articulo) => {
    console.log(articulo.nombre)
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado";    
        registro.innerHTML = `
            <h6>ID: ${articulo.id}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
        `;   
        const tagDivBotonEliminarArticulo = document.createElement("div");
        tagDivBotonEliminarArticulo.id = "IdBotonEliminarArticulo";
        tagDivBotonEliminarArticulo.className = "botonEliminarArticulo";
        //
        const tagButtonEliminarArticulo = document.createElement("button");
        tagButtonEliminarArticulo.id = "idButtonEliminarArticulo";
        tagButtonEliminarArticulo.className = "buttonEliminarArticulo";
        tagButtonEliminarArticulo.innerText = "Eliminar";
        tagButtonEliminarArticulo.dataset.id = articulo.id; 
        tagButtonEliminarArticulo.addEventListener("click",eliminarArticuloDeLista);   
        //
        tagDivBotonEliminarArticulo.appendChild(registro);
        tagDivBotonEliminarArticulo.appendChild(tagButtonEliminarArticulo);
        document.querySelector("main").appendChild(tagDivBotonEliminarArticulo);
      });