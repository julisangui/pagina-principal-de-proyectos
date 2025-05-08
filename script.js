function crearProyecto({ imagen, titulo, descripcion, herramientas, enlace }) {
    const herramientasHTML = herramientas.map(herramienta => `<span>${herramienta}</span>`).join('');
    return `
        <div class="tarjeta-proyecto">
            <img src="${imagen}" class="imagen-proyecto" />
            <div class="info-proyecto">
                <h3 class="titulo-proyecto">${titulo}</h3>
                <p class="descripcion-proyecto">${descripcion}</p>
                <div class="herramientas-utilizadas">
                    ${herramientasHTML}
                </div>
                <div class="boton-proyecto">
                    <a href="${enlace}" target="_blank" rel="noopener noreferrer" class="btn-enlace">
                        Ir a la página <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}
    
const proyectos = [
    {
        imagen: "assets/acordeon.png",
        titulo: "Acordeon",
        descripcion: "Componente de acordeon",
        herramientas: ["HTML", "CSS", "JavaScript"],
        enlace: "https://julisangui.github.io/Acordeon/"
    },
 
    {
        imagen: "assets/componente-calificador.png",
        titulo: "Componente calificador",
        descripcion: "Componente calificador que puede reutilizarse en cualquier proyecto",
        herramientas: ["HTML", "CSS", "JavaScript"],
        enlace: "https://julisangui.github.io/componente-calificador/"
    },

    {
        imagen: "assets/administrador-de-extensiones.png",
        titulo: "Administrador de extensiones",
        descripcion: "Software para administrar extensiones, puede ser utilizado tambien como componente para activar/desactivar funciones de un software",
        herramientas: ["HTML", "CSS", "JavaScript"],
        enlace: "https://julisangui.github.io/Administrador-de-extensiones/"
    },

    {
        imagen: "assets/generador-ticket.png",
        titulo: "Generador de tickets",
        descripcion: "Software para generar tickets para cualquier evento",
        herramientas: ["HTML", "CSS", "JavaScript"],
        enlace: "https://julisangui.github.io/Generador-tickets/"
    },

    {
        imagen: "assets/e-commerce-de-comida.png",
        titulo: "E-commerce de comida",
        descripcion: "Comercio electronico para comprar comida, puede ser utilizado como base para algun otro e-commerce",
        herramientas: ["HTML", "CSS", "JavaScript"],
        enlace: "https://julisangui.github.io/e-commerce-de-comida/"
    },

    {
        imagen: "assets/calculadora-de-hipoteca.png",
        titulo: "Calculadora de hipoteca",
        descripcion: "Calculadora de hipotecas en Euros",
        herramientas: ["HTML", "CSS", "JavaScript"],
        enlace: "https://julisangui.github.io/calculo-de-hipoteca-euros/"
    },





    // AGREGAR LAS DE FRONT-END MENTOR ARRIBA

    {
        imagen: "assets/Paradisus.png",
        titulo: "Página de Resort Caribeño",
        descripcion: "Esta página es un SPA de un hotel ficticio caribeño en el cual se podrá solicitar una reserva ya sea en una habitación o en una villa. Podrás ingresar la cantidad de huéspedes, el tiempo de estancia, y ver las actividades, excursiones y servicios que el hotel ofrece",
        herramientas: ["MongoDB", "Express", "React", "Node.js"],
        enlace: "https://julisangui.github.io/Paradisus/"
    }
];

document.getElementById("contenedor-proyectos").innerHTML = proyectos.map(crearProyecto).join('');