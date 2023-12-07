const productos = [
    { id: 1, nombre: "Blue beetle", tipo: "vasos", precio: 5000, imagen: "../assets/images/tienda/vaso1.png" },
    { id: 2, nombre: "La monja", tipo: "vasos", precio: 6000, imagen: "../assets/images/tienda/vaso2.jpg" },
    { id: 3, nombre: "Batman", tipo: "vasos", precio: 5500, imagen: "../assets/images/tienda/vaso3.jpg" },
    { id: 4, nombre: "Barbie", tipo: "vasos", precio: 7000, imagen: "../assets/images/tienda/vaso4.png" },
    { id: 5, nombre: "Ordinaty people", tipo: "termos", precio: 8000, imagen: "../assets/images/tienda/termo1.jpg" },
    { id: 6, nombre: "Animales fantasticos", tipo: "termos", precio: 7500, imagen: "../assets/images/tienda/termo2.jpg" },
    { id: 7, nombre: "Mujer maravilla", tipo: "termos", precio: 8500, imagen: "../assets/images/tienda/termo3.jpg" },
    { id: 8, nombre: "Freddy krueger", tipo: "termos", precio: 8500, imagen: "../assets/images/tienda/termo4.jpg" },
    { id: 9, nombre: "Star wars", tipo: "estatuillas", precio: 3000, imagen: "../assets/images/tienda/est1.jpg" },
    { id: 10, nombre: "Uncharted", tipo: "estatuillas", precio: 3000, imagen: "../assets/images/tienda/est2.jpg" },
    { id: 11, nombre: "Dragon ball", tipo: "estatuillas", precio: 3500, imagen: "../assets/images/tienda/est3.jpg" },
    { id: 12, nombre: "El joker", tipo: "estatuillas", precio: 3500, imagen: "../assets/images/tienda/est4.jpg" },
    { id: 13, nombre: "Mario bros", tipo: "accesorios", precio: 2000, imagen: "../assets/images/tienda/llave.jpg" },
    { id: 14, nombre: "Game of thrones", tipo: "accesorios", precio: 1800, imagen: "../assets/images/tienda/llave2.jpg" },
    { id: 15, nombre: "Baymax", tipo: "accesorios", precio: 2100, imagen: "../assets/images/tienda/llave3.jpg" },
    { id: 16, nombre: "Batman", tipo: "accesorios", precio: 2500, imagen: "../assets/images/tienda/llave4.jpg" },
];

const peliculas = [
    {id:1, nombre:"Blue Beetle", minutos: 120, genero:"aventura", imagen: "../assets/images/peliculas/aventura1.jpg", resumen:"Un adolescente recibe un escarabajo alienígena que le otorga superpoderes, llevándolo a convertirse en el héroe Blue Beetle y luchar contra el crimen."},
    {id:2, nombre:"Uncharted", minutos: 120, genero:"aventura", imagen: "../assets/images/peliculas/aventura2.jpg", resumen:"El aventurero Nathan Drake busca tesoros y enfrenta peligros mientras descifra misterios históricos en una adaptación del popular videojuego."},
    {id:3, nombre:"Super mario bros", minutos: 120, genero:"aventura", imagen: "../assets/images/peliculas/aventura3.jpg", resumen:"Los icónicos hermanos Mario y Luigi deben rescatar a la princesa Peach de Bowser en un mundo de fantasía lleno de obstáculos y criaturas."},
    {id:4, nombre:"Avatar", minutos: 120, genero:"aventura", imagen: "../assets/images/peliculas/aventura4.jpg", resumen:"En Pandora, un exmilitar se une a los Na'vi para proteger su hogar de la explotación humana. Una historia de amor y conservación."},
    {id:5, nombre:"El gato con botas", minutos: 120, genero:"aventura", imagen: "../assets/images/peliculas/aventura5.jpg", resumen:"El astuto gato busca redimirse y robar el corazón de una princesa mientras enfrenta magia, aventuras y conspiraciones."},
    {id:6, nombre:"Rapidos y furiosos 5", minutos: 120, genero:"aventura", imagen: "../assets/images/peliculas/aventura6.jpg", resumen:"Dom y su equipo de pilotos expertos se embarcan en un atraco masivo en Río de Janeiro, desencadenando persecuciones y explosiones."},
    {id:7, nombre:"Lightyear", minutos: 120, genero:"aventura", imagen: "../assets/images/peliculas/aventura7.jpg", resumen:"La historia del astronauta que inspiró el personaje de Buzz Lightyear, con viajes espaciales, exploración y aventuras intergalácticas."},
    {id:8, nombre:"Flash", minutos: 120, genero:"aventura", imagen: "../assets/images/peliculas/aventura8.jpg", resumen:"El velocista Barry Allen, conocido como Flash, usa sus poderes para proteger Central City de villanos y desentrañar misterios relacionados con su pasado."},
    {id:9, nombre:"Barbie", minutos: 120, genero:"comedia", imagen: "../assets/images/peliculas/comedia1.jpg", resumen:"Barbie, la icónica muñeca, cobra vida en una aventura mágica. Viaja a un mundo de sueños y desafía obstáculos para salvar el día."},
    {id:10, nombre:"Tren bala", minutos: 120, genero:"comedia", imagen: "../assets/images/peliculas/comedia2.jpg", resumen:"Un thriller de acción en un tren de alta velocidad donde un pasajero lucha por detener un complot terrorista y salvar a los pasajeros."},
    {id:11, nombre:"Juntos y revueltos", minutos: 120, genero:"comedia", imagen: "../assets/images/peliculas/comedia3.jpg", resumen:"Dos padres divorciados, interpretados por Adam Sandler y Drew Barrymore, tratan de criar a sus hijos juntos mientras enfrentan caos y comedia."},
    {id:12, nombre:"Proyecto x", minutos: 120, genero:"comedia", imagen: "../assets/images/peliculas/comedia4.jpg", resumen:"Tres adolescentes planean la fiesta definitiva, que se convierte en una salvaje y caótica celebración. Filmada en estilo de metraje encontrado."},
    {id:13, nombre:"Minions", minutos: 120, genero:"comedia", imagen: "../assets/images/peliculas/comedia5.jpg", resumen:"Los adorables Minions de Mi Villano Favorito se embarcan en una misión para encontrar un nuevo maestro villano, desencadenando situaciones cómicas y desastrosas."},
    {id:14, nombre:"Niños grandes 2", minutos: 120, genero:"comedia", imagen: "../assets/images/peliculas/comedia6.jpg", resumen:"El grupo de amigos adultos se reúne nuevamente para unas vacaciones en un lago. Las travesuras y la comedia siguen fluyendo."},
    {id:15, nombre:"Relatos salvajes", minutos: 120, genero:"comedia", imagen: "../assets/images/peliculas/comedia7.jpg", resumen:"Una película argentina que presenta historias cortas de venganza y locura. Cada relato muestra un estallido de violencia en la sociedad contemporánea."},
    {id:16, nombre:"Norbit", minutos: 120, genero:"comedia", imagen: "../assets/images/peliculas/comedia8.jpg", resumen:"Un hombre tímido es víctima de abuso por parte de su esposa y su familia adoptiva. Cuando conoce a su antiguo amor de la infancia, su vida cambia drásticamente."},
    {id:17, nombre:"Al filo del mañana", minutos: 120, genero:"ficcion", imagen: "../assets/images/peliculas/ficcion1.jpg", resumen:"Un soldado revive repetidamente un día de batalla contra alienígenas, adquiriendo habilidades mientras lucha para salvar a la humanidad."},
    {id:18, nombre:"El hombre araña 3", minutos: 120, genero:"ficcion", imagen: "../assets/images/peliculas/ficcion2.jpg", resumen:"Peter Parker se enfrenta a nuevos enemigos y lucha contra la influencia del simbionte negro, poniendo a prueba su identidad y responsabilidad como Spider-Man."},
    {id:19, nombre:"Avengers infinity war", minutos: 120, genero:"ficcion", imagen: "../assets/images/peliculas/ficcion3.jpg", resumen:"Los superhéroes de Marvel se unen para detener a Thanos mientras busca las Gemas del Infinito para destruir la mitad del universo."},
    {id:20, nombre:"Gravedad", minutos: 120, genero:"ficcion", imagen: "../assets/images/peliculas/ficcion4.jpg", resumen:"Dos astronautas quedan varados en el espacio después de un desastre en la estación espacial, luchando por sobrevivir en la vastedad del cosmos"},
    {id:21, nombre:"Oblivion", minutos: 120, genero:"ficcion", imagen: "../assets/images/peliculas/ficcion5.jpg", resumen:"En un futuro posapocalíptico, un técnico de drones descubre la verdad sobre su mundo aparentemente desolado, desencadenando una lucha por la humanidad."},
    {id:22, nombre:"Coherence", minutos: 120, genero:"ficcion", imagen: "../assets/images/peliculas/ficcion6.jpg", resumen:"Durante una cena, eventos extraños y dimensionales confunden a un grupo de amigos, revelando secretos oscuros y desafiando la realidad."},
    {id:23, nombre:"La llegada", minutos: 120, genero:"ficcion", imagen: "../assets/images/peliculas/ficcion7.jpg", resumen:"Una lingüista es reclutada para comunicarse con extraterrestres cuya llegada desencadena tensiones globales. La comunicación intergaláctica desafía la comprensión humana."},
    {id:24, nombre:"interstellar", minutos: 120, genero:"ficcion", imagen: "../assets/images/peliculas/ficcion8.jpg", resumen:"n un futuro con recursos escasos, un grupo de astronautas parte en busca de un nuevo hogar en agujeros de gusano, explorando la relatividad del tiempo y el amor."},
    {id:25, nombre:"El justiciero 2", minutos: 120, genero:"suspenso", imagen: "../assets/images/peliculas/suspenso1.jpg", resumen:"Un hombre se convierte en un vengador anónimo para luchar contra la injusticia y crimen en las calles de Nueva York."},
    {id:26, nombre:"Misantropo", minutos: 120, genero:"suspenso", imagen: "../assets/images/peliculas/suspenso2.jpg", resumen:"Un hombre desilusionado con la sociedad y las relaciones humanas se retira a una cabaña en el bosque, enfrentando su propia soledad y desconfianza."},
    {id:27, nombre:"Llaman a la puerta", minutos: 120, genero:"suspenso", imagen: "../assets/images/peliculas/suspenso3.jpg", resumen:"En una cabaña aislada, un grupo de amigos se enfrenta a eventos sobrenaturales y misterios que los acechan desde afuera."},
    {id:28, nombre:"Escape bajo fuego", minutos: 120, genero:"suspenso", imagen: "../assets/images/peliculas/suspenso4.jpg", resumen:"Una periodista y un bombero se unen para escapar de un incendio forestal mortal mientras luchan por sobrevivir y encontrar un camino seguro."},
    {id:29, nombre:"Quiebre", minutos: 120, genero:"suspenso", imagen: "../assets/images/peliculas/suspenso5.jpg", resumen:"Un grupo de criminales planifica un atraco sofisticado en la Reserva Federal de los Estados Unidos, desencadenando una frenética carrera contra el tiempo y las autoridades."},
    {id:30, nombre:"Deberias haberte ido", minutos: 120, genero:"suspenso", imagen: "../assets/images/peliculas/suspenso6.jpg", resumen:"Una familia alquila una casa de vacaciones que esconde oscuros secretos y realidades distorsionadas, poniendo a prueba su cordura y relaciones."},
    {id:31, nombre:"Venganza", minutos: 120, genero:"suspenso", imagen: "../assets/images/peliculas/suspenso7.jpg", resumen:"Un exasesino busca venganza contra quienes lastimaron a su familia, desatando una implacable cacería en busca de justicia."},
    {id:32, nombre:"Espiral", minutos: 120, genero:"suspenso", imagen: "../assets/images/peliculas/suspenso8.jpg", resumen:"Un detective y su compañero investigan una serie de horribles crímenes relacionados con un oscuro legado. La lucha contra la corrupción y el miedo se intensifica."},
    {id:33, nombre:"Cementerio de animales", minutos: 120, genero:"terror", imagen: "../assets/images/peliculas/terror1.jpg", resumen: "Una familia descubre un antiguo cementerio maldito que puede revivir a sus mascotas, pero a un alto precio. La muerte nunca es permanente."},
    {id:34, nombre:"Hablame", minutos: 120, genero:"terror", imagen: "../assets/images/peliculas/terror2.jpg", resumen:"Una adolescente autista se comunica a través de su escritura y cambia vidas, incluyendo la de su terapeuta, mostrando la importancia de la empatía."},
    {id:35, nombre:"65 al borde de la extincion", minutos: 120, genero:"terror", imagen: "../assets/images/peliculas/terror3.jpg", resumen:"En un futuro distópico, la humanidad lucha por sobrevivir mientras los adultos mueren a los 65 años, y los jóvenes se rebelan contra el sistema."},
    {id:36, nombre:"Megan", minutos: 120, genero:"terror", imagen: "../assets/images/peliculas/terror4.jpg", resumen:"Un misterioso doble secuestra a una joven y asume su identidad, desencadenando un juego peligroso que revela oscuros secretos familiares."},
    {id:37, nombre:"Terrifier 2", minutos: 120, genero:"terror", imagen: "../assets/images/peliculas/terror5.jpg", resumen:"Un sádico asesino aterroriza la ciudad en Halloween. El caos y la violencia alcanzan niveles extremos mientras un detective lucha por detenerlo."},
    {id:38, nombre:"El exorcista del papa", minutos: 120, genero:"terror", imagen: "../assets/images/peliculas/terror6.jpg", resumen:"Un sacerdote renegado se enfrenta a posesiones demoníacas, desafiando las normas de la Iglesia. ¿Puede salvar a las almas atormentadas?"},
    {id:39, nombre:"Cementerio maldito", minutos: 120, genero:"terror", imagen: "../assets/images/peliculas/terror7.jpg", resumen:"Una familia que se muda a una casa cerca de un cementerio ancestral descubre un oscuro poder de resurrección que conlleva consecuencias mortales."},
    {id:40, nombre:"vivero", minutos: 120, genero:"terror", imagen: "../assets/images/peliculas/terror8.jpg", resumen:"En un mundo posapocalíptico, dos jóvenes intentan escapar de una comunidad brutal y controladora, enfrentando peligros y dilemas éticos en su búsqueda de libertad."},
];

function recuperarCarrito(){
if (JSON.parse(localStorage.getItem("Carrito"))){
    return JSON.parse(localStorage.getItem("Carrito"))
}
else {
    return []
}
}