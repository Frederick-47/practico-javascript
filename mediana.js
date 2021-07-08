function calcularPromedioAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }   
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista; 
}


const lista1 = [
    100,
    200,
    500,
    400000000,
];

const lista2 = [
    100,
    200,
    500,
    800,
    400000000,
];

const lista3 = [
    200,
    100,
    900,
    600,
    300,
    700,
    
];

lista = lista3.sort()

function calcularMedianaAritmetica(lista) {
    function esPar(zahlen) {
    if (zahlen % 2 === 0){
        return true;
    } else {
        return false;
    }
    }
    let mediana;
    const mitadLista = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularPromedioAritmetica([elemento1, elemento2]);
    

        mediana = promedioElemento1y2;
        return mediana;
    }else {
        return mediana = lista1[mitadLista];
}
}




