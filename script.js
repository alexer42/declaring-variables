/* Teste Area 1

var
var altura = 5;
var comprimento = 7;

area = altura * comprimento
conole.log(area);
*/

/*teste 2

let forma = 'retangulo'
let altura = 5;
let comprimento = 7;
let area;

*/         

/* teste 3
if(forma === 'retangulo'){
area = altura * comprimento
}else {
    area = ( altura * comprimento / 2)
    }
console.log(area);
const forma = 'quadrado'
*/
// Area Retangulo
function retangulo() {
    const altura_ = 5;
    const comprimento = 7;
    const area_retangulo = altura_ * comprimento;
    return area_retangulo;
}


// Area Triângulo
function triangulo() {
    const base = 5;
    const altura_triangulo = 7;
    const area_triangulo = base * altura_triangulo / 2;
    return area_triangulo;
}

// Area Quadrado
function quadrado() {
    const lado = 5;
    const area_quadrado = lado * lado;
    return area_quadrado;
}

function mostra_area() {
    const formas = ['retangulo', 'triangulo', 'quadrado', 'Forma desconhecida'];
    const forma = formas[Math.floor(Math.random() * formas.length)];
    if (forma === 'retangulo') {
        console.log('Retângulo: ' + retangulo());
    } else if (forma === 'triangulo') {
        console.log('Triângulo: ' + triangulo());
    } else if (forma === 'quadrado') {
        console.log('Quadrado: ' + quadrado());
    } else {
        console.log('Forma desconhecida');
    }
}

mostra_area();















