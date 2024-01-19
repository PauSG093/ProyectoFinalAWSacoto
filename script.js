
function validarFormulario() {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const diaLlegada = document.getElementById('diaLlegada').value;
    const horaLlegada = document.getElementById('horaLlegada').value;
    const noches = document.getElementById('noches').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;

    if (!nombreCompleto || !diaLlegada || !horaLlegada || !noches || !correo || !telefono) {
        alert('Por favor, completa todos los campos, son obligatorios.');
        return false; 
    }
    submitForm();
    return true;
}
function validateEmail(){  
	var correo = document.getElementById('user-email');
	
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if( validEmail.test(correo.value) ){
		alert('Email is valid, continue with form submission');
		return true;
	}else{
		alert('Email is invalid, skip form submission');
		return false;
	}
} 


document.getElementById('reservarBtn').addEventListener('click', function() {
    if (validarFormulario()) {
        submitForm();
    }
});

let contadorReservas = 0;

function submitForm() {
   
    contadorReservas++;
    
    updateReservasCounter();
}

function updateReservasCounter() {
    const contadorElement = document.getElementById('contadorReservas');
    contadorElement.textContent = `${contadorReservas} Reservas realizadas`;
}
