document.addEventListener("DOMContentLoaded", function() {

    fetch('/datos')
        .then(response => response.json())
        .then(data => {
            const tablaEquipos = document.getElementById('tablaEquipos');

            data.forEach(equipo => {
                const row = document.createElement('tr');
                row.classList.add("hover:bg-blue-200", "bg-blue-100");
                
                row.innerHTML = `
                    <td class="px-2 py-2 border border-gray-500">${equipo.nombre}</td>
                    <td class="px-2 py-2 border border-gray-500">${equipo.fundacion}</td>
                    <td class="px-2 py-2 border border-gray-500">${equipo.apodo}</td>
                    <td class="px-2 py-2 border border-gray-500">${equipo.estadio}</td>
                `;
                
                tablaEquipos.querySelector('tbody').appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});