
//OBJETO CORTINAS
class Cortina{
    constructor(tipoCortina=" ", tipoTela=" ", color=" ", mecanismo=" ", ancho=1, alto=1){
        this.tipoCortina=tipoCortina
        this.tipoTela=tipoTela
        this.color=color
        this.mecanismo=mecanismo
        this.ancho=ancho
        this.alto=alto
        this.superficie=((this.ancho*this.alto)/10000) //pasa cm2 a m2 (ya que el costo se calcula con un valor por m2)
        this.presupuesto=((this.superficie*costoMetro)*iva)
    }
}

//VARIABLES
let tipoCortina, tipoTela, color, mecanismo, ancho, alto, continua, superficie, presupuesto, eliminCortina
const costoMetro = 17500
const iva = 1.21

//ARRAY
const arrayCortinas = [];

//SOLICITUD DE DATOS
do{
    //VALIDACION TIPO CORTINA
    do {
        tipoCortina=prompt("Ingrese el tipo de cortina que desea: Roller / Bandas verticales / Duo").toLocaleLowerCase()
    }while(tipoCortina.length==0 || (tipoCortina != "roller" && tipoCortina != "bandas verticales" && tipoCortina !="duo"))    
    //VALIDACION TIPO TELA
    do{
        tipoTela=prompt("Ingrese el tipo de tela que desea: Screen, Decorativa, Black Out").toLocaleLowerCase()
    }while(tipoTela.length==0 || (tipoTela != "screen" && tipoTela != "decorativa" && tipoTela !="black out"))
    //VALIDACION COLOR
    do{
        color=prompt("ingrese color deseado: Blanco / Negro / Gris / Beige").toLocaleLowerCase()
    }while(color.length==0 || (color != "blanco" && color != "negro" && color !="gris" && color != "beige"))
    //VALIDACION MECANISMO
    do{    
        mecanismo=prompt("Ingrese tipo de mecanismo: Manual / Motorizado").toLocaleLowerCase()
    }while(mecanismo.length==0 ||(mecanismo != "manual" && mecanismo != "motorizado"))
    //VALIDACION ALTO/ANCHO
    do{
        ancho=parseInt(prompt("Ingresa el ancho de tu cortina en cm"))
        alto=parseInt(prompt("Ingresa el alto de tu cortina en cm"))
        if (ancho<50 || ancho>300 || alto<50 || alto>300){
            alert("Las medidas deben tener un mínimo de 50cm y un máximo de 300cm. Por favor ingrese nuevamemte los valores")
        }else if(isNaN(ancho) || isNaN(alto)){
            alert("Por favor ingrese un valor válido")
        }
    }while((ancho<50 || alto<50 || ancho>300 || alto>300)||(isNaN(ancho) || isNaN(alto)))

    arrayCortinas.push(new Cortina(tipoCortina, tipoTela, color, mecanismo, ancho, alto))

    continua=prompt("¿Desea cotizar otra cortina? Si/No").toLowerCase()

}while(continua != "no" || continua.length==0)


//VER DETALLE DE PRESUPUESTO EN CONSOLA
do{
    verPresupuesto = parseInt(prompt("Podrá ver el detalle de su presupuesto en la consola ingresando 1"))
    if(verPresupuesto===1){
        //console.log(arrayCortinas)
        arrayCortinas.forEach((arrayCortinas)=>{console.log(arrayCortinas)})
    }
}while(verPresupuesto != 1)

//VER PRESUPUESTO TOTAL
do{
    verTotal = parseInt(prompt("Para ver el monto total de su presupuesto Ingrese 2"))
    if(verTotal==2){
        const resultadoMap=arrayCortinas.map((presupuesto)=>"$"+ presupuesto.presupuesto)
        console.log(resultadoMap)
        const total=arrayCortinas.reduce((suma, montos)=>suma+montos.presupuesto, 0)
        console.log(`El monto total de su presupuesto es de $${total}`)
    }
}while(verTotal !==2)


//ELIMINAR CORTINA
do{
    eliminCortina = prompt(`¿Desea eliminar cortina ingresada? 
    1- Si desea eliminar cortina
    2- Si desea continuar y gestionar compra`)
    if(eliminCortina ==1){
        let cortinaAEliminar=prompt("Ingresa el tipo de cortina que desea eliminar").toLowerCase()
        alert(`Se eliminará la cortina ${cortinaAEliminar} de tu presupuesto`)
        arrayCortinas.forEach((cortina)=>{
            if(cortina.tipoCortina==cortinaAEliminar){
                let indice = arrayCortinas.indexOf(cortinaAEliminar)
                arrayCortinas.splice(indice, 1)
            }
        })

        arrayCortinas.forEach((arrayCortinas)=>{console.log(arrayCortinas)})
        
    }else{
        alert("Muchas gracias por tu consulta")
    }

}while(eliminCortina.length==0)








