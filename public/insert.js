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
function toggleForm2() {
    const formContainer = document.getElementById('searchPid');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    showData('searchPid')
}
