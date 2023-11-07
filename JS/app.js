
// let ingresoNombre = prompt("Ingrese su Nombre");


// if(ingresoNombre === ""){
// alert("No ingresaste ningun nombre, por favor intentalo nuevamente");
// }
// else {
// alert("Bienvenido " + ingresoNombre);
// }



    // let usuario = ingresoNombre;

    // do {
    //     usuario = prompt("Ingresar tu Usuario"); 
    //     if (usuario === "") {
    //         alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    //     } else {
    //         alert("Tu Usuario es " + usuario);
    
    //         usuario = prompt("Ingresar tu usuario");
    //         if (usuario === "") {
    //             alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    //         } else {
    //             alert("Tu email es " + usuario);
    
    //             usuario = prompt("Ingresa tu clave"); 
    //             if (usuario === "") {
    //                 alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    //             } else {
    //                 alert("Ingresaste la clave con Éxito");
    //                 break;
    //             }
    //         }
    //     }
    // } while (true);

////////////////////////////////////////////////////////////////////

    // let usuario="";
    // do {
    //     usuario = prompt("Ingresar tu Usuario"); 
    //         if (usuario != "") {
    //             alert("Tu Usuario es " + usuario);
    //         } else {
    //             alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    //         }
    //     usuario = prompt("Ingresar tu email");
    //         if (usuario != "") {
    //             alert("Tu email es " + usuario);
    //         } else {
    //             alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    //         }
    //     usuario = prompt("Ingresa tu clave"); 
    //         if (usuario != "") {
    //                 alert("Ingresaste la clave con Éxito");
    //             } else {
    //                 alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    //                 break;
    //             }
    // } while (true);

    // let usuario = ingresoNombre;
    // while(usuario != "" ){
    //     usuario= prompt("Imgresa tu Usuario");
        
    //     alert("El usuario ingresó "+ usuario);
        
    //     entrada = prompt("Ingresar otro dato");
    // }
    


//    let usuario = prompt("Ingresar un nombre");

// while(usuario != " " ){
//    switch (usuario) {
//        case "ANA":
//             alert("HOLA ANA");
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//        default:
//            alert("¿QUIÉN SOS?")
//            break;
//    }
//    usuario = prompt("Ingresar un nombre");
// }
///////////////////////////////////////////////////
    // let ingresoNombre = prompt("Ingrese su Nombre");
    // let ingresoEmail = prompt("Ingrese su Email");
    // let ingresoPass = prompt("Ingrese su Contraseña");
    // let usuario = ingresoNombre;
    // let email = ingresoEmail;
    // let pass = ingresePass;
    // let blanco = "";

    // do {
    //     usuario = prompt("Ingresar tu Usuario"); 
    //     if (usuario === blanco) {
    //         alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    //     } else {
    //         alert("Tu Usuario es " + usuario);
    
    //         email = prompt("Ingresar tu email");
    //         if (email === blanco) {
    //             alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    //         } else {
    //             alert("Tu email es " + email);
    
    //             pass = prompt("Ingresa tu clave"); 
    //             if (pass === blanco) {
    //                 alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    //             } else {
    //                 alert("Ingresaste la clave con Éxito");
    //                 break;
    //             }
    //         }
    //     }
    // } while (true);
    // let ingresoNombre = prompt("Ingrese su Nombre");
    // let ingresoEmail = prompt("Ingrese su Email");
    // let ingresoPass = prompt("Ingrese su Contraseña");
    // let usuario = prompt("Ingrese su Usuario");
    // let email = prompt("Ingrese su Email");
    // let pass = prompt("Ingrese su Contraseña");
    // const blanco = "";
    // const leyenda = "No has ingresado ningún dato. Por favor, inténtalo nuevamente.";

    //   if (usuario  != blanco || email != blanco || pass != blanco){
    //     alert("Tu Usuario es " + usuario);
    //     alert("Tu email es " + email);
    //     alert("Ingresaste la clave con Éxito");
    //   }else{alert(leyenda);}
    // // do {
        // usuario = prompt("Ingresar tu Usuario"); 
    //  while(usuario != blanco || email != blanco || pass != blanco) {
    //     if (usuario === blanco) {
    //         alert(leyenda);
    //     } else {
    //         alert("Tu Usuario es " + usuario);
    //         }
    
    //         // email = prompt("Ingresar tu email");
    //         if (email === blanco) {
    //             alert(leyenda);
    //         } else {
    //             alert("Tu email es " + email);
    //         }
    //             // pass = prompt("Ingresa tu clave"); 
    //             if (pass === blanco) {
    //                 alert(leyenda);
    //             } else {
    //                 alert("Ingresaste la clave con Éxito");
                    
    //             }
    //         }
        
        
    // } while(blanco != usuario || blanco != email || blanco != pass) 
    let ingresoNombre = prompt("Ingrese su Nombre");


if(ingresoNombre === ""){
alert("No ingresaste ningun nombre, por favor intentalo nuevamente");
}
else {
alert("Bienvenido " + ingresoNombre);
}



let usuario = ingresoNombre;

while (usuario!="") {
        usuario = prompt("Ingresar tu Usuario"); 
        if (usuario === "") {
            alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
        } else {
            alert("Tu Usuario es " + usuario);
    
            usuario = prompt("Ingresar tu email");
            if (usuario === "") {
                alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
            } else {
                alert("Tu email es " + usuario);
    
                usuario = prompt("Ingresa tu clave"); 
                if (usuario === "") {
                    alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
                } else {
                    alert("Ingresaste la clave con Éxito");
                    // break;
                }
            }
        }
    } 

