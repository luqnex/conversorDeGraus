converterParaFarenheit.addEventListener('click', () => {
    let celsius = document.querySelector("#celsius").value
    let farenheit = celsius * (9/5) + 32

    document.querySelector('#resultadoFareheint').innerHTML = `${farenheit.toFixed(2)}° F`
})

converterParaCelsius.addEventListener('click', () => {
    let farenheint = document.querySelector('#farenheit').value
    let celsius = (farenheint - 32) * 5/9

    document.querySelector('#resultadoCelsius').innerHTML = `${celsius.toFixed(2)} ° C`
})

