// an express application that shows a item list

const express = require("express");
const app = express();
const fs = require("fs");


const datos = [
    { nombre: 'Boca Juniors', fundacion: '03-04-1905', apodo: 'Xeneize', estadio: 'Alberto J. Armando' },
    { nombre: 'Club Atlético River Plate', fundacion: '25-05-1901', apodo: 'Millonario', estadio: 'Más Monumental' },
    { nombre: 'Club Atlético Independiente', fundacion: '01-01-1905', apodo: 'Diablos Rojos', estadio: 'Libertadores de América' },
    { nombre: 'Racing Club', fundacion: '25-03-1903', apodo: 'La Academia', estadio: 'Presidente Perón' },
    { nombre: 'Club Atlético San Lorenzo de Almagro', fundacion: '01-04-1908', apodo: 'Ciclón', estadio: 'Pedro Bidegain' },
    { nombre: 'Club Estudiantes de La Plata', fundacion: '04-08-1905', apodo: 'Pincharrata', estadio: 'Jorge Luis Hirschi' },
    { nombre: 'Club Atlético Vélez Sarsfield', fundacion: '01-01-1910', apodo: 'El Fortín', estadio: 'José Amalfitani' },
    { nombre: 'Asociación Atlética Argentinos Juniors', fundacion: '15-08-1904', apodo: 'Bichos Colorados', estadio: 'Diego Armando Maradona' },
    { nombre: 'Club Atlético Newells Old Boys', fundacion: '03-11-1903', apodo: 'La Lepra', estadio: 'Marcelo Bielsa' }
];

function generarTabla(datos) {
    let tablaHTML = '<table id="tablaEquipos" class="w-full text-left">';
    tablaHTML += '<thead class="bg-gray-800 text-white"><tr><th class="px-2 py-2 border border-gray-500">Nombre</th><th class="px-2 py-2 border border-gray-500">Fundacion</th><th class="px-2 py-2 border border-gray-500">Apodo</th><th class="px-2 py-2 border border-gray-500">Estadio</th></tr></thead><tbody>';
    datos.forEach(equipo => {
        tablaHTML += `<tr class="hover:bg-blue-200 bg-blue-100">
        <td class="px-2 py-2 border border-gray-400">${equipo.nombre}</td>
        <td class="px-2 py-2 border border-gray-400">${equipo.fundacion}</td>
        <td class="px-2 py-2 border border-gray-400">${equipo.apodo}</td>
        <td class="px-2 py-2 border border-gray-400">${equipo.estadio}</td></tr>`;
    });
    tablaHTML += '</tbody></table>';
    return tablaHTML;
}



app.get("/express", (req, res) => {
    const tableHTML = generarTabla(datos);
    // Leer el archivo index.html y agregar la tabla
    fs.readFile("public/express/index.html", "utf8", (err, html) => {
        if (err) {
            console.error("Error al leer el archivo index.html:", err);
            res.status(500).send("Error interno del servidor");
            return;
        }

         // Insertar la tabla en el HTML
        const modifiedHTML = html.replace(" <!-- TablaEquipos -->", tableHTML);

        // Enviar la respuesta con el HTML modificado
        res.send(modifiedHTML);
    });
});


module.exports=app