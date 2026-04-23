const bottleData = [
  {
    name: "Original",
    size: "700 ml",
    abv: "40%",
    price: "€39,95",
    image: "bottles/1.png",
    btnColor: "#8a8a8a",
    description: "The clean signature bottle. Crisp, smooth, and direct with a premium finish made for chilled pours, classic serves, and unapologetic nights."
  },
  {
    name: "Citrus",
    size: "700 ml",
    abv: "40%",
    price: "€41,95",
    image: "bottles/2.png",
    btnColor: "#c9a145",
    description: "Bright citrus character layered over a smooth vodka base. Fresh, sharp, and made for long drinks, summer cocktails, and cold highballs."
  },
  {
    name: "Wild Berry",
    size: "700 ml",
    abv: "40%",
    price: "€41,95",
    image: "bottles/3.png",
    btnColor: "#7f4ad0",
    description: "A darker fruit profile with vivid berry notes and a round finish. Bold enough to stand alone, smooth enough for premium mixed drinks."
  },
  {
    name: "Vanilla",
    size: "700 ml",
    abv: "40%",
    price: "€41,95",
    image: "bottles/4.png",
    btnColor: "#b89c64",
    description: "Soft vanilla warmth with a balanced sweetness and elegant body. Ideal for dessert cocktails, creamy serves, and late-night pours."
  },
  {
    name: "Caramel",
    size: "700 ml",
    abv: "40%",
    price: "€41,95",
    image: "bottles/5.png",
    btnColor: "#cf8732",
    description: "Rich caramel flavor with a deeper, smoother finish. Built for indulgent cocktails, espresso pairings, and darker flavor profiles."
  },
  {
    name: "Vodka Rikke Bombs Original",
    size: "6x40 cl",
    abv: "15%",
    price: "€24,95",
    image: "bottles/6.png",
    btnColor: "#8a8a8a",
    description: "A ready-to-party mixed pack built for energy, cold shots, and loud nights. Smooth original flavor with a lighter 15% profile."
  },
  {
    name: "Vodka Rikke Bombs Citrus",
    size: "6x40 cl",
    abv: "15%",
    price: "€24,95",
    image: "bottles/7.png",
    btnColor: "#c9a145",
    description: "Citrus-forward bomb pack with bright attitude and a lighter kick. Easy to serve, easy to chill, and made for fast-paced party moments."
  },
  {
    name: "Vodka Rikke Bombs Wild Berry",
    size: "6x40 cl",
    abv: "15%",
    price: "€24,95",
    image: "bottles/8.png",
    btnColor: "#7f4ad0",
    description: "Wild berry bomb pack with juicy fruit notes and a sweet-sharp finish. Made for group nights, pre-drinks, and bold flavor fans."
  },
  {
    name: "Vodka Rikke Bombs Vanilla",
    size: "6x40 cl",
    abv: "15%",
    price: "€24,95",
    image: "bottles/9.png",
    btnColor: "#b89c64",
    description: "Vanilla bomb pack with a smoother, softer profile and easy-drinking character. Great chilled and served for quick rounds."
  },
  {
    name: "Vodka Rikke Bombs Caramel",
    size: "6x40 cl",
    abv: "15%",
    price: "€24,95",
    image: "bottles/10.png",
    btnColor: "#cf8732",
    description: "Caramel bomb pack with a richer taste and softer finish. A sweeter party option designed for cold serving and fast sharing."
  }
];
const merchData = [
  {
    name: "Signature Hoodie",
    price: "€59,95",
    image: "merch/1.1.png",
    description: "Premium hoodie with a soft brushed interior, relaxed fit, and bold Vodka Fucking Rikke attitude.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Pink", hex: "#e7a6c0", image: "merch/1.1.png" },
      { name: "White", hex: "#f3f3f3", image: "merch/1.2.png" },
      { name: "Navy", hex: "#1f2a44", image: "merch/1.3.png" },
      { name: "Black", hex: "#111111", image: "merch/1.4.png" }
    ],
    btnColor: "#cda24f"
  },
  {
    name: "Signature Bikini",
    price: "€39,95",
    image: "merch/2.1.png",
    description: "Stylish bikini with a flattering fit and bold attitude for beach days and poolside vibes.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Pink", hex: "#e7a6c0", image: "merch/2.1.png" },
      { name: "Blue", hex: "#4a90e2", image: "merch/2.2.png" },
      { name: "Lavender", hex: "#b57edc", image: "merch/2.3.png" }
    ],
    btnColor: "#cda24f"
  },
  {
    name: "Signature Beer Bong",
    price: "€19,95",
    image: "merch/3.1.png",
    description: "Classic party essential. Durable beer bong designed for fast pours and maximum chaos.",
    sizes: [],
    colors: [
      { name: "Pink", hex: "#e7a6c0", image: "merch/3.1.png" },
      { name: "White", hex: "#f3f3f3", image: "merch/3.2.png" }
    ],
    btnColor: "#cda24f"
  },
  {
    name: "Signature Vacuum Cleaner",
    price: "€129,95",
    image: "merch/4.1.png",
    description: "Clean in style. High-performance vacuum cleaner with signature attitude and sleek design.",
    sizes: [],
    colors: [
      { name: "Pink", hex: "#e7a6c0", image: "merch/4.1.png" },
      { name: "White", hex: "#f3f3f3", image: "merch/4.2.png" }
    ],
    btnColor: "#cda24f"
  },
{
    name: "Signature Автомат Калашникова AK-47",
    price: "€2.499,95",
    image: "merch/5.1.png",
    description: "Full-auto chaos machine with custom Vodka Fucking Rikke engravings, reinforced pink accents, and built-in bottle opener on the stock. Because why not.",
    sizes: [],
    colors: [
      { name: "Tactical Pink", hex: "#e7a6c0", image: "merch/5.1.png" },
      { name: "Matte Black", hex: "#111111", image: "merch/5.2.png" }
    ],
    btnColor: "#cda24f"
  },
  {
    name: "Signature Panzer T-72",
    price: "€89.999.999,95",
    image: "merch/6.1.png",
    description: "Heavy battle tank with a fully stocked vodka bar inside, spinning disco ball on the turret, and speakers blasting 2000s eurodance. Runs on premium gasoline and pure vibes.",
    sizes: [],
    colors: [
      { name: "Hot Pink", hex: "#e7a6c0", image: "merch/6.1.png" },
      { name: "Champagne Gold", hex: "#d4af37", image: "merch/6.2.png" },
      { name: "Chrome", hex: "#f3f3f3", image: "merch/6.3.png" }
    ],
    btnColor: "#cda24f"
  },
{
  name: "Signature Rikke Nuclear Submarine XL",
  price: "€149.999.995,95",
  image: "merch/7.1.png",
  description: "Ocean-dominating deep-sea luxury with integrated Vodka Rikke Command Deck (holds 6 premium shots). Silently cruises beneath the waves, launches torpedoes, drones, or pure intimidation. Dive responsibly.",
  sizes: [],
  colors: [
    { name: "Electric Pink", hex: "#e7a6c0", image: "merch/7.1.png" },
    { name: "Tactical Navy", hex: "#1f2a44", image: "merch/7.2.png" }
  ],
  btnColor: "#cda24f"
},
  {
    name: "Signature Toaster",
    price: "€149,95",
    image: "merch/8.1.png",
    description: "High-voltage party toaster that launches your bread like missiles. Burns 'Vodka Fucking Rikke' into every slice. Comes with a built-in shot dispenser and emergency fire alarm (optional).",
    sizes: [],
    colors: [
      { name: "Tactical Pink", hex: "#e7a6c0", image: "merch/8.1.png" },
      { name: "Matte Black", hex: "#111111", image: "merch/8.2.png" },
      { name: "Champagne Gold", hex: "#f3f3f3", image: "merch/8.3.png" }
    ],
    btnColor: "#cda24f"
  },
];

const cocktailData = [
  {
    name: "Citrus Storm",
    desc: "A bright and sharp long drink with citrus vodka, soda, and fresh lemon.",
    recipe: ["5 cl Citrus Vodka", "10 cl soda water", "1 cl lemon juice", "Lemon garnish"],
    glass: "highball",
    color: "rgba(234,190,62,0.75)"
  },
  {
    name: "Berry Vice",
    desc: "A dark-fruit serve with wild berry vodka and a smooth tart finish.",
    recipe: ["5 cl Wild Berry Vodka", "2 cl cranberry", "1 cl lime juice", "Fresh berries"],
    glass: "martini",
    color: "rgba(136,76,212,0.72)"
  },
  {
    name: "Vanilla Velvet",
    desc: "Soft vanilla tones with creamy texture and elegant aftertaste.",
    recipe: ["5 cl Vanilla Vodka", "2 cl cream liqueur", "1 cl vanilla syrup", "Nutmeg dust"],
    glass: "coupe",
    color: "rgba(201,179,138,0.72)"
  },
  {
    name: "Caramel Heat",
    desc: "Rich caramel character balanced by espresso and a dry finish.",
    recipe: ["5 cl Caramel Vodka", "3 cl espresso", "1 cl coffee liqueur", "Caramel shard"],
    glass: "martini",
    color: "rgba(207,135,50,0.78)"
  },
  {
    name: "Original Ice",
    desc: "The clean signature serve. Cold, direct, and crystal clear.",
    recipe: ["5 cl Original Vodka", "Ice", "Twist of lemon", "Serve extra cold"],
    glass: "highball",
    color: "rgba(220,220,220,0.42)"
  },
  {
    name: "Night Coupe",
    desc: "A smooth evening cocktail made for slow sipping and late hours.",
    recipe: ["4 cl Original Vodka", "2 cl elderflower", "1 cl dry vermouth", "Citrus mist"],
    glass: "coupe",
    color: "rgba(190,190,190,0.48)"
  }
];

let cartCount = Number(localStorage.getItem("cartCount") || 0);

function updateCartDisplay() {
  const cartCountEls = document.querySelectorAll(".cart-count");
  cartCountEls.forEach(el => {
    el.textContent = `(${cartCount})`;
  });
}

function addToCart(name, button) {
  cartCount++;
  localStorage.setItem("cartCount", String(cartCount));
  updateCartDisplay();

  const oldText = button.textContent;
  button.textContent = `${name} Added`;
  setTimeout(() => {
    button.textContent = oldText;
  }, 900);
}

function createBottleCard(product) {
  const card = document.createElement("article");
  card.className = "product";
  card.dataset.flavor = product.name;
  card.dataset.size = product.size;

  card.innerHTML = `
    <div class="product-visual">
      <img src="${product.image}" alt="${product.name} bottle">
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-size">${product.size}</div>
      <div class="product-price">${product.price}</div>
      <button class="add-btn" style="--btn-color:${product.btnColor}">
        Add To Cart
      </button>
    </div>
  `;

  card.addEventListener("click", () => openProductPopup(product));

  const btn = card.querySelector(".add-btn");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(product.name, btn);
  });

  return card;
}

function createMerchCard(item) {
  const card = document.createElement("article");
  card.className = "merch-card";
  card.style.cursor = "pointer";

  card.innerHTML = `
    <div class="merch-visual">
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="merch-info">
      <h3 class="merch-name">${item.name}</h3>
      <div class="merch-price">${item.price}</div>
      <button class="add-btn" style="--btn-color:${item.btnColor || "#cda24f"}; margin-top:14px;">
        View Product
      </button>
    </div>
  `;

  card.addEventListener("click", () => openMerchPopup(item));

  const btn = card.querySelector(".add-btn");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    openMerchPopup(item);
  });

  return card;
}

function createCocktailCard(item) {
  const card = document.createElement("article");
  card.className = "cocktail-card";

  card.innerHTML = `
    <div class="cocktail-visual">
      <div class="cocktail-glass ${item.glass}" style="--drink-color:${item.color}"></div>
    </div>
    <div class="content-pad">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="recipe">
        ${item.recipe.map(line => `• ${line}`).join("<br>")}
      </div>
    </div>
  `;

  return card;
}

function renderBottles(list) {
  const productsEl = document.getElementById("products");
  if (!productsEl) return;

  productsEl.innerHTML = "";
  list.forEach(item => productsEl.appendChild(createBottleCard(item)));
}

function renderMerch() {
  const merchGridEl = document.getElementById("merchGrid");
  if (!merchGridEl) return;

  merchGridEl.innerHTML = "";
  merchData.forEach(item => merchGridEl.appendChild(createMerchCard(item)));
}

function renderCocktails() {
  const cocktailGridEl = document.getElementById("cocktailGrid");
  if (!cocktailGridEl) return;

  cocktailGridEl.innerHTML = "";
  cocktailData.forEach(item => cocktailGridEl.appendChild(createCocktailCard(item)));
}

function getSelectedValue(name) {
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : "all";
}

function applyBottleFilters() {
  const flavor = getSelectedValue("flavor");
  const size = getSelectedValue("size");

  const filtered = bottleData.filter(product => {
    const flavorMatch = flavor === "all" || product.name === flavor;
    const sizeMatch = size === "all" || product.size === size;
    return flavorMatch && sizeMatch;
  });

  renderBottles(filtered);
}

function initBottleFilters() {
  const flavorInputs = document.querySelectorAll('input[name="flavor"]');
  const sizeInputs = document.querySelectorAll('input[name="size"]');

  if (!flavorInputs.length && !sizeInputs.length) return;

  document.querySelectorAll('input[name="flavor"], input[name="size"]').forEach(input => {
    input.addEventListener("change", applyBottleFilters);
  });

  renderBottles(bottleData);
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (!form || !formMessage) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent = "Message sent successfully in demo mode. Connect this form to a backend to make it real.";
    formMessage.style.color = "#cda24f";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();
  renderMerch();
  renderCocktails();
  initBottleFilters();
  initContactForm();
  ensureProductPopup();
  ensureMerchPopup();

  initReviewsPage();
  initReviewsBottleRotation();
});

function ensureProductPopup() {
  if (document.getElementById("productPopup")) return;

  const popup = document.createElement("div");
  popup.id = "productPopup";
  popup.className = "product-popup";
  popup.innerHTML = `
    <div class="product-popup-backdrop"></div>
    <div class="product-popup-dialog" role="dialog" aria-modal="true" aria-labelledby="productPopupTitle">
      <button class="product-popup-close" aria-label="Close popup">&times;</button>
      <div class="product-popup-content">
        <div class="product-popup-image-wrap">
          <img class="product-popup-image" src="" alt="">
        </div>
        <div class="product-popup-info">
          <div class="product-popup-kicker">Product Details</div>
          <h2 class="product-popup-title" id="productPopupTitle"></h2>
          <div class="product-popup-subtitle"></div>
          <div class="product-popup-price"></div>
          <div class="product-popup-description"></div>
          <div class="product-popup-meta"></div>
          <div class="product-popup-actions">
            <button class="add-btn product-popup-add">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  popup.querySelector(".product-popup-backdrop").addEventListener("click", closeProductPopup);
  popup.querySelector(".product-popup-close").addEventListener("click", closeProductPopup);

  popup.addEventListener("click", (e) => {
    if (e.target === popup) closeProductPopup();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProductPopup();
  });
}

function openProductPopup(product) {
  ensureProductPopup();

  const popup = document.getElementById("productPopup");
  popup.querySelector(".product-popup-image").src = product.image;
  popup.querySelector(".product-popup-image").alt = product.name;
  popup.querySelector(".product-popup-title").textContent = product.name;
  popup.querySelector(".product-popup-subtitle").textContent = `${product.size} / ${product.abv}`;
  popup.querySelector(".product-popup-price").textContent = product.price;
  popup.querySelector(".product-popup-description").textContent = product.description;

  popup.querySelector(".product-popup-meta").innerHTML = `
    <div><strong>Format:</strong> ${product.size}</div>
    <div><strong>Alcohol:</strong> ${product.abv}</div>
    <div><strong>Brand:</strong> Vodka Fucking Rikke</div>
  `;

  const addBtn = popup.querySelector(".product-popup-add");
  addBtn.style.setProperty("--btn-color", product.btnColor);
  addBtn.textContent = "Add To Cart";
  addBtn.onclick = () => addToCart(product.name, addBtn);

  popup.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductPopup() {
  const popup = document.getElementById("productPopup");
  if (!popup) return;
  popup.classList.remove("open");
  document.body.style.overflow = "";
}

function ensureMerchPopup() {
  if (document.getElementById("merchPopup")) return;

  const popup = document.createElement("div");
  popup.id = "merchPopup";
  popup.className = "product-popup";
  popup.innerHTML = `
    <div class="product-popup-backdrop"></div>
    <div class="product-popup-dialog" role="dialog" aria-modal="true" aria-labelledby="merchPopupTitle">
      <button class="product-popup-close" aria-label="Close popup">&times;</button>
      <div class="product-popup-content">
        <div class="product-popup-image-wrap">
          <img class="product-popup-image" src="" alt="">
        </div>
        <div class="product-popup-info">
          <div class="product-popup-kicker">Merch Details</div>
          <h2 class="product-popup-title" id="merchPopupTitle"></h2>
          <div class="product-popup-subtitle"></div>
          <div class="product-popup-price"></div>
          <div class="product-popup-description"></div>

          <div class="merch-popup-options">
            <div class="merch-option-group">
              <label class="merch-option-label">Size</label>
              <div class="merch-size-options"></div>
            </div>

            <div class="merch-option-group">
              <label class="merch-option-label">Color</label>
              <div class="merch-color-options"></div>
            </div>
          </div>

          <div class="product-popup-actions">
            <button class="add-btn merch-popup-add">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  popup.querySelector(".product-popup-backdrop").addEventListener("click", closeMerchPopup);
  popup.querySelector(".product-popup-close").addEventListener("click", closeMerchPopup);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMerchPopup();
  });
}

function openMerchPopup(item) {
  ensureMerchPopup();

  const popup = document.getElementById("merchPopup");
  const popupImage = popup.querySelector(".product-popup-image");

  popupImage.src = item.image;
  popupImage.alt = item.name;

  popup.querySelector(".product-popup-title").textContent = item.name;
  popup.querySelector(".product-popup-subtitle").textContent = "Official Vodka Fucking Rikke Merch";
  popup.querySelector(".product-popup-price").textContent = item.price;
  popup.querySelector(".product-popup-description").textContent = item.description;

  const sizeWrap = popup.querySelector(".merch-size-options");
  const colorWrap = popup.querySelector(".merch-color-options");

  sizeWrap.innerHTML = "";
  colorWrap.innerHTML = "";

  let selectedSize = item.sizes?.[0] || "";
  let selectedColor = item.colors?.[0] || null;

  if (item.sizes && item.sizes.length) {
    item.sizes.forEach((size, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "merch-size-btn";
      btn.textContent = size;

      if (index === 0) btn.classList.add("active");

      btn.addEventListener("click", () => {
        sizeWrap.querySelectorAll(".merch-size-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = size;
      });

      sizeWrap.appendChild(btn);
    });
  }

  if (item.colors && item.colors.length) {
    item.colors.forEach((color, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "merch-color-btn";
      btn.setAttribute("aria-label", color.name);
      btn.title = `${color.name} (${color.hex})`;

      btn.innerHTML = `
        <span class="merch-color-swatch" style="background:${color.hex}"></span>
        <span class="merch-color-text">${color.name}</span>
      `;

      if (index === 0) btn.classList.add("active");

      btn.addEventListener("click", () => {
        colorWrap.querySelectorAll(".merch-color-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedColor = color;

        if (color.image) {
          popupImage.src = color.image;
          popupImage.alt = `${item.name} - ${color.name}`;
        }
      });

      colorWrap.appendChild(btn);
    });
  }

  const addBtn = popup.querySelector(".merch-popup-add");
  addBtn.style.setProperty("--btn-color", item.btnColor || "#cda24f");
  addBtn.textContent = "Add To Cart";
  addBtn.onclick = () => {
    const label = `${item.name}${selectedSize ? ` / ${selectedSize}` : ""}${selectedColor ? ` / ${selectedColor.name}` : ""}`;
    addToCart(label, addBtn);
  };

  popup.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMerchPopup() {
  const popup = document.getElementById("merchPopup");
  if (!popup) return;
  popup.classList.remove("open");
  document.body.style.overflow = "";
}
function renderStars(count) {
  return "★".repeat(count);
}

function createReviewCard(review) {
  const card = document.createElement("article");
  card.className = "review-card";

  card.innerHTML = `
    <img src="${review.avatar}" alt="${review.name}" class="review-avatar">
    <div class="review-body">
      <div class="review-top">
        <div class="review-author-wrap">
          <div class="review-author">${review.name}</div>
          ${review.verified ? `<span class="review-badge">Verified Buyer</span>` : ""}
        </div>
        <div class="review-time">${review.time}</div>
      </div>
      <div class="reviews-stars review-card-stars">${renderStars(review.stars)}</div>
      <p class="review-text">${review.text}</p>
    </div>
  `;

  return card;
}

function initReviewsPage() {
  const reviewsList = document.getElementById("reviewsList");
  const loadMoreBtn = document.getElementById("loadMoreReviewsBtn");

  if (!reviewsList) return;

  if (!window.reviewsData || !Array.isArray(window.reviewsData)) {
    reviewsList.innerHTML = `<p style="color:#cda24f;">No reviews found.</p>`;
    return;
  }

  let visibleCount = 3;

  function renderVisibleReviews() {
    reviewsList.innerHTML = "";

    window.reviewsData.slice(0, visibleCount).forEach(review => {
      reviewsList.appendChild(createReviewCard(review));
    });

    if (loadMoreBtn) {
      loadMoreBtn.style.display =
        visibleCount >= window.reviewsData.length ? "none" : "inline-block";
    }
  }

  renderVisibleReviews();

  if (loadMoreBtn) {
    loadMoreBtn.onclick = () => {
      visibleCount += 3;
      renderVisibleReviews();
    };
  }
}

function initReviewsBottleRotation() {
  const imgA = document.getElementById("reviewsBottleImageA");
  const imgB = document.getElementById("reviewsBottleImageB");
  if (!imgA || !imgB) return;

  const bottleImages = [
    "bottles/1.png",
    "bottles/2.png",
    "bottles/3.png",
    "bottles/4.png",
    "bottles/5.png"
  ];

  let currentIndex = 0;
  let showingA = true;

  imgA.src = bottleImages[0];
  imgB.src = bottleImages[1];

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % bottleImages.length;
    const visibleImg = showingA ? imgA : imgB;
    const hiddenImg = showingA ? imgB : imgA;

    hiddenImg.src = bottleImages[nextIndex];
    hiddenImg.classList.add("active");
    visibleImg.classList.remove("active");

    showingA = !showingA;
    currentIndex = nextIndex;
  }, 6000);
}