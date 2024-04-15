// // View all Users  


// Function to load content dynamically
function loadContentU(page) {
    fetch(`/${page}`)
        .then(response => response.json())
        .then(data => {
            // Generate HTML for the patients table
            const tableHtmlU = generateUserTable(data);
            // Append the table HTML to the content area
            document.getElementById("users-table").innerHTML = tableHtmlU;
            showData('users-table');

        })
        .catch(error => console.error('Error:', error));
}

//   Function to generate HTML for the patients table
  function generateUserTable(data) {
    let tableHtmlU = `<div class="table-title"><h2>Users Information</h2></div>`;

     tableHtmlU +=  `<table class="table ">`;
    // Create table header
    // tableHtml += '<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Gender</th></tr></thead>';

    tableHtmlU += '<thead><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Password</th><th scope="col">Usertype</th></tr></thead>';

    // Create table body with patient data
    tableHtmlU += '<tbody class="table-group-divider">';
    data.forEach((user, index) => {
      tableHtmlU += `<tr><td>${index + 1}</td><td>${user.Username}</td><td>${user.Password}</td><td>${user.Usertype}</td></tr>`;
    });
    tableHtmlU += '</tbody></table>';
    return tableHtmlU;
  }


// ***************************************************************************************************
// // View all Patients  

// Function to load content dynamically
function loadContentP(page) {
    fetch(`/${page}`)
        .then(response => response.json())
        .then(data => {
            // Generate HTML for the patients table
            const tableHtml = generatePatientsTable(data);
            // Append the table HTML to the content area
            document.getElementById("patients-table").innerHTML = tableHtml;
            showData('patients-table');

        })
        .catch(error => console.error('Error:', error));
}

function generatePatientsTable(data) {
    let tableHtml = `<div class="table-title"><h2>Patients Information</h2></div>`;
    tableHtml += `<table class="table ">`;
    // Create table header
    tableHtml += '<thead><tr><th scope="col">P_id</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Age</th><th scope="col">Gender</th><th scope="col">Blood Group</th><th scope="col">Address</th><th scope="col">Phone Number</th></tr></thead>';
    // Create table body with patient data
    tableHtml += '<tbody class="table-group-divider">';
    data.forEach((patient, index) => {
        tableHtml += `<tr><td>${patient.P_id}</td><td>${patient.P_firstname}</td><td>${patient.P_lastname}</td><td>${patient.age}</td><td>${patient.P_gender}</td><td>${patient.BloodGroup}</td><td>${patient.P_address}</td><td>${patient.phnumber}</td></tr>`;
    });
    tableHtml += '</tbody></table>';
    return tableHtml;
}




// **********************************************************************************************
// // View all Doctor  
// Function to load content dynamically
function loadContentD(page) {
    fetch(`/${page}`)
        .then(response => response.json())
        .then(data => {
            // Generate HTML for the patients table
            const tableHtmlD = generateDoctorTable(data);
            // Append the table HTML to the content area
            document.getElementById("doctors-table").innerHTML = tableHtmlD;
            showData('doctors-table');
        })
        .catch(error => console.error('Error:', error));
}


function generateDoctorTable(data) {
    let tableHtmlD = `<div class="table-title"><h2>Doctors Information</h2></div>`;

     tableHtmlD += `<table class="table ">`;
    // Create table header
    tableHtmlD += '  <thead>\n'
    tableHtmlD += '    <tr>\n'
    tableHtmlD += '      <th scope="col">D_id</th>\n'
    tableHtmlD += '      <th scope="col">First Name</th>\n'
    tableHtmlD += '      <th scope="col">Last Name</th>\n'
    tableHtmlD += '      <th scope="col">Gender</th>\n'
    tableHtmlD += '      <th scope="col">Specializaton</th>\n'
    tableHtmlD += '      <th scope="col">Email</th>\n'
    tableHtmlD += '    </tr>\n'
    tableHtmlD += '  </thead>\n'
    
    // Create table body with patient data
    tableHtmlD += '  <tbody class="table-group-divider">\n';
    data.forEach((doctor, index) => {
        tableHtmlD += `    <tr>\n`;
        tableHtmlD += `      <td>${doctor.D_id}</td>\n`;
        tableHtmlD += `      <td>${doctor.D_firstname}</td>\n`;
        tableHtmlD += `      <td>${doctor.D_lastname}</td>\n`;
        tableHtmlD += `      <td>${doctor.D_gender}</td>\n`;
        tableHtmlD += `      <td>${doctor.Specializaton}</td>\n`;
        tableHtmlD += `      <td>${doctor.Email}</td>\n`;
        tableHtmlD += `    </tr>\n`;
    });
    tableHtmlD += '  </tbody>\n</table>';
    return tableHtmlD;
    }
    

    
// *************************************************************************
// View Medical History 

// Function to load content dynamically
function loadContentM(page) {
    fetch(`/${page}`)
        .then(response => response.json())
        .then(data => {
            // Generate HTML for the patients table
            const tableHtmlM = generateMedicalTable(data);
            // Append the table HTML to the content area
            document.getElementById("medical-table").innerHTML = tableHtmlM;
            showData('medical-table');

        })
        .catch(error => console.error('Error:', error));
}



//   Function to generate HTML for the patients table
  function generateMedicalTable(data) {
    let tableHtmlM = `<div class="table-title"><h2>List of Medical Histories</h2></div>`;

    tableHtmlM +=  `<table class="table ">`;
    // Create table header
    // tableHtml += '<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Gender</th></tr></thead>';

    tableHtmlM += '<thead><tr><th scope="col">#</th><th scope="col">M_id</th><th scope="col">app_id</th><th scope="col">D_id</th><th scope="col">P_id</th><th scope="col">Dateofexamination</th><th scope="col">Diagnosis</th><th scope="col">Prescription</th></tr></thead>';

    // Create table body with patient data
    tableHtmlM += '<tbody class="table-group-divider">';
    data.forEach((medical, index) => {
        tableHtmlM += `<tr><td>${index + 1}</td><td>${medical.M_id}</td><td>${medical.app_id}</td><td>${medical.D_id}</td><td>${medical.P_id}</td><td>${medical.Dateofexamination}</td><td>${medical.Diagnosis}</td><td>${medical.Prescription}</td></tr>`;
    });
    tableHtmlM += '</tbody></table>';
    return tableHtmlM;
  }

// ***************************************************************


  
// View appointment History 

// Function to load content dynamically
function loadContentA(page) {
    fetch(`/${page}`)
        .then(response => response.json())
        .then(data => {
            // Generate HTML for the patients table
            const tableHtmlA = generateappointmentTable(data);
            // Append the table HTML to the content area
            document.getElementById("appointment-table").innerHTML = tableHtmlA;
            showData('appointment-table');

        })
        .catch(error => console.error('Error:', error));
}



//   Function to generate HTML for the patients table
  function generateappointmentTable(data) {
    let tableHtmlA = `<div class="table-title"><h2>List of Appointments</h2></div>`;

    tableHtmlA +=  `<table class="table ">`;
    // Create table header
    // tableHtml += '<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Gender</th></tr></thead>';

    tableHtmlA += '<thead><tr><th scope="col">#</th><th scope="col">app_id</th><th scope="col">D_id</th><th scope="col">P_id</th><th scope="col">App_date</th><th scope="col">App_time</th><th scope="col">Status</th></tr></thead>';

    // Create table body with patient data
    tableHtmlA += '<tbody class="table-group-divider">';
    data.forEach((app, index) => {
        tableHtmlA += `<tr><td>${index + 1}</td><td>${app.app_id}</td><td>${app.D_id}</td><td>${app.P_id}</td><td>${app.App_date}</td><td>${app.App_time}</td><td>${app.Status}</td></tr>`;
    });
    tableHtmlA += '</tbody></table>';
    return tableHtmlA;
  }

//   ------------------------------------------------------------------------------------------------

function loadContentSP(page) {
    fetch(`/${page}`)
        .then(response => response.json())
        .then(data => {
           const patient = results[0]; // Extract patient details

                    // Render patient details as HTML
                    const html = `
                        <h2>Patient Details</h2>
                        <p><strong>Patient ID:</strong> ${patient.P_id}</p>
                        <p><strong>First Name:</strong> ${patient.P_firstname}</p>
                        <p><strong>Last Name:</strong> ${patient.P_lastname}</p>
                        <p><strong>Age:</strong> ${patient.age}</p>
                        <p><strong>Gender:</strong> ${patient.P_gender}</p>
                        <p><strong>Blood Group:</strong> ${patient.BloodGroup}</p>
                        <p><strong>Address:</strong> ${patient.P_address}</p>
                        <p><strong>Phone Number:</strong> ${patient.phnumber}</p>
                    `;
                    document.getElementById("searchPatient").innerHTML = html;
            showData('searchPatient');


        })
        .catch(error => console.error('Error:', error));
}



//   Function to generate HTML for the patients table
  function generateappointmentTable(data) {
    let tableHtmlA = `<div class="table-title"><h2>List of Appointments</h2></div>`;

    tableHtmlA +=  `<table class="table ">`;
    // Create table header
    // tableHtml += '<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Gender</th></tr></thead>';

    tableHtmlA += '<thead><tr><th scope="col">#</th><th scope="col">app_id</th><th scope="col">D_id</th><th scope="col">P_id</th><th scope="col">App_date</th><th scope="col">App_time</th><th scope="col">Status</th></tr></thead>';

    // Create table body with patient data
    tableHtmlA += '<tbody class="table-group-divider">';
    data.forEach((app, index) => {
        tableHtmlA += `<tr><td>${index + 1}</td><td>${app.app_id}</td><td>${app.D_id}</td><td>${app.P_id}</td><td>${app.App_date}</td><td>${app.App_time}</td><td>${app.Status}</td></tr>`;
    });
    tableHtmlA += '</tbody></table>';
    return tableHtmlA;
  }

//   ------------------------------------------------------------------------------------------------

    function showData(dataToShow) {
        const tables = ["users-table", "patients-table", "doctors-table", "medical-table", "appointment-table", "patientForm","DoctorForm" ,"searchPatient"];
    
        // Hide all tables initially
        tables.forEach(table => {
            const element = document.getElementById(table);
            element.style.display = 'none';
        });
    
        // Show the specified table or form
        const elementToShow = document.getElementById(dataToShow);
        if (elementToShow) {
            elementToShow.style.display = 'block';
        }
    }
    