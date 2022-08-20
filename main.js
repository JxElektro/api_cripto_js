const $KEY = "1c2338a8aa5389dcd033f6dc2bfb54fdde97a7810f7d8448dc7d92a2b702fdf7";
let $CRYPTO = document.getElementById("crypto");
let $COIN = document.getElementById("coin");
let button = document.getElementById("btn")
let error = "<h3>Debe Seleccionar ambas opciones para cotizar</h3>"
let error1 = document.getElementById("error1")
let error2 = document.getElementById("error2")
let UrlCC = "https://www.cryptocompare.com/"


button.addEventListener("click", (e) => { // INICIA EL BOTON
  e.preventDefault()                     // PREVIENE EL REFRESH
  if ($COIN.value == error1.value || $CRYPTO.value === error2.value) { // EVITA CAMPOS VACIOS
    errorSelect() // LLAMA ERROR DE CAMPO VACIO
    return
  } else {    //LLAMA A LA API SI LOS CMAPOS ESTAN LLENOS
    callApi()
  }
});


function errorSelect() {    // FUNCTION DE CAMPOS VACIOS
  console.log("Debe Seleccionar ambas opciones para cotizar");
  // Aqui presentar el mensaje de error
}

function callApi() { // FUNTION DE API


  let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${$CRYPTO.value}&tsyms=${$COIN.value}&api_key=${$KEY}`
  console.log("Buscando..")

  axios.get(url)
    .then(response => {
      this.users = response.data;
      let display = response.data.DISPLAY
      let obj1 = null
      for (prop in display)
        display = display[prop]
      for (prop2 in display)
      obj1 = display[prop2]
      console.log(obj1)
      console.log(obj1.PRICE)
      console.log(obj1.FROMSYMBOL)
      console.log(obj1.TOSYMBOL)
      console.log(obj1.LASTUPDATE)
      
      //let icon = response.data.weather[0].icon
      //let dato = response.data.weather[0].description
      //let result = `<h1>${response.data.name}</h1><li>${response.data.weather[0].description}</li><br><li>Temperatura:<h2>${Math.floor((response.data.main.temp))}°<h2></li><li>Min: ${Math.floor(response.data.main.temp_min)}°</li><li>Max: ${Math.floor(response.data.main.temp_max)}°</li>`
      //let img = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
      //document.getElementById("container").innerHTML = result
      //document.getElementById("inner-skew").innerHTML = img
    })
    .catch(e => {
      // Podemos mostrar los errores en la consola
      console.log(e);
    })

}

/*let busqueda = document.getElementById("search")*/