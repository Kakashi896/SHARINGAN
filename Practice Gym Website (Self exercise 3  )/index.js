// Get the popup and close button elements
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-popup');
const openButton = document.getElementById('open-popup');

// Add event listener to open button to open popup
openButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Add event listener to close button to close popup
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Add event listener to login button to submit form
document.getElementById('login-button').addEventListener('click', (e) => {
  e.preventDefault();
  // Add your login logic here
  console.log('Login button clicked!');
});