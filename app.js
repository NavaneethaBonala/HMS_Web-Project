const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '0000', // Replace with your MySQL password
    database: 'hms'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {

    connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Error retrieving data from database');
            return;
        }

        console.log(results); // Log the results array to inspect its structure

        if (results.length > 0) {
            const userType = results[0].Usertype;
            if (userType === 'Admin') {
                res.sendFile(path.join(__dirname, '/public', 'admin.html'));
            } else if (userType === 'Doctor') {
                res.sendFile(path.join(__dirname, '/public', 'doctor.html'));
            } else if (userType === 'Patient') {
                res.sendFile(path.join(__dirname, '/public', 'patient.html'));
            } else {
                res.send('Invalid usertype');
            }
        } else {
            res.send('Invalid username or password');
        }
    });
});


// Middleware for parsing JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
});

// Route to fetch patient data
app.get('/patient', (req, res) => {
    // Perform database query to fetch patient data
    connection.query('SELECT * FROM patient', (error, results, fields) => {
        if (error) {
            console.error('Error fetching patient:', error);
            res.status(500).send('Error fetching patient');
            return;
        }
        res.json(results);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
});
// Route to fetch doctor data
app.get('/doctor', (req, res) => {
    // Perform database query to fetch patient data
    connection.query('SELECT * FROM doctor', (error, results, fields) => {
        if (error) {
            console.error('Error fetching doctor:', error);
            res.status(500).send('Error fetching doctor');
            return;
        }
        res.json(results);
    });
});

// Route to fetch user data
app.get('/user', (req, res) => {
    // Perform database query to fetch patient data
    connection.query('SELECT * FROM user', (error, results, fields) => {
        if (error) {
            console.error('Error fetching user:', error);
            res.status(500).send('Error fetching user');
            return;
        }
        res.json(results);
    });
});


// Route to fetch patient data
app.get('/medicalhistory', (req, res) => {
    // Perform database query to fetch patient data
    connection.query('SELECT * FROM medicalhistory', (error, results, fields) => {
        if (error) {
            console.error('Error fetching medicalhistory:', error);
            res.status(500).send('Error fetching medicalhistory');
            return;
        }
        res.json(results);
    });
});


// Route to fetch patient data
app.get('/appointment', (req, res) => {
    // Perform database query to fetch patient data
    connection.query('SELECT * FROM appointment', (error, results, fields) => {
        if (error) {
            console.error('Error fetching appointment:', error);
            res.status(500).send('Error fetching appointment');
            return;
        }
        res.json(results);
    });
});


app.get('/viewappointments', (req, res) => {
    // Handle the request for "/viewappointments" URL
    // This is where you would serve content related to viewing appointments
});

app.get('/medicalhistory', (req, res) => {
    // Handle the request for "/medicalhistory" URL
    // This is where you would serve content related to medical history
});

app.get('/updatedetails', (req, res) => {
    // Handle the request for "/updatedetails" URL
    // This is where you would serve content related to updating details
});

app.get('/changepassword', (req, res) => {
    // Handle the request for "/changepassword" URL
    // This is where you would serve content related to changing password
});


// *************************************************************************************************
// *************************************************************************************************
// insert data 

// Route to handle form submission
app.post('/addPatient', async (req, res) => {
    try {
        const { P_firstname, P_lastname, age, P_gender, BloodGroup, P_address, phnumber } = req.body;

        // Retrieve the highest existing patient ID from the database
        connection.query('SELECT count(P_id) AS maxId FROM patient', async (error, results, fields) => {
            if (error) {
                console.error('Error retrieving max patient ID:', error);
                res.status(500).send('Error retrieving max patient ID');
                return;
            }

            // Calculate the next patient ID
            const maxId = results[0].maxId;
            const nextId = (maxId === null) ? 1 : maxId + 1;
            // const paddedId = nextId.toString().padStart(2, '0');
            if (nextId > 9) {
                const P_id = `P0${nextId}`;
            }
            else {
                const P_id = `P${nextId}`;
            }

            // Insert patient details into the database
            connection.query(
                'INSERT INTO patient (P_id, P_firstname, P_lastname, age, P_gender, BloodGroup, P_address, phnumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [P_id, P_firstname, P_lastname, age, P_gender, BloodGroup, P_address, phnumber],
                (insertError, insertResults, insertFields) => {
                    if (insertError) {
                        console.error('Error inserting patient details:', insertError);
                        res.status(500).send('Error inserting patient details');
                        return;
                    }
                    res.send(`Patient details inserted successfully. Patient ID: ${P_id}`);
                }
            );
        });
    } catch (error) {
        console.error('Error inserting patient details:', error);
        res.status(500).send('Error inserting patient details');
    }
});


//Add Doctor detailsto database
// Route to handle form submission
app.post('/addDoctor', async (req, res) => {
    try {
        const { D_firstname, D_lastname, D_gender, Specializaton, Email } = req.body;

        // Retrieve the highest existing patient ID from the database
        connection.query('SELECT count(D_id) AS maxId FROM doctor', async (error, results, fields) => {
            if (error) {
                console.error('Error retrieving max Doctor ID:', error);
                res.status(500).send('Error retrieving max Doctor ID');
                return;
            }

            // Calculate the next patient ID
            const maxId = results[0].maxId;
            const nextId = (maxId === null) ? 1 : maxId + 1;
            // const paddedId = nextId.toString().padStart(2, '0');
            if (maxId <= 9) {
                let D_id = `D0${nextId}`;
            }
            else {
                D_id = `D${nextId}`;
            }

            // Insert patient details into the database
            connection.query(
                'INSERT INTO doctor (D_id,D_firstname, D_lastname, D_gender, Specializaton, Email) VALUES (?,?, ?, ?, ?, ?)',
                [D_id, D_firstname, D_lastname, D_gender, Specializaton, Email],
                (insertError, insertResults, insertFields) => {
                    if (insertError) {
                        console.error('Error inserting doctor details:', insertError);
                        res.status(500).send('Error inserting doctor details');
                        return;
                    }
                    res.send(`Doctor details inserted successfully. doctor ID: ${D_id}`);
                }
            );
        });
    } catch (error) {
        console.error('Error inserting doctor details:', error);
        res.status(500).send('Error inserting doctor details');
    }
});

// **************************************************************************************

app.get('/searchPatient', async (req, res) => {
    try {
        const patientId = req.query.patientId;

        // Search for the patient in the database based on the provided ID
        connection.query(
            'SELECT * FROM patient WHERE P_id = ?',
            [patientId],
            (error, results, fields) => {
                if (error) {
                    console.error('Error searching for patient:', error);
                    res.status(500).json({ error: 'Error searching for patient' });
                    return;
                }

                if (results.length > 0) {
                    const patient = results[0]; // Extract patient details

                    // Send patient details as JSON
                    res.json(patient);

                } else {
                    res.status(404).json({ error: 'Patient not found' });
                }
            }
        );
    } catch (error) {
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'Error searching for patient' });
    }
});



// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
