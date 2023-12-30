let container = document.getElementById("container");
let loadBtn = document.getElementById("loadBtn");
let search = document.getElementById("search");

let page = 1;
let limit = 12;

const renderData = async () => {
  const res = await fetch(
    `https://65745c66f941bda3f2afa6af.mockapi.io/products?page=${page}&limit=${limit}`
  );
  const data = await res.json();
  db = data;
  db.forEach((item) => {
    let card = document.createElement("div");
    card.className = "col-lg-3 card";
    card.innerHTML = `
        <img src="${item.image}" alt=""> 
        <div class="favAndName">
        <h6>${item.name}</h6><i class="fa-solid fa-heart"></i>
        </div>
        <button onclick="addToBasket(${item.id})">$ ${item.price}</button>
        `;
    container.append(card);
  });
  page++;
};

loadBtn.addEventListener("click", renderData);
renderData();

const searchByName = async (name) => {
  const res = await fetch(
    `https://65745c66f941bda3f2afa6af.mockapi.io/products`
  );
  const data = await res.json();
  let flteddata = data.filter((item) => item.name.toLowerCase().includes(name));
  container.innerHTML = " ";
  flteddata.forEach((item) => {
    let card = document.createElement("div");
    card.className = "col-lg-3 card";
    card.innerHTML = `
        <img src="${item.image}" alt="">
        <h6>${item.name}</h6>
        <button onclick="addToBasket(${item.id})">$ ${item.price}</button>
        `;
    container.append(card);
  });
};

search.addEventListener("input", (e) => {
  searchByName(e.target.value);
});

function addToBasket(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
}



let sortBtn = document.getElementById("sortBtn");


const filterData = async () => {
  const res = await fetch(
    `https://65745c66f941bda3f2afa6af.mockapi.io/products`
  );
  const data = await res.json();
  let sorteddata = data.sort((a, b) => a.price.localeCompare(b.price))
  container.innerHTML = " ";
  sorteddata.forEach((item) => {
    let card = document.createElement("div");
    card.className = "col-lg-3 card";
    card.innerHTML = `
        <img src="${item.image}" alt="">
        <h6>${item.name}</h6>
        <button onclick="addToBasket(${item.id})">$ ${item.price}</button>
        `;
    container.append(card);
  });
};

sortBtn.addEventListener("click", filterData);
