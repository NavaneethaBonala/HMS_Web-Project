function toggleForm() {
    const formContainer = document.getElementById('patientForm');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    showData('patientForm')
}
function toggleForm1() {
    const formContainer = document.getElementById('DoctorForm');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    showData('DoctorForm')
}
