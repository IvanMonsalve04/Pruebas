

var carro=0;
function contarvotos(){

if(carro>=0){
    carro=carro+1;
    }

  //document.getElementById("contador").innerHTML = carro;
    
}
var moto=0;
function contarvotos2(){
 
    
if(moto>=0){
    moto=moto+1;
    }

    //document.getElementById("contador2").innerHTML = moto;
  
    
}

google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(DibujarGrafica);
    google.charts.setOnLoadCallback(DibujarGrafica2);

    function generarData(){
       
   
    let tablados = new google.visualization.DataTable();


    tablados.addColumn('string','vehiculo');    
    tablados.addColumn('number', 'votos');
    tablados.addRows([
        ['Carro', moto],
        ['Moto',carro],
       
    ])
    return tablados;
        
}
function DibujarGrafica(){
    let data = generarData();
    
    var opciones ={'title': 'Votacion Vehiculo','width':500,'height':400};
    var grafico = new google.visualization.PieChart(document.getElementById("contenedor"));
   
    grafico.draw(data,opciones);


}
function DibujarGrafica2(){
    let data = generarData();
    
    var opciones ={'title': 'Votacion Vehiculo','width':500,'height':400};
    var grafico = new google.visualization.LineChart(document.getElementById("curve"));
    grafico.draw(data,opciones);   
}





