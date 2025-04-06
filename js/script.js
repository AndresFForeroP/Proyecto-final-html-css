const listaropa = [
    "vestido",
    "pantalon",
    "camiseta"
];

const cajaresultados = document.querySelector(
    ".resultados"
);

const cajainput = document.querySelector(
    ".barra-busqueda"
);
const mostrarresultados = function (resultado) {
    const resultadohtml = resultado.map(function (ropa) {
        return `<li onclick=selectInput(this)>
        ${ropa}
    </li>`; 
    });

    cajaresultados.innerHTML = `<ul>` + 
        resultadohtml.join("") +
        `</ul>`
};

cajainput.onkeyup = function (e) {
    let resultado = [];
    const input = cajainput.value.toLowerCase();

    if (input.length === 0) {
        cajaresultados.innerHTML = "";
    }

    if (input.length) {
        resultado = listaropa.filter((ropa) => {
            return ropa.toLowerCase().includes(input);
        });
        mostrarresultados(resultado)
    }
}

function selectInput(ropa) {
    cajainput.value = ropa.innerText;
    cajaresultados.innerHTML = "";
};
