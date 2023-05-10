
let pc = Math.floor( Math.random()* (3-1+1)+ 1)
let Jugador = prompt("Seleccione 1=> Piedra, 2=> Papel o 3=> Tijera")
let SeleccionJugador= Jugador==1?"El Jugador ha seleccionado 🪨 ": Jugador==2? "El Jugador ha seleccionado 🗞️ ": "El Jugador ha seleccionado ✂️"
let Seleccionpc= pc==1?"Pc ha seleccionado 🪨 ": pc==2? "Pc ha seleccionado 🗞️ ": "Pc ha seleccionado ✂️"
alert(SeleccionJugador)
alert(Seleccionpc)
Resultado(pc,Jugador)


function Resultado(pc, Jugador)
{
    let obje= {1:3, 2:1,3:2}
    let ResultadoJuego= pc== Jugador? "Empate!": pc==obje[Jugador]?"Ganaste!!": "Perdiste!"
    alert(ResultadoJuego)
}