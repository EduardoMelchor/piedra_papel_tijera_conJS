
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
