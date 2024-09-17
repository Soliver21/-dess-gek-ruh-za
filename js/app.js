const products = [
  {
    id: 1,
    name: "Choco Bliss",
    price: 1200,
    picture: "choco_bliss.jpg",
    description: "A smooth and creamy milk chocolate with a hint of vanilla. Perfect for chocolate lovers!",
  },
  {
    id: 2,
    name: "Candy Delight",
    price: 800,
    picture: "Candy Delight.jpg",
    description: "Delicious fruity candies that melt in your mouth. Great for kids and adults alike!",
  },
  {
    id: 3,
    name: "Bonbon Royale",
    price: 3000,
    picture: "Bonbon Royale.jpg",
    description: "Premium bonbons filled with exotic flavors. A luxurious treat for special occasions.",
  },
  {
    id: 4,
    name: "Hazel Dream",
    price: 1500,
    picture: "Hazel Dream.jpg",
    description: "Rich dark chocolate with crunchy hazelnut pieces. Perfect for those who enjoy a nutty flavor!",
  },
  {
    id: 5,
    name: "Lemon Chew",
    price: 500,
    picture: "Lemon Chew.jpg",
    description: "Tangy lemon chews that pack a punch of citrusy flavor. Refreshing and sweet!",
  },
  {
    id: 6,
    name: "Caramel Treat",
    price: 2000,
    picture: "Caramel Treat.jpg",
    description: "Smooth caramel covered in milk chocolate. A delightful combination of sweetness and richness.",
  },
  {
    id: 7,
    name: "Berry Blast",
    price: 1000,
    picture: "Berry Blast.jpg",
    description: "Mixed berry-flavored candies that burst with juicy flavors in every bite. Great for snacking!",
  },
  {
    id: 8,
    name: "Truffle Heaven",
    price: 4000,
    picture: "Truffle Heaven.jpg",
    description: "Decadent chocolate truffles filled with smooth ganache. Perfect for gifting or indulging.",
  },
  {
    id: 9,
    name: "Minty Fresh",
    price: 700,
    picture: "Minty Fresh.jpg",
    description: "Refreshing mint candies that leave a cool sensation in your mouth. Great after meals!",
  },
  {
    id: 10,
    name: "Crunchy Delight",
    price: 2500,
    picture: "Crunchy Delight.jpg",
    description: "A delightful chocolate bar with crispy rice pieces for an extra crunch in every bite.",
  },
  {
    id: 11,
    name: "Vanilla Bonbon",
    price: 3500,
    picture: "Vanilla Bonbon.jpg",
    description: "Soft and creamy vanilla bonbons with a touch of white chocolate. A delicate and delicious treat.",
  },
  {
    id: 12,
    name: "Orange Twist",
    price: 600,
    picture: "Orange Twist.jpg",
    description: "Zesty orange-flavored candies that are sweet, tangy, and perfect for a citrus kick.",
  }
];

const makeProducts = (products) => {
  return products.map((product) => `
    <div class="product-card" id="${product.id}">
      <img src="img/${product.picture}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Ár: ${product.price}</p>
      <button class="add-to-cart-btn">Kosárba</button>
    </div>
  `);
};

const renderContent = (products) => {
  const renderProduct = document.querySelector(".products");
  renderProduct.innerHTML = "";
  renderProduct.innerHTML = makeProducts(products).join('');
};
/*hambi*/
document.getElementById("hambi").addEventListener("click", () => {
  if (document.querySelector(".hamburger-menu").style.marginLeft == "-500px") {
    document.querySelector(".hamburger-menu").style.marginLeft = "0px";
    document.getElementById("hambi").classList.remove("bi-list")
    document.getElementById("hambi").classList.add("bi-caret-left")
  }
  else{
    document.querySelector(".hamburger-menu").style.marginLeft = "-500px"
    document.getElementById("hambi").classList.remove("bi-caret-left")
    document.getElementById("hambi").classList.add("bi-list")
  }
})
/*cart*/
document.getElementById("cart").addEventListener("click", () => {
  if (document.querySelector(".cart").style.marginRight == "-500px") {
    document.querySelector(".cart").style.marginRight = "0px";
  }
  else{
    document.querySelector(".cart").style.marginRight = "-500px"
  }
})

/**********************************/
const getMinInputValue = () => {
  const value = parseFloat(document.getElementById("min-price").value);
  return isNaN(value) ? 0 : value;
};

const getMaxInputValue = () => {
  const value = parseFloat(document.getElementById("max-price").value);
  return isNaN(value) ? 0 : value;
};

const filterOptions = () => {
  const minPrice = getMinInputValue();
  const maxPrice = getMaxInputValue();
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

const showResult = () => {
  const filteredList = filterOptions();
  renderContent(filteredList);
};

document.addEventListener("DOMContentLoaded", () => {
  renderContent(products);
  const filterBtn = document.getElementById("filter-btn");
  filterBtn.addEventListener("click", showResult);
}); 
