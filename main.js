/* Variables */
const $KEY = "1c2338a8aa5389dcd033f6dc2bfb54fdde97a7810f7d8448dc7d92a2b702fdf7";
let $CRYPTO = document.getElementById("crypto");
let $COIN = document.getElementById("coin");
let button = document.getElementById("btn");
let error = "<h3>Debe Seleccionar ambas opciones para cotizar</h3>";
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let urlCC = "https://www.cryptocompare.com/";
let result = null;

// Call Button
button.addEventListener("click", (e) => {
  e.preventDefault();
  if ($COIN.value == error1.value || $CRYPTO.value === error2.value) {
    errorSelect()
    return;
  } else {
    callApi();
  };
});

function errorSelect() {
  let errRed = "<h4>Debe llenar todos los campos</h4>";
  document.getElementById("container__end").innerHTML = errRed;
}

function callApi() {
  let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${$CRYPTO.value}&tsyms=${$COIN.value}&api_key=${$KEY}`;
  let search = "<h3>Buscando..</h3>";
  document.getElementById("container__end").innerHTML = search;

// CALL API
  axios.get(url)
    .then(response => {
      this.users = response.data;
      let display = response.data.DISPLAY
      let obj = null
      for (prop in display)
        display = display[prop]
      for (prop2 in display)
        obj = display[prop2]

      let price = (obj.PRICE);
      let lastUpdate = obj.LASTUPDATE;
      let change24 = obj.CHANGEPCT24HOUR;
      let maxDaily = obj.HIGH24HOUR;
      let minDaily = obj.LOW24HOUR;
      let icon = obj.IMAGEURL;
      let img = `<img src="${urlCC}${icon}">`;
      let result = `Precio: <h3>${price}</h3><li>Max Diario: ${maxDaily}</li><li>Min Diario: ${minDaily}</li><li>Variacion 24H: %${change24}<li>Actualizado: ${lastUpdate}</li> `;

      document.getElementById("inner-img").innerHTML = img
      document.getElementById("container__end").innerHTML = result
    })
    .catch(e => {
      console.log(e);
    })
}