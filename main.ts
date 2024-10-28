import {Serie} from './serie.js';
import {series} from './data.js';

console.log(series)

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTable: HTMLElement = document.getElementById("promedio")!;
let cardTitle: HTMLElement = document.querySelector(".card-body h4")!;
let cardText: HTMLElement = document.querySelector(".card-body .card-text")!;
let cardLink: HTMLElement = document.querySelector(".card-body .link")!;
let cardImg: HTMLImageElement = document.querySelector(".card-img-top")!;

mostrarSeries(series);
mostrarPromedio(series);

function mostrarSeries(series: Serie[]):void{
    let seriesTbody: HTMLElement = document.createElement("tbody");

    for(let serie of series)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td>${serie.id}</td>
        <td><a href="#" class="serie-link" data-id="${serie.id}">${serie.nombre}</a></td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);

    let links = document.querySelectorAll('.serie-link');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let serieId = (event.target as HTMLElement).getAttribute('data-id');
            mostrarSerieEnCard(Number(serieId));
        });
    });
}

function mostrarPromedio(series: Serie[]):void{
    let trElement:HTMLElement = document.createElement("tr");
    let suma:number = 0;
    let promedio:number = 0;
    for(let serie of series)
    {
        let temporadas:number = serie.temporadas;
        suma+=temporadas;
        promedio++;
    }
    promedio=suma/series.length;

    trElement.innerHTML = `<td><b>Promedio de temporadas</b></td><td>${promedio}</td>`;
    promedioTable.appendChild(trElement);
}

function mostrarSerieEnCard(id: number): void {
    let serie = series[id-1]
    if (serie) {
        cardTitle.textContent = serie.nombre;
        cardText.textContent = serie.descripcion;
        cardLink.innerHTML = `<a href="${serie.url}" target="_blank">Ir al link</a>`;
        cardImg.src = serie.imagen;
        cardImg.alt = serie.nombre;
    }
}
