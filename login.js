
//registro de usuario

function registerUser(){

    var name = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var pass = document.getElementById("pass").value;

    if(name == "" || email == "" || pass == ""){

        alert("Alguno de los datos que se introdujeron son incorrectos.")

    }else{ 
        
        localStorage.setItem("name", name);

         localStorage.setItem("email", email);

        localStorage.setItem("pass", pass);

        alert("Usuario registrado correctamete");}


}



//login usuario

function loginUser(){

    var Email = document.getElementById("Email").value;

    var Pass = document.getElementById("Pass").value;

    if( Email == "" || Pass == ""){

        alert("Alguno de los datos que se introdujeron son incorrectos.")

    }else{

        var storedEmail = localStorage.getItem("email");

        var storedPass = localStorage.getItem("pass");

        if(Email == storedEmail && Pass == storedPass){


            alert("Bienvenido " + localStorage.getItem("name"))


            window.location.replace("index.html")

        }else{

            alert("Correo o contraseña incorrectos.")

        }

    }

}




document.getElementById("Inicia").addEventListener("click",loginUser)

document.getElementById("Regis").addEventListener("click",registerUser)