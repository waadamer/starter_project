import { checkForName } from './nameChecker';

// Fake API URL (This is a placeholder and does not actually work)
const serverURL = 'https://fake-api-placeholder.com/analyze';
// Get the form element and add an event listener for the submit event
const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get the URL value from the input field
    const formText = document.getElementById('urlInput').value;

    // Check if the URL is valid
    if (isValidURL(formText)) {
        // Send the URL to the server if it's valid
        sendDataToServer(formText);
    } else {
        // Use checkForName function to validate if the name is a captain name
        const result = checkForName(formText); // Check if it's a valid captain name
        document.getElementById('results').innerText = result;  // Display result in HTML
    }
}

// Function to check if the URL is valid using a regular expression
function isValidURL(url) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

// Function to send data to the server
function sendDataToServer(url) {
    fetch(serverURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Data sent successfully:', data);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

export { handleSubmit }