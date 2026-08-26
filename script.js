const WA = "917500697342";

const menu = [
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

  ["Starter Veg","Spring Roll",149,""],
  ["Starter Veg","Cheese Nuggets",169,""],
  ["Starter Veg","French Fries",139,"assets/french-fries.jpeg"],
  ["Starter Veg","French Masala",159,""],
  ["Starter Veg","Chilli Potato",169,"assets/chilli-potato.jpeg"],
  ["Starter Veg","Honey Chilli Potato",179,"assets/honey-chilli-potato.jpeg"],
  ["Starter Veg","Paneer Pakoda",179,""],
  ["Starter Veg","Potato Veggies",149,""],

  ["Starter Non-Veg","Chicken Sheekh Kebab",199,""],
  ["Starter Non-Veg","Chicken Lollypop",239,"assets/chicken-lollypop.jpeg"],
  ["Starter Non-Veg","Chicken Nuggets",179,""],
  ["Starter Non-Veg","Crispy Honey",239,""],
  ["Starter Non-Veg","Mashala Omelete",79,""],
  ["Starter Non-Veg","Cheese Omelete",99,""],
  ["Starter Non-Veg","Toste Omelet",89,""],
  ["Starter Non-Veg","Cheese Omelet with Toste",119,""],

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

  ["Rice & Noodles Veg","Chilly Garlic Noodles",179,"assets/garlic-noodles.jpeg"],
  ["Rice & Noodles Veg","Chilly Mushroom",189,"assets/chilli-mushroom.jpeg"],
  ["Rice & Noodles Veg","Chilli Paneer",199,""],
  ["Rice & Noodles Veg","Veg Fried Rice",169,""],
  ["Rice & Noodles Veg","Paneer Fried Rice",189,""],
  ["Rice & Noodles Veg","Jeera Rice",129,""],
  ["Rice & Noodles Veg","Veg Manchurian",219,""],
  ["Rice & Noodles Veg","Veg Noodles",169,""],
  ["Rice & Noodles Veg","Paneer Noodles",189,""],

  /* HALF / FULL VEG */
  ["Tandoori Veg Starter","Malai Soya Chaap","169/249",""],
  ["Tandoori Veg Starter","Hara Bhara Kebab","159/229",""],
  ["Tandoori Veg Starter","Tandoori Paneer Tikka","229/339",""],
  ["Tandoori Veg Starter","Lesuni Paneer Tikka","229/339",""],
  ["Tandoori Veg Starter","Malai Mushroom","239/349",""],
  ["Tandoori Veg Starter","Achari Mushroom","239/349",""],
  ["Tandoori Veg Starter","Tandoori Mushroom","239/349",""],
  ["Tandoori Veg Starter","Paneer Hariyali Tikka","229/339",""],

  /* HALF / FULL NON-VEG */
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

const $ = id => document.getElementById(id);


/* =========================
   BASIC HELPERS
========================= */

function money(price) {
  if (price == null) return "Ask";
  return `₹${price}`;
}

function safeText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escAttr(value) {
  return String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll("'", "\\'");
}


/* =========================
   HALF / FULL
========================= */

function isHalfFull(price) {
  return (
    typeof price === "string" &&
    /^\d+\s*\/\s*\d+$/.test(price)
  );
}

function getHalfFullPrices(price) {
  const parts = price.split("/");

  return {
    half: Number(parts[0].trim()),
    full: Number(parts[1].trim())
  };
}


/* =========================
   CATEGORY BUTTONS
========================= */

function renderChips() {
  const chips = $("chips");

  if (!chips) return;

  chips.innerHTML = categories
    .map(category => `
      <button
        class="chip ${category === activeCategory ? "active" : ""}"
        onclick="setCategory('${escAttr(category)}')">
        ${safeText(category)}
      </button>
    `)
    .join("");
}


/* =========================
   MENU
========================= */

function renderMenu() {
  const search = $("menuSearch");
  const grid = $("menuGrid");

  if (!grid) return;

  const query = search
    ? search.value.toLowerCase().trim()
    : "";

  const items = menu.filter(item => {
    const category = item[0];
    const name = item[1];

    const categoryMatch =
      activeCategory === "All" ||
      category === activeCategory;

    const searchMatch =
      !query ||
      name.toLowerCase().includes(query) ||
      category.toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  grid.innerHTML =
    items.map(item => {

      const [category, name, price, image] = item;

      const halfFull = isHalfFull(price);
      const addable = typeof price === "number";

      let imageHTML = "";

      if (image) {

        imageHTML = `
          <img
            class="food-img"
            loading="lazy"
            src="${image}"
            alt="${safeText(name)}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          >

          <div class="food-img no-image" style="display:none;">
            <span>🍽️</span>
            <small>Photo coming soon</small>
          </div>
        `;

      } else {

        imageHTML = `
          <div class="food-img no-image">
            <span>🍽️</span>
            <small>Photo coming soon</small>
          </div>
        `;
      }


      /* =========================
         HALF / FULL ITEM
      ========================= */

      if (halfFull) {

        const { half, full } =
          getHalfFullPrices(price);

        return `
          <article class="menu-card">

            ${imageHTML}

            <div class="menu-info">

              <div class="menu-top">

                <div class="menu-name">
                  ${safeText(name)}
                </div>

                <div class="price">
                  ₹${half}/₹${full}
                </div>

              </div>

              <div class="cat">
                ${safeText(category)} • Half / Full
              </div>

              <div class="size-label">
                Choose size
              </div>

              <div class="size-buttons">

                <button
                  class="size-btn"
                  onclick="addToCart('${escAttr(name)}','Half',${half})">

                  Half · ₹${half}

                </button>

                <button
                  class="size-btn"
                  onclick="addToCart('${escAttr(name)}','Full',${full})">

                  Full · ₹${full}

                </button>

              </div>

            </div>

          </article>
        `;

      }


      /* =========================
         NORMAL ITEM
      ========================= */

      return `
        <article class="menu-card">

          ${imageHTML}

          <div class="menu-info">

            <div class="menu-top">

              <div class="menu-name">
                ${safeText(name)}
              </div>

              <div class="price">
                ${money(price)}
              </div>

            </div>

            <div class="cat">
              ${safeText(category)}
            </div>

            <button
              class="add-btn"
              onclick="${
                addable
                  ? `addToCart('${escAttr(name)}','',${price})`
                  : `askPrice('${escAttr(name)}')`
              }">

              ${
                addable
                  ? "＋ Add to order"
                  : "Ask price on WhatsApp"
              }

            </button>

          </div>

        </article>
      `;

    }).join("") ||

    `
      <div
        style="
          grid-column:1/-1;
          padding:40px 0;
          text-align:center;
        ">

        No matching items found.

      </div>
    `;
}


/* =========================
   CATEGORY SELECT
========================= */

function setCategory(category) {

  activeCategory = category;

  renderChips();
  renderMenu();

}


/* =========================
   CART KEY
========================= */

function cartKey(name, size) {

  return `${name}__${size || "single"}`;

}


/* =========================
   ADD TO CART
========================= */

function addToCart(name, size, price) {

  const key = cartKey(name, size);

  if (!cart[key]) {

    cart[key] = {
      name: name,
      size: size || "",
      price: Number(price),
      qty: 0
    };

  }

  cart[key].qty++;

  renderCart();

  toggleCart(true);

}


/* =========================
   CHANGE QUANTITY
========================= */

function changeQty(key, delta) {

  if (!cart[key]) return;

  cart[key].qty += delta;

  if (cart[key].qty <= 0) {

    delete cart[key];

  }

  renderCart();

}


/* =========================
   RENDER CART
========================= */

function renderCart() {

  const entries = Object.entries(cart);

  const count =
    entries.reduce(
      (sum, [, item]) =>
        sum + item.qty,
      0
    );

  const total =
    entries.reduce(
      (sum, [, item]) =>
        sum + item.qty * item.price,
      0
    );


  if ($("cartCount")) {

    $("cartCount").textContent =
      `${count} item${count === 1 ? "" : "s"}`;

  }


  if ($("floatingCount")) {

    $("floatingCount").textContent =
      count;

  }


  if ($("cartTotal")) {

    $("cartTotal").textContent =
      "₹" + total;

  }


  if ($("cartItems")) {

    $("cartItems").innerHTML =
      entries.length

      ?

      entries.map(([key, item]) => `

        <div class="cart-row">

          <div class="cart-row-main">

            <div class="cart-row-name">

              ${safeText(item.name)}

              ${
                item.size
                  ? `<small>(${safeText(item.size)})</small>`
                  : ""
              }

            </div>

            <div class="cart-row-price">

              ₹${item.price} each

            </div>

          </div>


          <div class="qty">

            <button
              onclick="changeQty('${escAttr(key)}',-1)">
              −
            </button>

            <b>${item.qty}</b>

            <button
              onclick="changeQty('${escAttr(key)}',1)">
              +
            </button>

          </div>

        </div>

      `).join("")

      :

      `
        <div class="empty-cart">

          Your cart is empty.

          <br>

          <span>
            Add something delicious.
          </span>

        </div>
      `;

  }

}


/* =========================
   OPEN / CLOSE CART
========================= */

function toggleCart(open) {

  if ($("cart")) {

    $("cart").classList.toggle(
      "open",
      open
    );

  }

  if ($("cartBackdrop")) {

    $("cartBackdrop").classList.toggle(
      "open",
      open
    );

  }

}


/* =========================
   WHATSAPP PRICE
========================= */

function askPrice(name) {

  const text =
    `Hi Arcade Appetite, please tell me the current price and availability of ${name}.`;

  window.open(
    `https://wa.me/${WA}?text=${encodeURIComponent(text)}`,
    "_blank"
  );

}


/* =========================
   GAME BOOKING
========================= */

function bookGame(game) {

  const text =
    `Hi Arcade Appetite, I want to enquire about ${game}. Please tell me availability and the applicable current offer price.`;

  window.open(
    `https://wa.me/${WA}?text=${encodeURIComponent(text)}`,
    "_blank"
  );

}


/* =========================
   SEND ORDER TO WHATSAPP
========================= */

function sendOrder() {

  const entries =
    Object.values(cart);

  if (!entries.length) {

    alert(
      "Please add at least one item to your order."
    );

    return;

  }


  const lines =
    entries.map(item => {

      const sizeText =
        item.size
          ? ` (${item.size})`
          : "";

      return (
        `• ${item.name}${sizeText} × ${item.qty} = ₹${item.qty * item.price}`
      );

    });


  const total =
    entries.reduce(
      (sum, item) =>
        sum + item.qty * item.price,
      0
    );


  const text =
    `Hi Arcade Appetite!\n\n` +
    `I'd like to order:\n` +
    `${lines.join("\n")}` +
    `\n\nEstimated subtotal: ₹${total}` +
    `\n\nPlease confirm availability, final total and pickup/delivery details.`;


  window.open(
    `https://wa.me/${WA}?text=${encodeURIComponent(text)}`,
    "_blank"
  );

}


/* =========================
   PAGE LOAD
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    if ($("menuSearch")) {

      $("menuSearch")
        .addEventListener(
          "input",
          renderMenu
        );

    }

    renderChips();
    renderMenu();
    renderCart();

  }
);
