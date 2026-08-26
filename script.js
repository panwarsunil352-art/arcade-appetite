const WA = "917500697342";

const menu = [
  // category, name, price, image

  ["Tea & Coffee","Hot Coffee",89,""],
  ["Tea & Coffee","Black Americano Coffee",59,""],
  ["Tea & Coffee","Asam Tea",119,""],
  ["Tea & Coffee","Hibiscus Tea",89,""],
  ["Tea & Coffee","Green Tea",89,""],
  ["Tea & Coffee","Ginger Lemon Tea",79,""],
  ["Tea & Coffee","Masala Milk Tea",49,""],

  ["Mocktail","Black Crunet Mojito",149,""],
  ["Mocktail","Orange Passion Frappe",119,""],
  ["Mocktail","Auckland Fizz",119,""],
  ["Mocktail","Spicy Mango Panna",119,""],
  ["Mocktail","Marry From Hill",239,""],
  ["Mocktail","Italian Smooch",119,""],
  ["Mocktail","Purple Haze",119,""],

  ["Iced Tea & Lemonades","Anti Oxidant Iced Tea",149,""],
  ["Iced Tea & Lemonades","Peach Iced Tea",119,""],
  ["Iced Tea & Lemonades","Lemon Iced Tea",119,""],
  ["Iced Tea & Lemonades","Thai Iced Tea",119,""],
  ["Iced Tea & Lemonades","Mango Ginger Lemonade",119,""],
  ["Iced Tea & Lemonades","Fresh Lime Soda",119,""],
  ["Iced Tea & Lemonades","Pineapple Passion Fruit Lemonade",119,""],
  ["Iced Tea & Lemonades","Cucumber Mint Lemonade",119,""],

  ["Shakes","Dark Chocolate Brownie",null,""],
  ["Shakes","Chocolate Shake",209,""],
  ["Shakes","Banana Nutella Shake",209,""],
  ["Shakes","Dates & Coffee Shake",209,""],
  ["Shakes","Strawberry Cheesecake Shake",239,""],
  ["Shakes","Oreo Shake",209,""],
  ["Shakes","Mango Shake",209,""],
  ["Shakes","Vanilla Banana Shake",209,""],

  ["Cold Coffee","Classic Cold Brew",149,""],
  ["Cold Coffee","Cold Coffee Regular",149,""],
  ["Cold Coffee","Cinnamon Cold Coffee",149,""],

  // STARTER VEG
  ["Starter Veg","Spring Roll",149,""],
  ["Starter Veg","Cheese Nuggets",169,""],
  ["Starter Veg","French Fries",139,"assets/french-fries.jpeg"],
  ["Starter Veg","French Masala",159,""],
  ["Starter Veg","Chilli Potato",169,"assets/chilli-potato.jpeg"],
  ["Starter Veg","Honey Chilli Potato",179,"assets/honey-chilli-potato.jpeg"],
  ["Starter Veg","Paneer Pakoda",179,""],
  ["Starter Veg","Potato Veggies",149,""],

  // STARTER NON-VEG
  ["Starter Non-Veg","Chicken Sheekh Kebab",199,""],
  ["Starter Non-Veg","Chicken Lollypop",239,"assets/chicken-lollypop.jpeg"],
  ["Starter Non-Veg","Chicken Nuggets",179,""],
  ["Starter Non-Veg","Crispy Honey",239,""],
  ["Starter Non-Veg","Mashala Omelete",79,""],
  ["Starter Non-Veg","Cheese Omelete",99,""],
  ["Starter Non-Veg","Toste Omelet",89,""],
  ["Starter Non-Veg","Cheese Omelet with Toste",119,""],

  // RICE & NOODLES NON-VEG
  ["Rice & Noodles Non-Veg","Chilli Chicken",249,""],
  ["Rice & Noodles Non-Veg","Egg Fried Rice",169,"assets/egg-fried-rice.jpeg"],
  ["Rice & Noodles Non-Veg","Egg Noodles",159,"assets/egg-noodles.jpeg"],
  ["Rice & Noodles Non-Veg","Chicken Fried Rice",199,"assets/chicken-fried-rice.jpeg"],
  ["Rice & Noodles Non-Veg","Chicken Manchurian",239,"assets/chicken-manchurian.jpeg"],
  ["Rice & Noodles Non-Veg","Chicken Noodles",199,"assets/chicken-noodles.jpeg"],
  ["Rice & Noodles Non-Veg","Sweet & Salted Crispy Chicken",239,""],
  ["Rice & Noodles Non-Veg","Butter Maggi",119,""],
  ["Rice & Noodles Non-Veg","Plain Maggi",69,""],
  ["Rice & Noodles Non-Veg","Cheese Maggi",79,""],
  ["Rice & Noodles Non-Veg","Chicken Maggi",139,""],
  ["Rice & Noodles Non-Veg","Egg Maggi",119,""],
  ["Rice & Noodles Non-Veg","Masala Maggi With Veggie",99,""],

  // RICE & NOODLES VEG
  ["Rice & Noodles Veg","Chilly Garlic Noodles",179,"assets/garlic-noodles.jpeg"],
  ["Rice & Noodles Veg","Chilly Mushroom",189,"assets/chilli-mushroom.jpeg"],
  ["Rice & Noodles Veg","Chilli Paneer",199,""],
  ["Rice & Noodles Veg","Veg Fried Rice",169,""],
  ["Rice & Noodles Veg","Paneer Fried Rice",189,""],
  ["Rice & Noodles Veg","Jeera Rice",129,""],
  ["Rice & Noodles Veg","Veg Manchurian",219,""],
  ["Rice & Noodles Veg","Veg Noodles",169,""],
  ["Rice & Noodles Veg","Paneer Noodles",189,""],

  // TANDOORI VEG
  ["Tandoori Veg Starter","Malai Soya Chaap","169/249",""],
  ["Tandoori Veg Starter","Hara Bhara Kebab","159/229",""],
  ["Tandoori Veg Starter","Tandoori Paneer Tikka","229/339",""],
  ["Tandoori Veg Starter","Lesuni Paneer Tikka","229/339",""],
  ["Tandoori Veg Starter","Malai Mushroom","239/349",""],
  ["Tandoori Veg Starter","Achari Mushroom","239/349",""],
  ["Tandoori Veg Starter","Tandoori Mushroom","239/349",""],
  ["Tandoori Veg Starter","Paneer Hariyali Tikka","229/339",""],

  // TANDOORI NON-VEG
  ["Tandoori Non-Veg Starter","Tandoori Chicken","249/449",""],
  ["Tandoori Non-Veg Starter","Afghani Chicken","269/459",""],
  ["Tandoori Non-Veg Starter","Chicken Achari Tikka","279/399",""],
  ["Tandoori Non-Veg Starter","Tandoori Fish Tikka","289/499",""],
  ["Tandoori Non-Veg Starter","Fish Achari Tikka","299/499",""],
  ["Tandoori Non-Veg Starter","Chicken Malai Tikka","279/399",""],
  ["Tandoori Non-Veg Starter","Earani Murg","279/399",""],
  ["Tandoori Non-Veg Starter","Chicken Sheekh Kebab","279/399",""]
];

const categories = ["All", ...new Set(menu.map(x => x[0]))];

let activeCategory = "All";
let cart = {};

function money(p) {
  return p == null ? "Ask" : "₹" + p;
}

function renderChips() {
  document.getElementById("chips").innerHTML = categories.map(c =>
    `<button class="chip ${c === activeCategory ? "active" : ""}" 
      onclick="setCategory('${c.replaceAll("'", "\\'")}')">${c}</button>`
  ).join("");
}

function renderMenu() {
  const q = document.getElementById("menuSearch").value.toLowerCase().trim();

  const items = menu.filter(x =>
    (activeCategory === "All" || x[0] === activeCategory) &&
    (!q ||
      x[1].toLowerCase().includes(q) ||
      x[0].toLowerCase().includes(q))
  );

  const grid = document.getElementById("menuGrid");

  grid.innerHTML = items.map(x => {

    const [cat, name, price, img] = x;

    const priceText = money(price);
    const addable = typeof price === "number";

    const imageHTML = img
      ? `<img class="food-img" loading="lazy" src="${img}" alt="${name}">`
      : `<div class="food-img no-image">
           <span>🍽️</span>
           <small>Photo coming soon</small>
         </div>`;

    return `
      <article class="menu-card">

        ${imageHTML}

        <div class="menu-info">

          <div class="menu-top">
            <div class="menu-name">${name}</div>
            <div class="price">${priceText}</div>
          </div>

          <div class="cat">
            ${cat}
            ${cat.includes("Tandoori") && typeof price === "string"
              ? " • Half / Full"
              : ""}
          </div>

          <button class="add-btn"
            onclick="${
              addable
                ? `addToCart('${name.replaceAll("'", "\\'")}',${price})`
                : `askPrice('${name.replaceAll("'", "\\'")}')`
            }">
            ${addable ? "＋ Add to order" : "Ask price on WhatsApp"}
          </button>

        </div>

      </article>
    `;

  }).join("") ||
  `<div style="grid-column:1/-1;color:#7e8795;padding:40px 0">
    No matching items found.
  </div>`;
}

function setCategory(c) {
  activeCategory = c;
  renderChips();
  renderMenu();
}

document.getElementById("menuSearch").addEventListener("input", renderMenu);

function addToCart(name, price) {
  if (!cart[name]) cart[name] = { price, qty: 0 };

  cart[name].qty++;

  renderCart();
  toggleCart(true);
}

function changeQty(name, delta) {
  if (!cart[name]) return;

  cart[name].qty += delta;

  if (cart[name].qty <= 0) {
    delete cart[name];
  }

  renderCart();
}

function renderCart() {
  const entries = Object.entries(cart);

  const count = entries.reduce(
    (s, [, v]) => s + v.qty,
    0
  );

  const total = entries.reduce(
    (s, [, v]) => s + v.qty * v.price,
    0
  );

  document.getElementById("cartCount").textContent =
    `${count} item${count === 1 ? "" : "s"}`;

  document.getElementById("floatingCount").textContent = count;

  document.getElementById("cartTotal").textContent = "₹" + total;

  document.getElementById("cartItems").innerHTML =
    entries.length
      ? entries.map(([name, v]) => `
        <div class="cart-row">

          <div class="cart-row-main">
            <div class="cart-row-name">${name}</div>
            <div class="cart-row-price">₹${v.price} each</div>
          </div>

          <div class="qty">
            <button onclick="changeQty('${name.replaceAll("'", "\\'")}',-1)">−</button>
            <b>${v.qty}</b>
            <button onclick="changeQty('${name.replaceAll("'", "\\'")}',1)">+</button>
          </div>

        </div>
      `).join("")
      : `
        <div class="empty-cart">
          Your cart is empty.
          <br>
          <span>Add something delicious.</span>
        </div>
      `;
}

function toggleCart(open) {
  document.getElementById("cart")
    .classList.toggle("open", open);

  document.getElementById("cartBackdrop")
    .classList.toggle("open", open);
}

function askPrice(name) {
  const text =
    `Hi Arcade Appetite, please tell me the current price and availability of ${name}.`;

  window.open(
    `https://wa.me/${WA}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

function bookGame(game) {
  const text =
    `Hi Arcade Appetite, I want to enquire about ${game}. Please tell me availability and the applicable current offer price.`;

  window.open(
    `https://wa.me/${WA}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

function sendOrder() {
  const entries = Object.entries(cart);

  if (!entries.length) {
    alert("Please add at least one item to your order.");
    return;
  }

  const lines = entries.map(
    ([name, v]) =>
      `• ${name} × ${v.qty} = ₹${v.qty * v.price}`
  );

  const total = entries.reduce(
    (s, [, v]) => s + v.qty * v.price,
    0
  );

  const text =
    `Hi Arcade Appetite!%0A%0AI'd like to order/enquire about:%0A` +
    `${encodeURIComponent(lines.join("\n"))}` +
    `%0A%0AEstimated subtotal: ₹${total}` +
    `%0A%0APlease confirm availability, final total and pickup/delivery details.`;

  window.open(
    `https://wa.me/${WA}?text=${text}`,
    "_blank"
  );
}

renderChips();
renderMenu();
renderCart();
