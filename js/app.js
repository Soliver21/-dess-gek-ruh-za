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
    picture: "candy_delight.jpg",
    description: "Delicious fruity candies that melt in your mouth. Great for kids and adults alike!",
  },
  {
    id: 3,
    name: "Bonbon Royale",
    price: 3000,
    picture: "bonbon_royale.jpg",
    description: "Premium bonbons filled with exotic flavors. A luxurious treat for special occasions.",
  },
  {
    id: 4,
    name: "Hazel Dream",
    price: 1500,
    picture: "hazel_dream.jpg",
    description: "Rich dark chocolate with crunchy hazelnut pieces. Perfect for those who enjoy a nutty flavor!",
  },
  {
    id: 5,
    name: "Lemon Chew",
    price: 500,
    picture: "lemon_chew.jpg",
    description: "Tangy lemon chews that pack a punch of citrusy flavor. Refreshing and sweet!",
  },
  {
    id: 6,
    name: "Caramel Treat",
    price: 2000,
    picture: "caramel_treat.jpg",
    description: "Smooth caramel covered in milk chocolate. A delightful combination of sweetness and richness.",
  },
  {
    id: 7,
    name: "Berry Blast",
    price: 1000,
    picture: "berry_blast.jpg",
    description: "Mixed berry-flavored candies that burst with juicy flavors in every bite. Great for snacking!",
  },
  {
    id: 8,
    name: "Truffle Heaven",
    price: 4000,
    picture: "truffle_heaven.jpg",
    description: "Decadent chocolate truffles filled with smooth ganache. Perfect for gifting or indulging.",
  },
  {
    id: 9,
    name: "Minty Fresh",
    price: 700,
    picture: "minty_fresh.jpg",
    description: "Refreshing mint candies that leave a cool sensation in your mouth. Great after meals!",
  },
  {
    id: 10,
    name: "Crunchy Delight",
    price: 2500,
    picture: "crunchy_delight.jpg",
    description: "A delightful chocolate bar with crispy rice pieces for an extra crunch in every bite.",
  },
  {
    id: 11,
    name: "Vanilla Bonbon",
    price: 3500,
    picture: "vanilla_bonbon.jpg",
    description: "Soft and creamy vanilla bonbons with a touch of white chocolate. A delicate and delicious treat.",
  },
  {
    id: 12,
    name: "Orange Twist",
    price: 600,
    picture: "orange_twist.jpg",
    description: "Zesty orange-flavored candies that are sweet, tangy, and perfect for a citrus kick.",
  }
];

const getMinInputValue = () => {
  return parseFloat(document.getElementById("min-price").value) || 0;
}

const getMaxInputValue = () => {
  return parseFloat(document.getElementById("max-price").value) || Infinity;
}

const filterOptions = () => {
  const minPrice = getMinInputValue();
  const maxPrice = getMaxInputValue();

  return products.filter(product => product.price > minPrice && product.price < maxPrice);
}

const showResult = () => {
  const goodProductList = document.getElementById("good-product-list");
  const filteredList = filterOptions();
  goodProductList.innerHTML = '';
  filteredList.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product.name;
    goodProductList.appendChild(li);
  });
}

const filterBtn = document.getElementById("filter-btn");
filterBtn.addEventListener("click", showResult);
