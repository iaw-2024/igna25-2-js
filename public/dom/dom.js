// Función para cargar los equipos desde el JSON y añadirlos al DOM
document.addEventListener('DOMContentLoaded', function() {
    fetch('equipos.json') // Asegúrate de colocar la ruta correcta al archivo JSON
        .then(response => response.json())
        .then(equipos => {
            const tablaEquipos = document.querySelector('#equipos tbody');
            equipos.forEach(equipo => {
                const fila = document.createElement('tr');
                fila.className = 'hover:bg-blue-200 bg-blue-100'; // Alternar clases para el efecto de hover podría requerir ajustes
                fila.innerHTML = `
                    <td class="px-2 py-2 border border-gray-400">${equipo.nombre}</td>
                    <td class="px-2 py-2 border border-gray-400">${equipo.fundacion}</td>
                    <td class="px-2 py-2 border border-gray-400">${equipo.apodo}</td>
                    <td class="px-2 py-2 border border-gray-400">${equipo.estadio}</td>
                `;
                tablaEquipos.appendChild(fila);
            });
        })
        .catch(error => console.error('Error al cargar los equipos:', error));
});
