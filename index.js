for (let x=0; x < 5; x++ ){
    if (x==2)
    continue;
    console.log(x);
        
    }
    
    let a = 10;
    a = a + 5;
    a += 5;
    
    let x = 10;
    x **= 2; 
    console.log(x);
    
    // TIPO FECHA 
    const fecha = new Date();
    console.log(fecha);

    function myFunction(p1, p2){
        return p1 * p2;
    }

    console.log(myFunction(5,10));
    console.log(myFunction());
    console.log(myFunction(8));
    console.log(myFunction);

    //function otraFuncion(a,b){
      //  return a * b;
//}

    let otraFuncion2 = (a,b) => {
        return a * b
    }

    console.log(otraFuncion2(4,80));

    //Funcion autoejecutable
    //Funcion anonima
    //(function(){
      //  console.log('Esta es una funcion anonima autoejecutable')
    //})();

    (()=>console.log('Esta es una funcion anonima autoejecutable'));

    let alumno = {
        nombre : 'Ximena',
        apellido : 'Perez',
        matricula : 80693,
        nombreCompleto : () =>{
            return this.nombre + ' ' +this.apellido;
        }
    } 

    console.log(alumno.nombreCompleto);