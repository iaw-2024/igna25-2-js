document.addEventListener('DOMContentLoaded', function() {
    fetch('equipos.json') 
        .then(response => response.json())
        .then(equipos => {
            const tablaEquipos = document.querySelector('#equipos tbody');
            equipos.forEach(equipo => {
                const fila = document.createElement('tr');
                fila.className = 'hover:bg-blue-200 bg-blue-100';
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
