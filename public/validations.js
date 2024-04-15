const phoneInput = document.getElementById('phone');

    // Add input event listener
    phoneInput.addEventListener('input', function(event) {
        const phoneNumber = event.target.value;
        if (!validatePhoneNumber(phoneNumber)) {
            // If phone number is invalid, display error message
            phoneInput.setCustomValidity('Please enter a valid 10-digit phone number.');
        } else {
            // If phone number is valid, clear error message
            phoneInput.setCustomValidity('');
        }
    });

    // Function to validate phone number
    function validatePhoneNumber(phoneNumber) {
        // Check if phone number contains only digits and has length of 10
        return /^\d{10}$/.test(phoneNumber);
    }