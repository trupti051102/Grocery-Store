// Select the table element
const table = document.querySelector('#product-table');

// Add a click event listener to each table row
table.querySelectorAll('tr').forEach(row => {
  row.addEventListener('click', () => {
    // Get the product name and price from the clicked row
    const name = row.cells[0].textContent;
    const price = parseFloat(row.cells[1].textContent.replace('$', ''));

    // Update the total price in the shopping cart
    const cartTotal = document.querySelector('#cart-total');
    const currentTotal = parseFloat(cartTotal.textContent.replace('$', ''));
    cartTotal.textContent = `$${(currentTotal + price).toFixed(2)}`;

    // Add the product name to the shopping cart
    const cartList = document.querySelector('#cart-list');
    const item = document.createElement('li');
    item.textContent = name;
    cartList.appendChild(item);
  });
});
