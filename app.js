const user = document.getElementById("usuario")
const nombre = document.getElementById("name")
const edad = document.getElementById("date")

const genero = document.getElementById("genero")
const direccion = document.getElementById("direccion")
const pa = document.getElementById("pa")
const estado = document.getElementById("estado")



const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let dateuser=/^[a-zA-Z0-9\_\-]{4,10}$/
    let dir=/^[a-zA-Z0-9\_\-]{10,30}$/
    let nomletras=/^[a-zA-ZÀ-ÿ\s]{1,10}$/
    let pai=/^[a-zA-ZÀ-ÿ\s]{1,10}$/
    let edades = /^\d{1,2}$/
    let gen=/^[a-zA-ZÀ-ÿ\s]{1,10}$/
  
    parrafo.innerHTML = ""

  

    if(!nomletras.test(nombre.value)){
        
            warnings += `El nombre no es valido <br>`
            entrar = true
   
    }

    if(!edades.test(edad.value)){
       
            warnings += `Edad no valida <br>`
            entrar = true
        
    }

    if(!gen.test(genero.value)){
       
        warnings += `Ingrese el género <br>`
        entrar = true
    
}
 
if(!gen.test(genero.value)){
       
    warnings += `Ingrese el género <br>`
    entrar = true

}

if(!dir.test(direccion.value)){
       
    warnings += `La direccion no es válida <br>`
    entrar = true

}



if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})