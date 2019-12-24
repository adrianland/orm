const GetDatos = async () => {
    const respuesta = await fetch('./ControladorDatos.cfm?method=list')
    const datosJson = await respuesta.json()

    var tabla = document.getElementById('datos')
    datosJson.forEach( function(fila, indice, array) {
        tabla.insertRow(-1).innerHTML = 
           `<td>  ${indice}      </td>
            <td>  ${fila.nombre} </td>
            <td>  ${fila.edad}   </td>
            <td>
            <button type="button" class="btn btn-success">Editar</button>
            <button type="button" class="btn btn-danger" onClick="eliminar(${fila.id} , ${indice})">Eliminar</button> 
            </td>`;
    });

}

const eliminar = async ( id, indice ) => {

    console.log("id: "+id+" indice: "+indice)
    
    /*const respuesta = await fetch( './ControladorDatos.cfm?method=delete&id='+id)
*/
    var table = document.getElementById("datos");
    var rowCount = table.rows.length;
    if(rowCount <= 1)
        alert('No se puede eliminar el encabezado');
    else
        table.deleteRow(indice+1);

}

window.onload = function() {
    GetDatos();
};