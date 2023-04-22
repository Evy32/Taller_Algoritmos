function media(){

    //alert(), prompt(): Usarla con precaución    
    let campo_x = document.getElementById('x');
    let campo_y = document.getElementById('y');
    let campo_z = document.getElementById('z');

    //Casting: Transformar de manera explícita el tipo
    //de dato de una variable en js 
    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

    let promedio= ((x+y+z)/3)*0.55;
    console.log(promedio);
    return promedio;
    
}
function nfinal(){

    let w = document.getElementById('exFinal');
    let q = document.getElementById('trabFinal');
    let exFinal=parseInt(exFinal.value);
    let trabFinal=parseInt(trabFinal.value);
    let pExFinal = exFinal*0.3;
    let pTrabFinal = trabFinal*0.15;
    let notaFinal = (promedio + pExFinal + pTrabFinal);
    console.log(notaFinal);
    return notaFinal;
}

nfinal();




