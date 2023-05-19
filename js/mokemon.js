const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById("button-seleccion")

const sectionSeleccionarMascotas = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const botonReiniciar = document.getElementById("button=reiniciar")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")


const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const selectionMensajes = document.getElementById("resultado")
const ataquesJugador = document.getElementById("ataques-jugador")
const ataquesEnemigo = document.getElementById("ataque-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let mokepones =[]
let ataqueJugador = []

let ataqueEnemigo = []
let opcionDeMokepones
let inputAlexstrasza
let inputMalygoz
let inputAlamuerte 
let inputYsera 
let inputNozdormu 
let inputShivana
let mascotaJugador
let mascotaJugadprObjeto
let ataquesMokepon
let ataqueMokeponEnemigo
let botonAgua
let botonTierra 
let botonFuego 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "https://virtus-img.cdnvideo.ru/images/as-is/plain/3f/3f564ba03bf2fb348d6ff16ee6aa3ec8.jpg"

class Mokepon{
        constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10 ){
                this.nombre = nombre
                this.foto = foto
                this.vida = vida
                this.ataque = []
                this.x = x
                this.y = y
                this.ancho = 80
                this.alto = 80  
                this.mapaFoto = new Image()   
                this.mapaFoto.src = fotoMapa
                this.velocidadX = 0
                this.velocidadY = 0
        }
        pintarMokepon(){
                lienzo.drawImage(
                        this.mapaFoto,
                        this.x,
                        this.y,
                        this.ancho,
                        this.alto
                )
        }
}

let Alexstrasza = new Mokepon("Alexstrasza", "https://static.wikia.nocookie.net/wowpedia/images/e/e4/Alexstrasza_BotA.jpg/revision/latest/scale-to-width-down/1000?cb=20190823181625", 5, "./assets/aliados/alextraza.png")
let Malygoz = new Mokepon("Malygoz", "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a2/Malygos_full.jpg/revision/latest/scale-to-width-down/400?cb=20151017212417", 5, "./assets/aliados/malygoz.png")
let Alamuerte = new Mokepon("Alamuerte", "https://i.pinimg.com/236x/43/6c/8e/436c8eede4c538e729553c1d72efc1a7--hearthstone-heroes-of-warcraft-warcraft-art.jpg", 5, "./assets/aliados/alamuerte.png")
let Ysera = new Mokepon("Ysera", "https://pm1.narvii.com/6259/c6fc075b1415d483504d537f2c3b67da16ac8705_hq.jpg", 5, "./assets/aliados/yzera.png")
let Nozdormu = new Mokepon("Nozdormu", "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/9/98/Nozdormu_full.jpg/revision/latest/scale-to-width-down/400?cb=20151024154336", 5, "./assets/aliados/nozdormu.png")
let Shivana = new Mokepon("Shivana", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPj-QCseoT9KXNvam5pIvZcIDNu8SmMjm19A&usqp=CAU", 5, "./assets/aliados/shivana.png")

let AlexstraszaEnemigo = new Mokepon("Alexstrasza", "https://static.wikia.nocookie.net/wowpedia/images/e/e4/Alexstrasza_BotA.jpg/revision/latest/scale-to-width-down/1000?cb=20190823181625", 5, "./assets/enemigos/alextraza.png", 480, 60.25)
let MalygozEnemigo = new Mokepon("Malygoz", "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a2/Malygos_full.jpg/revision/latest/scale-to-width-down/400?cb=20151017212417", 5, "./assets/enemigos/malygoz.png",470,294.75)
let AlamuerteEnemigo = new Mokepon("Alamuerte", "https://i.pinimg.com/236x/43/6c/8e/436c8eede4c538e729553c1d72efc1a7--hearthstone-heroes-of-warcraft-warcraft-art.jpg", 5, "./assets/enemigos/alamuerte.png",687,178.5)
let YseraEnemigo = new Mokepon("Ysera", "https://pm1.narvii.com/6259/c6fc075b1415d483504d537f2c3b67da16ac8705_hq.jpg", 5, "./assets/enemigos/yzera.png", 575,294.75)
let NozdormuEnemigo = new Mokepon("Nozdormu", "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/9/98/Nozdormu_full.jpg/revision/latest/scale-to-width-down/400?cb=20151024154336", 5, "./assets/enemigos/nozdormu.png",576,60.25)
let ShivanaEnemigo = new Mokepon("Shivana", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPj-QCseoT9KXNvam5pIvZcIDNu8SmMjm19A&usqp=CAU", 5, "./assets/enemigos/shivana.png",576,178.5)

Alexstrasza.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
Malygoz.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
Alamuerte.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
Ysera.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🌱", id: "button-tierra"},
        {nombre: "🌱", id: "button-tierra"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
Nozdormu.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🌱", id: "button-tierra"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
Shivana.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
mokepones.push(Alexstrasza, Malygoz, Alamuerte, Ysera, Nozdormu, Shivana)
AlexstraszaEnemigo.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
MalygozEnemigo.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
AlamuerteEnemigo.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
YseraEnemigo.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🌱", id: "button-tierra"},
        {nombre: "🌱", id: "button-tierra"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
NozdormuEnemigo.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🌱", id: "button-tierra"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)
ShivanaEnemigo.ataque.push(
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "🔥", id: "button-fuego"},
        {nombre: "💧", id: "button-agua"},
        {nombre: "🌱", id: "button-tierra"},
)

function iniciarJuego(){
sectionSeleccionarAtaque.style.display = "none"
sectionVerMapa.style.display= "none"
mokepones.forEach((mokepon)=>{
        opcionDeMokepones = ` 
        <input type = "radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokemon" for=${mokepon.nombre}>
            <P>${mokepon.nombre}</P>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`
contenedorTarjetas.innerHTML += opcionDeMokepones
inputAlexstrasza = document.getElementById("Alexstrasza")
inputMalygoz = document.getElementById("Malygoz")
inputAlamuerte = document.getElementById("Alamuerte")
inputYsera = document.getElementById("Ysera")
inputNozdormu = document.getElementById("Nozdormu")
inputShivana = document.getElementById("Shivana")
})
sectionReiniciar.style.display = 'none'
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

botonReiniciar.addEventListener("click", reiniciarJuego)
}



function seleccionarMascotaJugador(){
sectionSeleccionarMascotas.style.display = "none"
//sectionSeleccionarAtaque.style.display = "flex"

sectionVerMapa.style.display= "flex"
iniciarMapa()

      
        if (inputAlexstrasza.checked){
                spanMascotaJugador.innerHTML = inputAlexstrasza.id
                mascotaJugador = inputAlexstrasza.id
        } else if (inputMalygoz.checked){
                spanMascotaJugador.innerHTML = inputMalygoz.id
                mascotaJugador = inputMalygoz.id
        }else if (inputAlamuerte.checked){
                spanMascotaJugador.innerHTML = inputAlamuerte.id
                mascotaJugador = inputAlamuerte.id
        }else if (inputYsera.checked){
                spanMascotaJugador.innerHTML = inputYsera.id
                mascotaJugador = inputYsera.id
        }else if (inputNozdormu.checked){
                spanMascotaJugador.innerHTML = inputNozdormu.id
                mascotaJugador = inputNozdormu.id
        }else if (inputShivana.checked){
                spanMascotaJugador.innerHTML = inputShivana.id
                mascotaJugador = inputShivana.id
        }else {
                alert("Choose Your Dragon")
                reiniciarJuego()
        }
        extraerAtaques(mascotaJugador)
        sectionVerMapa.style.display= "flex"
        iniciarMapa()
        
}
function extraerAtaques(mascotaJugador){
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
               if (mascotaJugador === mokepones[i].nombre) {
                        ataques = mokepones[i].ataque
               }
        }
        mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
        ataques.forEach((ataque) => {
                ataquesMokepon = `
                <button id= ${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
                `
                contenedorAtaques.innerHTML += ataquesMokepon
        })
                botonAgua = document.getElementById("button-agua")
                botonTierra = document.getElementById("button-tierra")
                botonFuego = document.getElementById("button-fuego")
                botones = document.querySelectorAll(".BAtaque")
                
              
}
function secuenciaAtaque(){
        botones.forEach((boton) => {
                boton.addEventListener("click", (e) =>{
                        if (e.target.textContent === "🔥") {
                             ataqueJugador.push("Fire")   
                             boton.style.background= "#112f58"
                             boton.disabled = true
                        } else if (e.target.textContent === "💧"){
                                ataqueJugador.push("Water")   
                                boton.style.background= "#112f58"
                                boton.disabled = true
                        }else{
                                ataqueJugador.push("Earth")   
                                boton.style.background= "#112f58"
                                boton.disabled = true
                        }
                        console.log(ataqueJugador)
                        AtaqueAleatorioEnemigo()
                })
        })

}

function seleccionarMascotaEnemigo(enemigo){
//let mascotaAleatorio = aleatorio(0, mokepones.length -1)
             
spanMascotaEnemigo.innerHTML = enemigo.nombre
ataqueMokeponEnemigo = enemigo.ataque
secuenciaAtaque()
}

function AtaqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(0, ataqueMokeponEnemigo.length -1)
        if ( ataqueAleatorio == 0 || ataqueAleatorio ==1){
                ataqueEnemigo.push("Fire")
        }
        else if ( ataqueAleatorio == 3 || ataqueAleatorio == 4){
                ataqueEnemigo.push("Water")
        }
        else 
        {ataqueEnemigo.push("Earth")
        }

        iniciarPelea()
}
function iniciarPelea(){
        if (ataqueJugador.length === 5){
                combate()
        }
}
function indexAmbosOponentes(jugador, enemigo){
        indexAtaqueJugador = ataqueJugador[jugador]
        indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}
function combate(){
        for (let index = 0; index < ataqueJugador.length; index++) {
                if(ataqueJugador[index] === ataqueEnemigo[index]){
                        indexAmbosOponentes(index, index)
                        crearMensaje("TIE")
                      
                }else if (ataqueJugador[index] === "Fire" && ataqueEnemigo [index] === "Earth"){
                        indexAmbosOponentes(index,index)
                        crearMensaje("victory")
                        victoriasJugador ++
                        spanVidasJugador.innerHTML= victoriasJugador
                }else if (ataqueJugador[index]=== "Water" && ataqueEnemigo [index] === "Fire"){
                        indexAmbosOponentes(index,index)
                        crearMensaje("victory")
                        victoriasJugador ++
                        spanVidasJugador.innerHTML= victoriasJugador                
        }else if (ataqueJugador[index] === "Earth" && ataqueEnemigo [index] === "Water"){
                        indexAmbosOponentes(index,index)
                        crearMensaje("victory")
                        victoriasJugador ++
                        spanVidasJugador.innerHTML= victoriasJugador 
        } else{
                        indexAmbosOponentes(index,index)
                        crearMensaje("defeat")
                        victoriasEnemigo ++
                        spanVidasEnemigo.innerHTML= victoriasEnemigo
        }}
        revisarVidas()
}
function revisarVidas(){
        if (victoriasJugador === victoriasEnemigo){
                crearMensajeFinal("It's a Tie 🤞")
                
        }else if(victoriasJugador > victoriasEnemigo){
                crearMensajeFinal("Congratulations! Won 😊")
                
        }else{
                crearMensajeFinal("sorry you lost 😔")

        }
}
function crearMensaje(resultado){
        let notificacion = document.createElement("P")
        let nuevoAtaqueJugador = document.createElement("P")
        let nuevoAtaqueEnemigo = document.createElement("P")
        selectionMensajes.innerHTML = resultado
        nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
        nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
        selectionMensajes.appendChild(notificacion)
        ataquesJugador.appendChild(nuevoAtaqueJugador)
        ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)  
}
function crearMensajeFinal(resultadoFinal){
        selectionMensajes.innerHTML = resultadoFinal
       
        sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
        location.reload()
}    
function aleatorio(min,max){
       return Math.floor(Math.random()*(max-min+1)+ min)
}
function pintarCanvas(){
        mascotaJugadprObjeto.x = mascotaJugadprObjeto.x + mascotaJugadprObjeto.velocidadX
        mascotaJugadprObjeto.y = mascotaJugadprObjeto.y + mascotaJugadprObjeto.velocidadY
        lienzo.clearRect(0,0,mapa.width, mapa.height)
        lienzo.drawImage(
                mapaBackground,
                0,
                0,
                mapa.width,
                mapa.height
        )
       mascotaJugadprObjeto.pintarMokepon()
       AlexstraszaEnemigo.pintarMokepon()
       YseraEnemigo.pintarMokepon()
       AlamuerteEnemigo.pintarMokepon()
       NozdormuEnemigo.pintarMokepon()
       MalygozEnemigo.pintarMokepon()
       ShivanaEnemigo.pintarMokepon()
       if(mascotaJugadprObjeto.velocidadX !== 0 || mascotaJugadprObjeto.velocidadY !== 0 ){
        revisarColicion(AlexstraszaEnemigo)
        revisarColicion(AlamuerteEnemigo)
        revisarColicion(MalygozEnemigo)
        revisarColicion(YseraEnemigo)
        revisarColicion(NozdormuEnemigo)
        revisarColicion(ShivanaEnemigo)
       }
        
}
function moverDerecha(){
       
        mascotaJugadprObjeto.velocidadX = 5
}
function moverIzquierda(){
        
        mascotaJugadprObjeto.velocidadX = -5
}
function moverAbajo(){
        
        mascotaJugadprObjeto.velocidadY = 5
}
function moverArriba(){
       
        mascotaJugadprObjeto.velocidadY = -5
}
function detenerMovimiento(){
        
        mascotaJugadprObjeto.velocidadX = 0
        mascotaJugadprObjeto.velocidadY = 0
}
function sePresionoUnaTecla(event){
        switch (event.key) {
                case "ArrowUp":
                        moverArriba()
                        
                        break;
                case "ArrowDown":
                        moverAbajo()
                        break
                case "ArrowLeft":
                        moverIzquierda()
                        break
                case "ArrowRight":
                        moverDerecha()
                        break
                default:
                        break;
        }

}
function iniciarMapa(){
        mapa.width = 768
        mapa.height = 429


mascotaJugadprObjeto = obtenerObjetoMascota(mascotaJugador)

intervalo = setInterval(pintarCanvas, 50)

window.addEventListener("keydown", sePresionoUnaTecla)
window.addEventListener("keyup", detenerMovimiento)

}
function obtenerObjetoMascota(){
        for (let i = 0; i < mokepones.length; i++) {
                if (mascotaJugador === mokepones[i].nombre) {
                         return mokepones[i]
                }
         }
}
function revisarColicion(enemigo){
        const arribaEnemigo = enemigo.y
        const abajoEnemigo = enemigo.y + enemigo.alto
        const derechaEnemigo = enemigo.x + enemigo.ancho
        const izquierdaEnemigo = enemigo.x

        const arribaMascota = 
                mascotaJugadprObjeto.y + 50
        const abajoMascota = 
                mascotaJugadprObjeto.y + mascotaJugadprObjeto.alto - 50
        const derechaMascota = 
                mascotaJugadprObjeto.x + mascotaJugadprObjeto.ancho -50
        const izquierdaMascota = 
                        mascotaJugadprObjeto.x +50


        if(
                abajoMascota < arribaEnemigo || 
                arribaMascota > abajoEnemigo||
                derechaMascota< izquierdaEnemigo||
                izquierdaMascota > derechaEnemigo 
        ){
                return
         }

        detenerMovimiento()
        clearInterval(intervalo)
        sectionSeleccionarAtaque.style.display = "flex"
        sectionVerMapa.style.display= "none"
        seleccionarMascotaEnemigo(enemigo)
       // alert("your opponent will be "+ enemigo.nombre)
}
window.addEventListener("load", iniciarJuego)