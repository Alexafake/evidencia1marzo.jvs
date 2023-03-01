
    var notas;
    var promedio;
    var suma=0;
    var nnotas= parseInt(prompt(" cantidad de notas a promediar"))

    for(i=1; i <= nnotas; i++){

     var notas=parseInt(prompt("plasma tus notas " + i));
        
     suma += notas;
    }

    promedio = suma / nnotas
    
     document.write ("tu promedio es  " + promedio); 
   


