// problema basico Platzi 
var mazo01 = 'piedra';
var mazo02 = 'papel';
var mazo03 = 'tijera';

function mazoDePoker(people, server){
    if (people != server){
        if ((people === mazo01 && server=== mazo02) || (people === mazo02 && server== mazo03) || (people === mazo03 && server === mazo01)) {
            console.log("gana persona");
        }
        else if ((server === mazo01 && people=== mazo02) || (server === mazo02 && people== mazo03) || (server === mazo03 && people === mazo01)){
            console.log("gana server");
        }
    }
    else if (people = server){
        console.log('empate');
    }
}

mazoDePoker(mazo02, mazo02); // empate
// you just have to change in mazoDePoker  
//-------------------Other Method--------
// var op1 = "Piedra";
// var op2 = "Papel";
// var op3 = "Tijera";

// var resultado = function(user, cpu){
//     if(user != cpu){
//         if(user === op1 && cpu === op3){
//             console.log("el usuario GANO con "+ op1)
//         }else if(user === op2 && cpu === op1){
//             console.log( "el usuario GANO con " + op2)
//         }else if(user === op3 && cpu === op2){
//             console.log("el usuario GANO con " + op3)
//         }else{
//             console.log("La CPU Gano!!")
//         }
//     }else if(user === cpu){
//         console.log("Empate")
//     }
// };

// resultado(op1,op2);