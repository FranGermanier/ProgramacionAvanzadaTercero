// Juego el señor de los anillos

function jugador(nombre){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.tirarFlecha = function(jugador){
        if (this.sp == 0){
            console.log(`${this.nombre} se quedo sin habilidades, debe regenerarse para seguir usando habilidades`);
        }
        else{
            this.sp = this.sp - 10;
            dmg = Math.round(Math.random()*10);
            if (dmg == 0){
                console.log(`${this.nombre} ha fallado la flecha`)
            }
            else{
                if (dmg >= jugador.pv){
                    jugador.pv = 0;
                    console.log(`El jugador ${jugador.nombre} ha muerto por un flechazo de  ${this.nombre}`);
                }
                else {
                    jugador.pv = jugador.pv - dmg;
                    console.log(`${this.nombre} ha probocado ${dmg} de daño a ${jugador.nombre}`)
                }
            }
        }
        
    }
    this.curar = function(jugador){
        if (this.sp == 0){
            console.log(`${this.nombre} se quedo sin habilidades, debe regenerarse para seguir usando habilidades`);
        }
        else{
            this.sp = this.sp - 10;
            cura = Math.round(Math.random()*10);
            if (cura == 0){
                console.log(`El hechizo de curacion de ${this.nombre} ha fallado`);
            }
            else {
                jugador.pv = jugador.pv + cura;
                console.log(`Se ha curado a ${jugador.nombre} ${cura} puntos de vida`);
            }
            
        }
        
    }
    this.regenerarse = function(){
        this.sp = 100;
        console.log(`Se han regenerado las habilidades de ${this.nombre}`);
    }

}

let orco = new jugador("Orco");
let legolas = new jugador("Legolas");

console.log(orco);
console.log(legolas);

function verEstadisticas(){
    console.log(orco);
    console.log(legolas);
}