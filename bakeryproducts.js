// Select elements from the DOM
const breadButton = document.querySelector('#bread-button');
const breadList = document.querySelector('#bread-list');
const pastryButton = document.querySelector('#pastry-button');
const pastryList = document.querySelector('#pastry-list');

// Hide the pastry list by default
pastryList.style.display = 'none';

// Add click event listeners to the buttons
breadButton.addEventListener('click', () => {
  breadList.style.display = 'block';
  pastryList.style.display = 'none';
});

pastryButton.addEventListener('click', () => {
  breadList.style.display = 'none';
  pastryList.style.display = 'block';
});
