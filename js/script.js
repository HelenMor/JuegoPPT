let victorias=0
let derrotas=0
 while(victorias<3 && derrotas<3)
 {
    let pc = Math.floor( Math.random()* (3-1+1)+ 1)
    let Jugador = prompt("Seleccione 1=> Piedra, 2=> Papel o 3=> Tijera")
    alert("El jugador ha seleccionado: " + Seleccion(Jugador))
    alert("PC ha seleccionado: " + Seleccion(pc))
    Resultado(pc,Jugador)
 }
 alert ("Has ganado: "+ victorias + " veces. Has perdido: "+ derrotas+ " veces.")



function Seleccion(jugada)
{
  let eleccion = jugada==1 ?"🪨": jugada== 2? "📋": "✂️"
  return eleccion
}

function Resultado(pc, Jugador)
{
    let obje= {1:3, 2:1,3:2}
    let veredicto= ""
    if (pc==obje[Jugador])
    {
        veredicto= "Ganaste!"  
        victorias= victorias+1
    }
    else if (pc== Jugador)
    {
        veredicto= "Empate!"
    }
    else{
      veredicto= "Perdiste!"
      derrotas= derrotas+1
      
    }
  
    alert(veredicto)
}