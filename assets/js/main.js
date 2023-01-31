document.addEventListener("DOMContentLoaded", function() {
    
    let boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", agregarTarea);

    function agregarTarea() {
        let input1 = document.getElementById("input1").value;
        let input2 = document.getElementById("input2").value;
        let tabla1 = document.getElementById("tabla1");

        

        if (!input1 || !input2) {
            alert("Por favor, rellene todos los campos");
            return;
        }

        // crear una nueva fila en la tabla
        let nuevaFila = tabla1.insertRow(-1);

        // Celdas para la nueva fila
        let nombreTarea = nuevaFila.insertCell(0);
        let descripcionTarea = nuevaFila.insertCell(1);
        let editarTarea = nuevaFila.insertCell(2);
        let borrarTarea = nuevaFila.insertCell(3);

        //Información de los campos de formulario a las celdas
        nombreTarea.innerHTML = input1;
        descripcionTarea.innerHTML = input2;
        
        // botón para el editar
        let btnEditar = document.createElement("button");
        btnEditar.innerHTML = "Editar"
        editarTarea.appendChild(btnEditar);

        // botón para el borrar
        let btnBorrar = document.createElement("button");
        btnBorrar.innerHTML = "Borrar";
        borrarTarea.appendChild(btnBorrar);
        
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        event.preventDefault();
    
        btnBorrar.addEventListener("click", function(){
            nuevaFila.remove();
        });
   
        btnEditar.addEventListener("click", function(){
            // Editar información de la tabla
            let nombreEditar = prompt("Ingrese nuevo nombre de tarea:", input1);
            let descripcionEditar = prompt("Ingrese nueva descripcion de tarea:", input2);
            
            // Editar información de la tabla
            nombreTarea.innerHTML = nombreEditar;
            descripcionTarea.innerHTML = descripcionEditar;
            
        
            localStorage.setItem("nombreEditado", nombreEditar);
            localStorage.setItem("descripcionEditada", descripcionEditar);
        });
    }
    
})