// Select the vegetable list
const vegList = document.querySelector('#vegetables');

// Create an array of vegetables
const vegetables = [
  { name: 'Carrots', price: 1.99, image: 'carrots.jpg' },
  { name: 'Broccoli', price: 2.49, image: 'broccoli.jpg' },
  { name: 'Tomatoes', price: 3.99, image: 'tomatoes.jpg' },
  { name: 'Potatoes', price: 0.99, image: 'potatoes.jpg' },
  { name: 'Lettuce', price: 1.49, image: 'lettuce.jpg' },
  { name: 'Onions', price: 2.99, image: 'onions.jpg' },
];

// Loop through the vegetables array and create a list item for each one
vegetables.forEach(vegetable => {
  // Create the list item element
  const listItem = document.createElement('li');

  // Create the vegetable image element
  const img = document.createElement('img');
  img.src = `images/${vegetable.image}`;
  img.alt = vegetable.name;
  listItem.appendChild(img);

  // Create the vegetable name element
  const name = document.createElement('h3');
  name.textContent = vegetable.name;
  listItem.appendChild(name);

  // Create the vegetable price element
  const price = document.createElement('p');
  price.textContent = `$${vegetable.price.toFixed(2)}`;
  listItem.appendChild(price);

  // Add the list item to the vegetable list
  vegList.appendChild(listItem);
});
