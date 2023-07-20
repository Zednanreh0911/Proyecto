

if(localStorage.getItem("name")){


    var elemento = document.getElementById("boton")

    var elemento2 = document.getElementById("boton2")

    elemento2.parentNode.removeChild(elemento2)

    elemento.parentNode.removeChild(elemento)

    document.getElementById("elemento").innerHTML = " Bienvenido " + localStorage.getItem("name")

    document.getElementById("numero").innerHTML = " 04247115559"
}