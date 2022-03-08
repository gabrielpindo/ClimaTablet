(function(){
    
    
    let actualizarHora = ()=>{
    
        let fecha = new Date()

        let hora = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds()

        if(hora < 10){
            document.getElementById("hora").textContent = "0" + hora
        }else{
            document.getElementById("hora").textContent = hora
        }

        if(minutos < 10){
            document.getElementById("minutos").textContent = "0" + minutos
        }else{
            document.getElementById("minutos").textContent = minutos
        }

        /* if(segundos < 10){
            document.getElementById("segundos").textContent = "0" + segundos
        }else{
            document.getElementById("segundos").textContent = segundos
        } */

        let semana = ["DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO" ]

        document.getElementById("fechaNumero").textContent = fecha.getDate()
        document.getElementById("fechaDia").textContent = semana[fecha.getDay()]
        
    }

    actualizarHora();
    let intervalo = setInterval(actualizarHora, 1000)

} ())


let obtenerClima = () => {


    fetch('http://api.weatherunlocked.com/api/current/-27.461195,-58.836841?lang=es&app_id=ac80edd6&app_key=f2a445fee77a5c9da8f1c015e78ce1fd')
  .then(response => response.json())
  .then(data => {console.log(data)
        /* document.getElementById("clima").textContent = data.wx_desc */
        document.getElementById("climaCelsius").textContent = data.temp_c + "°"
    });

  
}
obtenerClima()
let intervaloClima = setInterval(obtenerClima, 6000000)