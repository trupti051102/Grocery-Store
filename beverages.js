// Define an array of beverage items
const beverages = [
    {
      name: "Green Tea",
      image: "https://via.placeholder.com/200x200",
      description: "Healthy green tea from Japan"
    },
    {
      name: "Coffee",
      image: "https://via.placeholder.com/200x200",
      description: "Rich and bold coffee from Brazil"
    },
    {
      name: "Orange Juice",
      image: "https://via.placeholder.com/200x200",
      description: "Freshly squeezed orange juice"
    }
  ];
  
  // Get the main content section element
  const main = document.querySelector("main");
  
  // Loop through the beverage items array and create HTML for each item
  beverages.forEach(beverage => {
    // Create a div element to hold the beverage item
    const div = document.createElement("div");
    div.classList.add("item");
  
    // Create an image element for the beverage item
    const img = document.createElement("img");
    img.src = beverage.image;
    img.alt = beverage.name;
  
    // Create a heading element for the beverage name
    const heading = document.createElement("h3");
    heading.textContent = beverage.name;
  
    // Create a paragraph element for the beverage description
    const paragraph = document.createElement("p");
    paragraph.textContent = beverage.description;
  
    // Add the image, heading, and paragraph to the div element
    div.appendChild(img);
    div.appendChild(heading);
    div.appendChild(paragraph);
  
    // Add the div element to the main content section
    main.appendChild(div);
  });
  