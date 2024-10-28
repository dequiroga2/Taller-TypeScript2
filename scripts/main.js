import { series } from './data.js';
console.log(series);
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("promedio");
var cardTitle = document.querySelector(".card-body h4");
var cardText = document.querySelector(".card-body .card-text");
var cardLink = document.querySelector(".card-body .link");
var cardImg = document.querySelector(".card-img-top");
mostrarSeries(series);
mostrarPromedio(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td><a href=\"#\" class=\"serie-link\" data-id=\"").concat(serie.id, "\">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
    var links = document.querySelectorAll('.serie-link');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var serieId = event.target.getAttribute('data-id');
            mostrarSerieEnCard(Number(serieId));
        });
    });
}
function mostrarPromedio(series) {
    var trElement = document.createElement("tr");
    var suma = 0;
    var promedio = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        var temporadas = serie.temporadas;
        suma += temporadas;
        promedio++;
    }
    promedio = suma / series.length;
    trElement.innerHTML = "<td><b>Promedio de temporadas</b></td><td>".concat(promedio, "</td>");
    promedioTable.appendChild(trElement);
}
function mostrarSerieEnCard(id) {
    var serie = series[id - 1];
    if (serie) {
        cardTitle.textContent = serie.nombre;
        cardText.textContent = serie.descripcion;
        cardLink.innerHTML = "<a href=\"".concat(serie.url, "\" target=\"_blank\">Ir al link</a>");
        cardImg.src = serie.imagen;
        cardImg.alt = serie.nombre;
    }
}
