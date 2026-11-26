/* =========================================================
   JSON DATA SOURCE (Flexible & Extensible)
   ========================================================= */
const INITIAL_DATA_JSON = `{
  "diamonds": 98,
  "karma": 98,
  "stats": {
    "neighborsShared": 36,
    "thingsMended": 55
  },
  "items": [
    {
      "id": "item-1",
      "category": "sports",
      "pricingType": "paid",
      "price": 399,
      "mrp": 1299,
      "diamondCost": 0,
      "condition": "Gently Used",
      "distance": "1.2 km away",
      "transportSize": "Heavy (Mini-Truck)",
      "pincode": "400607",
      "title": "Black five-gear mountain bike",
      "fullTitle": "Black second hand five-gear mountain bike",
      "description": "Black second hand five-gear mountain bike in gently used condition at B-Wing • Lobby Pickup. Smooth brakes and ready to ride.",
      "location": "B-Wing • Lobby Pickup",
      "pickupAddress": "B-Wing, Avenue state Lobby Pickup",
      "sharer": "Aashi K.",
      "sharerKarma": 155,
      "sharerDiamonds": 155,
      "image": "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": true,
      "isUserCreated": false
    },
    {
      "id": "item-2",
      "category": "sports",
      "pricingType": "paid",
      "price": 399,
      "mrp": 999,
      "diamondCost": 0,
      "condition": "Like New",
      "distance": "800 m away",
      "transportSize": "No Vehicle Needed",
      "pincode": "400607",
      "title": "Grey cloth sneakers · Size 7",
      "fullTitle": "Grey cloth fabric sneakers",
      "description": "Breathable grey cloth fabric sneakers in size 7, worn twice indoors. Easy lobby pickup at B-Wing.",
      "location": "B-Wing • Lobby Pickup",
      "pickupAddress": "Wing B Lobby Pickup",
      "sharer": "Verma S.",
      "sharerKarma": 92,
      "sharerDiamonds": 92,
      "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": true,
      "isUserCreated": false
    },
    {
      "id": "item-3",
      "category": "kid's gear",
      "pricingType": "paid",
      "price": 349,
      "mrp": 899,
      "diamondCost": 0,
      "condition": "Excellent",
      "distance": "1.4 km away",
      "transportSize": "No Vehicle Needed",
      "pincode": "400607",
      "title": "Black backpack · 25L",
      "fullTitle": "Minimal black everyday backpack (25L)",
      "description": "Sturdy 25L padded backpack ideal for school, college, or daily commute with clean zippers.",
      "location": "B-Wing • Lobby Pickup",
      "pickupAddress": "Wing B Lobby Pickup",
      "sharer": "Kapoor N.",
      "sharerKarma": 91,
      "sharerDiamonds": 91,
      "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": true,
      "isUserCreated": false
    },
    {
      "id": "item-4",
      "category": "electronic",
      "pricingType": "paid",
      "price": 799,
      "mrp": 1999,
      "diamondCost": 0,
      "condition": "Like New",
      "distance": "1.7 km away",
      "transportSize": "No Vehicle Needed",
      "pincode": "400607",
      "title": "Wireless headphones",
      "fullTitle": "Over-ear wireless headphones",
      "description": "Over-ear wireless headphones with deep bass and 20-hour battery life, includes charging cable.",
      "location": "D-Wing • Security Desk",
      "pickupAddress": "Wing D Security Desk",
      "sharer": "Iyer P.",
      "sharerKarma": 89,
      "sharerDiamonds": 89,
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": true,
      "isUserCreated": false
    },
    {
      "id": "item-5",
      "category": "electronic",
      "pricingType": "paid",
      "price": 299,
      "mrp": 799,
      "diamondCost": 0,
      "condition": "Lightly Used",
      "distance": "950 m away",
      "transportSize": "No Vehicle Needed",
      "pincode": "400607",
      "title": "Classic wristwatch",
      "fullTitle": "Classic minimalist wristwatch",
      "description": "Minimalist analog wristwatch with fresh battery and clean leather strap.",
      "location": "A-Wing • Lobby Pickup",
      "pickupAddress": "Wing A Lobby Pickup",
      "sharer": "Rao V.",
      "sharerKarma": 84,
      "sharerDiamonds": 84,
      "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": true,
      "isUserCreated": false
    },
    {
      "id": "item-6",
      "category": "electronic",
      "pricingType": "paid",
      "price": 999,
      "mrp": 2499,
      "diamondCost": 0,
      "condition": "Good Condition",
      "distance": "1.5 km away",
      "transportSize": "No Vehicle Needed",
      "pincode": "400607",
      "title": "Polaroid-style camera",
      "fullTitle": "Compact instant-style camera",
      "description": "Compact instant-style camera in working condition, great for weekend trips and family events.",
      "location": "C-Wing • Lobby Pickup",
      "pickupAddress": "Wing C Lobby Pickup",
      "sharer": "Patel D.",
      "sharerKarma": 96,
      "sharerDiamonds": 96,
      "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": false,
      "isUserCreated": false
    },
    {
      "id": "item-7",
      "category": "books & decor",
      "pricingType": "free",
      "price": 0,
      "mrp": 0,
      "diamondCost": 25,
      "condition": "Gently Used",
      "distance": "600 m away",
      "transportSize": "No Vehicle Needed",
      "pincode": "400607",
      "title": "Ceramic coffee mug set",
      "fullTitle": "Handcrafted ceramic coffee mug",
      "description": "Passing on handcrafted ceramic coffee mug from A-Wing • Common Room so it stays in active use.",
      "location": "A-Wing • Common Room",
      "pickupAddress": "Wing A Common Room",
      "sharer": "Joshi M.",
      "sharerKarma": 78,
      "sharerDiamonds": 78,
      "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": false,
      "isUserCreated": false
    },
    {
      "id": "item-8",
      "category": "electronic",
      "pricingType": "paid",
      "price": 499,
      "mrp": 1199,
      "diamondCost": 0,
      "condition": "Barely Used",
      "distance": "1.1 km away",
      "transportSize": "No Vehicle Needed",
      "pincode": "400607",
      "title": "Portable Bluetooth speaker",
      "fullTitle": "Compact portable Bluetooth speaker",
      "description": "Compact portable Bluetooth speaker with crisp sound and USB-C charging.",
      "location": "B-Wing • Lobby Pickup",
      "pickupAddress": "Wing B Lobby Pickup",
      "sharer": "Singh K.",
      "sharerKarma": 93,
      "sharerDiamonds": 93,
      "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": false,
      "isUserCreated": false
    },
    {
      "id": "item-9",
      "category": "books & decor",
      "pricingType": "free",
      "price": 0,
      "mrp": 0,
      "diamondCost": 20,
      "condition": "Like New",
      "distance": "1.3 km away",
      "transportSize": "No Vehicle Needed",
      "pincode": "400607",
      "title": "Canvas tote bag",
      "fullTitle": "Reusable beige canvas tote bag",
      "description": "Passing on heavy-duty beige canvas tote bag from C-Wing • Reception for grocery or book runs.",
      "location": "C-Wing • Reception",
      "pickupAddress": "Wing C Reception",
      "sharer": "Nair S.",
      "sharerKarma": 86,
      "sharerDiamonds": 86,
      "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": false,
      "isUserCreated": false
    },
    {
      "id": "item-10",
      "category": "furniture",
      "pricingType": "paid",
      "price": 1499,
      "mrp": 3600,
      "diamondCost": 0,
      "condition": "Like New",
      "distance": "1.9 km away",
      "transportSize": "Medium (Bike / Auto)",
      "pincode": "400607",
      "title": "Solid wood bedside side table",
      "fullTitle": "Compact solid wood bedside side table",
      "description": "Compact solid wood side table with drawer in like new condition, fits easily in an auto or car boot.",
      "location": "B-Wing • Lobby Pickup",
      "pickupAddress": "Wing B Lobby Pickup",
      "sharer": "Madhavi J.",
      "sharerKarma": 192,
      "sharerDiamonds": 192,
      "image": "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": false,
      "isUserCreated": false
    },
    {
      "id": "item-11",
      "category": "appliance",
      "pricingType": "paid",
      "price": 1299,
      "mrp": 2999,
      "diamondCost": 0,
      "condition": "Gently Used",
      "distance": "1.6 km away",
      "transportSize": "Medium (Bike / Auto)",
      "pincode": "400607",
      "title": "Filter coffee maker & grinder",
      "fullTitle": "Drip filter coffee maker in clean condition",
      "description": "Clean countertop coffee maker with glass carafe, tested and working smoothly.",
      "location": "A-Wing • Lobby Pickup",
      "pickupAddress": "Wing A Lobby Pickup",
      "sharer": "Mehta R.",
      "sharerKarma": 87,
      "sharerDiamonds": 87,
      "image": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": false,
      "isUserCreated": false
    },
    {
      "id": "item-12",
      "category": "kid's gear",
      "pricingType": "free",
      "price": 0,
      "mrp": 0,
      "diamondCost": 35,
      "condition": "Gently Used",
      "distance": "1.0 km away",
      "transportSize": "Medium (Bike / Auto)",
      "pincode": "400607",
      "title": "Wooden kids study stool & blocks",
      "fullTitle": "Sturdy wooden toddler play stool & blocks",
      "description": "Passing on smooth-edged wooden kids stool and stacking blocks from C-Wing • Reception.",
      "location": "C-Wing • Reception",
      "pickupAddress": "Wing C Reception",
      "sharer": "Sharma A.",
      "sharerKarma": 95,
      "sharerDiamonds": 95,
      "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1800&q=80",
      "isFavorite": false,
      "isUserCreated": false
    }
  ],
  "karigars": [
    {
      "id": "karigar-1",
      "distance": "5 min walk (380 m)",
      "name": "Shreya Tailoring & Zip Care",
      "mends": "Kurtas, trouser hems, cushion covers & stuck zips",
      "address": "Quiet lane behind the society tea stall, 400607",
      "hours": "Usually here 10:30 AM – 7:00 PM",
      "rate": "Rs. 40-60",
      "vouched": "11 neighbors vouched",
      "phone": "1234567890",
      "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      "isUserCreated": false
    },
    {
      "id": "karigar-2",
      "distance": "5 min walk (380 m)",
      "name": "Shreya Tailoring & Zip Care",
      "mends": "Kurtas, trouser hems, cushion covers & stuck zips",
      "address": "Quiet lane behind the society tea stall, 400607",
      "hours": "Usually here 10:30 AM – 7:00 PM",
      "rate": "Rs. 40-60",
      "vouched": "11 neighbors vouched",
      "phone": "1234567890",
      "image": "",
      "isUserCreated": false
    },
    {
      "id": "karigar-3",
      "distance": "5 min walk (380 m)",
      "name": "Shreya Tailoring & Zip Care",
      "mends": "Kurtas, trouser hems, cushion covers & stuck zips",
      "address": "Quiet lane behind the society tea stall, 400607",
      "hours": "Usually here 10:30 AM – 7:00 PM",
      "rate": "Rs. 40-60",
      "vouched": "11 neighbors vouched",
      "phone": "1234567890",
      "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      "isUserCreated": false
    },
    {
      "id": "karigar-4",
      "distance": "5 min walk (380 m)",
      "name": "Shreya Tailoring & Zip Care",
      "mends": "Kurtas, trouser hems, cushion covers & stuck zips",
      "address": "Quiet lane behind the society tea stall, 400607",
      "hours": "Usually here 10:30 AM – 7:00 PM",
      "rate": "Rs. 40-60",
      "vouched": "11 neighbors vouched",
      "phone": "1234567890",
      "image": "",
      "isUserCreated": false
    }
  ]
}`;

let appState = {
  diamonds: 98,
  karma: 98,
  stats: { neighborsShared: 36, thingsMended: 55 },
  items: [],
  karigars: []
};

let homeSlideIndex = 0;
let neighborSlideIndex = 0;
let homeAutoTimer = null;
let neighborAutoTimer = null;
let uploadedItemDataUrl = "";
let uploadedKarigarDataUrl = "";
let priceMode = "free";
let ewasteBooked = false;
let activeNeighborFilter = "all";
let activeDetailItemId = null;
const itemChats = {};

async function initApp() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) throw new Error("Failed to load data.json");
    appState = await response.json();
  } catch (err) {
    appState = JSON.parse(INITIAL_DATA_JSON);
  }

  updateDiamondsDisplay();
  startHomeAutoSlide();
  updateNeighborSlider();
  startNeighborAutoSlide();
  renderNeighborItems();
  renderKarigars();
}

initApp();

/* =========================================================
   UTILITY: TEMPORARY TOAST MESSAGE
   ========================================================= */
let toastTimeout = null;
function showToast(message, isError = false) {
  const toast = document.getElementById("toastMessage");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.toggle("error", isError);
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* =========================================================
   DIAMONDS & STATS SYNC
   ========================================================= */
function getDiamondsBalance() {
  return typeof appState.diamonds === "number" ? appState.diamonds : (appState.karma ?? 98);
}

function setDiamondsBalance(val) {
  appState.diamonds = val;
  appState.karma = val;
  updateDiamondsDisplay();
}

function updateDiamondsDisplay() {
  const balance = getDiamondsBalance();
  document.querySelectorAll(".karma-count-display").forEach((el) => {
    el.textContent = balance;
  });
  const navCount = document.getElementById("statNeighborsCount");
  const mendCount = document.getElementById("statMendedCount");
  if (navCount) navCount.textContent = appState.stats.neighborsShared;
  if (mendCount) mendCount.textContent = appState.stats.thingsMended;
}

/* =========================================================
   NAVIGATION BETWEEN MAIN SECTIONS
   ========================================================= */
function switchMainSection(targetId) {
  document.querySelectorAll(".page-section").forEach((sec) => {
    sec.classList.remove("active-section");
  });
  const targetSection = document.getElementById(`section-${targetId}`);
  if (targetSection) {
    targetSection.classList.add("active-section");
  }

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === targetId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => switchMainSection(btn.dataset.target));
});

const brandBlock = document.querySelector(".brand-block");
if (brandBlock) {
  brandBlock.addEventListener("click", () => switchMainSection("home"));
}

/* =========================================================
   1. HOME HERO AUTO-SLIDING CAROUSEL (4 SLIDES)
   ========================================================= */
const homeSlides = document.querySelectorAll(".home-slide");

function showHomeSlide(index) {
  if (!homeSlides.length) return;
  homeSlideIndex = (index + homeSlides.length) % homeSlides.length;
  homeSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === homeSlideIndex);
  });
}

function startHomeAutoSlide() {
  if (!homeSlides.length) return;
  clearInterval(homeAutoTimer);
  homeAutoTimer = setInterval(() => {
    showHomeSlide(homeSlideIndex + 1);
  }, 4500);
}

const homePrevBtn = document.getElementById("homePrevBtn");
const homeNextBtn = document.getElementById("homeNextBtn");

if (homePrevBtn) {
  homePrevBtn.addEventListener("click", () => {
    showHomeSlide(homeSlideIndex - 1);
    startHomeAutoSlide();
  });
}

if (homeNextBtn) {
  homeNextBtn.addEventListener("click", () => {
    showHomeSlide(homeSlideIndex + 1);
    startHomeAutoSlide();
  });
}

/* =========================================================
   2. NEIGHBOR SHARES: SLIDER, FILTERS, 4-COL GRID & DETAIL MODAL
   ========================================================= */
const CATEGORY_LABELS = {
  furniture: "Furniture",
  electronic: "Electronics",
  sports: "Cycles & Sports",
  "kid's gear": "Kids' Gear",
  "books & decor": "Books & Decor",
  appliance: "Appliances"
};

function isItemFree(item) {
  return item.pricingType === "free" || Number(item.price) === 0;
}

function updateNeighborSlider() {
  if (!appState.items.length) return;
  neighborSlideIndex = (neighborSlideIndex + appState.items.length) % appState.items.length;
  const currentFeatured = appState.items[neighborSlideIndex];

  const heroBg = document.getElementById("neighborHeroBg");
  const titleEl = document.getElementById("newlyPlacedTitle");

  if (heroBg) {
    heroBg.style.backgroundImage = `url('${currentFeatured.heroImage || currentFeatured.image}')`;
  }
  if (titleEl) {
    titleEl.textContent = currentFeatured.fullTitle || currentFeatured.title;
  }
}

function startNeighborAutoSlide() {
  clearInterval(neighborAutoTimer);
  neighborAutoTimer = setInterval(() => {
    neighborSlideIndex++;
    updateNeighborSlider();
  }, 4500);
}

document.getElementById("neighborPrevBtn").addEventListener("click", () => {
  neighborSlideIndex--;
  updateNeighborSlider();
  startNeighborAutoSlide();
});

document.getElementById("neighborNextBtn").addEventListener("click", () => {
  neighborSlideIndex++;
  updateNeighborSlider();
  startNeighborAutoSlide();
});

function handleNewlyPlacedClick() {
  if (!appState.items.length) return;
  const currentFeatured = appState.items[neighborSlideIndex];
  openItemDetailModal(currentFeatured.id);
}

const newlyPlacedCard = document.getElementById("newlyPlacedCard");
newlyPlacedCard.addEventListener("click", handleNewlyPlacedClick);
newlyPlacedCard.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleNewlyPlacedClick();
  }
});

// Category / Free / Favorites Filter Header
document.querySelectorAll("#neighborCategoryBar .filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#neighborCategoryBar .filter-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeNeighborFilter = chip.dataset.filter;
    renderNeighborItems(document.getElementById("itemSearchInput").value);
  });
});

// Toggle Heart Favorite
function toggleItemFavorite(itemId) {
  const item = appState.items.find((entry) => entry.id === itemId);
  if (!item) return;

  item.isFavorite = !item.isFavorite;
  renderNeighborItems(document.getElementById("itemSearchInput").value);

  if (activeDetailItemId === itemId) {
    syncModalSaveButton(item);
  }

  showToast(item.isFavorite ? "Saved to Favorites!" : "Removed from Favorites.");
}

function syncModalSaveButton(item) {
  const btn = document.getElementById("detailSaveHeartBtn");
  const label = document.getElementById("detailSaveLabel");
  const icon = btn.querySelector("i");

  if (item.isFavorite) {
    btn.classList.add("saved");
    icon.className = "fa-solid fa-heart";
    label.textContent = "Saved";
  } else {
    btn.classList.remove("saved");
    icon.className = "fa-regular fa-heart";
    label.textContent = "Save";
  }
}

// Render 4-Column Product Cards
function renderNeighborItems(filterText = "") {
  const grid = document.getElementById("neighborItemsGrid");
  if (!grid) return;
  const query = filterText.trim().toLowerCase();

  const filtered = appState.items.filter((item) => {
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      (item.fullTitle && item.fullTitle.toLowerCase().includes(query)) ||
      (item.description && item.description.toLowerCase().includes(query)) ||
      item.location.toLowerCase().includes(query) ||
      item.sharer.toLowerCase().includes(query);

    if (!matchesSearch) return false;

    if (activeNeighborFilter === "all") return true;
    if (activeNeighborFilter === "free") return isItemFree(item);
    if (activeNeighborFilter === "favorites") return Boolean(item.isFavorite);
    return (item.category || "").toLowerCase() === activeNeighborFilter;
  });

  grid.innerHTML = "";

  filtered.forEach((item) => {
    const freeItem = isItemFree(item);
    const diamondCost = item.diamondCost || 25;
    const sharerDiamonds = item.sharerDiamonds ?? item.sharerKarma ?? 90;
    const mrpVal = item.mrp && item.mrp > item.price ? item.mrp : Math.round(Number(item.price) * 2.2);

    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-img-wrap">
        <span class="card-top-tag ${freeItem ? "tag-free" : "tag-pocket"}">
          ${
            freeItem
              ? `<i class="fa-solid fa-leaf"></i> Diamonds Free`
              : `<i class="fa-solid fa-tag"></i> Pocket Price`
          }
        </span>

        <button
          type="button"
          class="card-heart-btn ${item.isFavorite ? "is-favorited" : ""}"
          aria-label="Save item to favorites"
          title="Save to Favorites"
        >
          <i class="${item.isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>

        ${
          item.isUserCreated
            ? `<button type="button" class="delete-entry-btn" title="Delete your listing" aria-label="Delete item"><i class="fa-solid fa-trash"></i></button>`
            : ""
        }

        <img src="${item.image}" alt="${item.title}" />

        <span class="card-condition-label">${item.condition || "Gently Used"}</span>
        <span class="card-distance-pill">${item.distance || "1.2 km away"}</span>
      </div>

      <div class="product-card-body">
        <div class="product-location">
          <i class="fa-solid fa-building"></i>
          <span>${item.location}</span>
        </div>

        <h3 class="product-title">${item.title}</h3>
        <p class="product-desc-snippet">
          ${item.description || `${item.fullTitle || item.title} available at ${item.location}.`}
        </p>

        <div class="product-price-strip">
          ${
            freeItem
              ? `
                <div>
                  <span class="price-kicker">NEIGHBOR GIFT</span>
                  <span class="price-main-val">FREE</span>
                  <span class="price-diamond-sub">(${diamondCost} 💎 Diamonds)</span>
                </div>
                <button type="button" class="card-action-pill claim-pill">Claim</button>
              `
              : `
                <div>
                  <span class="price-kicker">POCKET PRICE</span>
                  <span class="price-main-val">₹${Number(item.price).toLocaleString("en-IN")}</span>
                  <span class="price-mrp-strike">₹${Number(mrpVal).toLocaleString("en-IN")}</span>
                </div>
                <button type="button" class="card-action-pill offer-pill">Offer</button>
              `
          }
        </div>

        <div class="product-card-footer">
          <span class="sharer-verified">
            <i class="fa-solid fa-circle-check"></i> ${item.sharer} (${sharerDiamonds} 💎)
          </span>
          <span class="item-pincode">${item.pincode || "400607"}</span>
        </div>
      </div>
    `;

    card.querySelector(".card-heart-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleItemFavorite(item.id);
    });

    const deleteBtn = card.querySelector(".delete-entry-btn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        appState.items = appState.items.filter((entry) => entry.id !== item.id);
        neighborSlideIndex = 0;
        updateNeighborSlider();
        renderNeighborItems(document.getElementById("itemSearchInput").value);
        showToast("Listing removed.");
      });
    }

    card.addEventListener("click", () => openItemDetailModal(item.id));
    card.querySelector(".card-action-pill").addEventListener("click", (e) => {
      e.stopPropagation();
      openItemDetailModal(item.id);
    });

    grid.appendChild(card);
  });
}

document.getElementById("itemSearchInput").addEventListener("input", (e) => {
  renderNeighborItems(e.target.value);
});

/* =========================================================
   DETAIL MODAL, CHAT AUTO-REPLY & PORTER BOOKING
   ========================================================= */
function openItemDetailModal(itemId) {
  const item = appState.items.find((entry) => entry.id === itemId);
  if (!item) return;

  activeDetailItemId = itemId;
  const freeItem = isItemFree(item);
  const sharerDiamonds = item.sharerDiamonds ?? item.sharerKarma ?? 90;

  document.getElementById("detailCategoryPill").textContent =
    CATEGORY_LABELS[(item.category || "").toLowerCase()] || "Neighbor Share";
  document.getElementById("detailLocationLine").innerHTML =
    `<i class="fa-solid fa-location-dot"></i> Thane West • ${item.pincode || "400607"} • ${item.location}`;

  document.getElementById("detailItemImage").src = item.image;
  document.getElementById("detailItemImage").alt = item.fullTitle || item.title;
  syncModalSaveButton(item);

  document.getElementById("detailItemTitle").textContent = item.fullTitle || item.title;
  document.getElementById("detailConditionTag").textContent = item.condition || "Gently Used";
  document.getElementById("detailDistanceTag").textContent = item.distance || "1.2 km away";
  document.getElementById("detailTransportTag").textContent = item.transportSize || "No Vehicle Needed";
  document.getElementById("detailDescriptionText").textContent =
    item.description || `${item.fullTitle || item.title} available at ${item.location}.`;

  const porterSelect = document.getElementById("porterOptionSelect");
  porterSelect.selectedIndex = 0;
  document.getElementById("bookPorterBtn").textContent = "Book • ₹180";

  const paidBox = document.getElementById("detailPaidBox");
  const freeBox = document.getElementById("detailFreeBox");

  if (freeItem) {
    paidBox.classList.add("hidden");
    freeBox.classList.remove("hidden");
    const dCost = item.diamondCost || 25;
    document.getElementById("detailDiamondCost").textContent = dCost;
    document.getElementById("detailDiamondCostInline").textContent = dCost;
  } else {
    freeBox.classList.add("hidden");
    paidBox.classList.remove("hidden");
    const price = Number(item.price);
    const mrp = item.mrp && item.mrp > price ? item.mrp : Math.round(price * 2.2);
    const discountPct = Math.max(10, Math.round(((mrp - price) / mrp) * 100));

    document.getElementById("detailMainPrice").textContent = `₹${price.toLocaleString("en-IN")}`;
    document.getElementById("detailMrpPrice").textContent = `MRP ₹${mrp.toLocaleString("en-IN")}`;
    document.getElementById("detailDiscountBadge").textContent = `Save ${discountPct}%`;
    document.getElementById("pocketOfferInput").value = Math.max(1, Math.round(price * 0.9));
  }

  document.getElementById("detailSharerInitial").textContent = (item.sharer || "N").charAt(0).toUpperCase();
  document.getElementById("detailSharerName").textContent = item.sharer;
  document.getElementById("detailSharerDiamonds").textContent = sharerDiamonds;

  if (!itemChats[item.id]) {
    itemChats[item.id] = [
      {
        type: "incoming",
        text: `Namaste! Ready for smooth lift & lobby pickup anytime this evening at ${item.pickupAddress || item.location}.`,
        time: "10:15 AM"
      }
    ];
  }
  renderDetailChat(item.id);
  updateDiamondsDisplay();

  const backdrop = document.getElementById("itemDetailBackdrop");
  backdrop.classList.remove("hidden");
  backdrop.setAttribute("aria-hidden", "false");
}

function closeItemDetailModal() {
  const backdrop = document.getElementById("itemDetailBackdrop");
  backdrop.classList.add("hidden");
  backdrop.setAttribute("aria-hidden", "true");
  activeDetailItemId = null;
}

document.getElementById("closeDetailModalBtn").addEventListener("click", closeItemDetailModal);
document.getElementById("itemDetailBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "itemDetailBackdrop") closeItemDetailModal();
});

document.getElementById("detailSaveHeartBtn").addEventListener("click", () => {
  if (activeDetailItemId) toggleItemFavorite(activeDetailItemId);
});

document.getElementById("porterOptionSelect").addEventListener("change", (e) => {
  const [, price] = e.target.value.split("|");
  document.getElementById("bookPorterBtn").textContent = `Book • ₹${price}`;
});

document.getElementById("bookPorterBtn").addEventListener("click", () => {
  const item = appState.items.find((entry) => entry.id === activeDetailItemId);
  if (!item) return;

  const [optionLabel, price] = document.getElementById("porterOptionSelect").value.split("|");
  const pickupSpot = item.pickupAddress || item.location;
  showToast(`Order is booked with Porter delivery (${optionLabel}) from ${pickupSpot} in Rs. ${price}.`);
});

function renderDetailChat(itemId) {
  const container = document.getElementById("detailChatMessages");
  const messages = itemChats[itemId] || [];
  container.innerHTML = "";

  messages.forEach((msg) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${msg.type}`;
    bubble.innerHTML = `
      <span>${msg.text}</span>
      <span class="chat-bubble-time">${msg.time}</span>
    `;
    container.appendChild(bubble);
  });

  container.scrollTop = container.scrollHeight;
}

function sendNeighborMessageWithAutoReply(item, outgoingText) {
  if (!itemChats[item.id]) itemChats[item.id] = [];

  const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  itemChats[item.id].push({
    type: "outgoing",
    text: outgoingText,
    time: nowTime
  });
  renderDetailChat(item.id);

  const registeredPlace = item.pickupAddress || item.location;
  setTimeout(() => {
    const replyTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    itemChats[item.id].push({
      type: "incoming",
      text: `Thanks neighbor! That works well—let's meet near ${registeredPlace} • Lobby 4 around 6:30 PM.`,
      time: replyTime
    });
    if (activeDetailItemId === item.id) {
      renderDetailChat(item.id);
    }
  }, 450);
}

document.getElementById("sendPocketOfferBtn").addEventListener("click", () => {
  const item = appState.items.find((entry) => entry.id === activeDetailItemId);
  if (!item) return;

  const offerAmount = document.getElementById("pocketOfferInput").value.trim();
  if (!offerAmount || Number(offerAmount) <= 0) {
    showToast("Please enter a valid pocket offer amount.", true);
    return;
  }

  const offerMessage = `Hi! Would you accept a pocket offer of ₹${offerAmount} with lobby pickup today?`;
  sendNeighborMessageWithAutoReply(item, offerMessage);
});

document.getElementById("detailChatForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const item = appState.items.find((entry) => entry.id === activeDetailItemId);
  if (!item) return;

  const input = document.getElementById("detailChatInput");
  const text = input.value.trim();
  if (!text) return;

  input.value = "";
  sendNeighborMessageWithAutoReply(item, text);
});

document.getElementById("claimFreeLobbyBtn").addEventListener("click", () => {
  const item = appState.items.find((entry) => entry.id === activeDetailItemId);
  if (!item) return;

  const cost = Number(item.diamondCost || 25);
  const currentDiamonds = getDiamondsBalance();

  if (currentDiamonds < cost) {
    showToast(`Not enough Diamonds! You need ${cost} 💎 Diamonds to claim this item.`, true);
    return;
  }

  setDiamondsBalance(currentDiamonds - cost);
  sendNeighborMessageWithAutoReply(
    item,
    `Hi! I've claimed this item using ${cost} Diamonds for lobby pickup today.`
  );
  showToast(`Claimed! ${cost} 💎 Diamonds deducted (Remaining: ${getDiamondsBalance()} 💎).`);
});

/* =========================================================
   3. FIX & MEND: KARIGARS GRID & CLIPBOARD COPY
   ========================================================= */
function copyKarigarContact(phone) {
  const cleanPhone = (phone || "1234567890").replace(/[^0-9]/g, "") || "1234567890";
  const textToCopy = `Karigar Phone no. ${cleanPhone} \nMessage on WhatsApp!`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(`Copied: Karigar Phone no. ${cleanPhone}`);
    });
  } else {
    const tempArea = document.createElement("textarea");
    tempArea.value = textToCopy;
    document.body.appendChild(tempArea);
    tempArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempArea);
    showToast(`Copied: Karigar Phone no. ${cleanPhone}`);
  }
}

function renderKarigars(filterText = "") {
  const grid = document.getElementById("karigarsGrid");
  if (!grid) return;
  const query = filterText.trim().toLowerCase();

  const filtered = appState.karigars.filter(
    (k) =>
      k.name.toLowerCase().includes(query) ||
      k.mends.toLowerCase().includes(query) ||
      k.address.toLowerCase().includes(query)
  );

  grid.innerHTML = "";

  filtered.forEach((karigar) => {
    const card = document.createElement("article");
    card.className = "karigar-card";

    const avatarHtml = karigar.image
      ? `<img class="karigar-avatar" src="${karigar.image}" alt="${karigar.name}" />`
      : `<div class="karigar-placeholder-avatar"><i class="fa-solid fa-user"></i></div>`;

    card.innerHTML = `
      <span class="card-badge-pill">${karigar.distance}</span>
      ${
        karigar.isUserCreated
          ? `<button type="button" class="delete-entry-btn" title="Delete your karigar reference" aria-label="Delete karigar"><i class="fa-solid fa-trash"></i></button>`
          : ""
      }
      <div class="karigar-top-row">
        ${avatarHtml}
        <div>
          <h3 class="karigar-name">${karigar.name}</h3>
          <p class="karigar-mends"><strong>Mends :</strong> ${karigar.mends}</p>
        </div>
      </div>

      <div class="karigar-location-row">
        <i class="fa-solid fa-location-dot"></i>
        <div>
          <p class="karigar-address">${karigar.address}</p>
          <p class="karigar-hours">${karigar.hours}</p>
        </div>
      </div>

      <div class="karigar-badges-row">
        <span class="karigar-green-pill">Rate : ${karigar.rate}</span>
        <span class="karigar-green-pill">${karigar.vouched}</span>
      </div>

      <div class="karigar-actions-row">
        <button type="button" class="karigar-contact-btn call-btn">
          <i class="fa-solid fa-phone"></i>
          <span>Call</span>
        </button>
        <button type="button" class="karigar-contact-btn whatsapp-btn">
          <i class="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </button>
      </div>
    `;

    card.querySelector(".call-btn").addEventListener("click", () => copyKarigarContact(karigar.phone));
    card.querySelector(".whatsapp-btn").addEventListener("click", () => copyKarigarContact(karigar.phone));

    const deleteBtn = card.querySelector(".delete-entry-btn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        appState.karigars = appState.karigars.filter((entry) => entry.id !== karigar.id);
        renderKarigars(document.getElementById("karigarSearchInput").value);
        showToast("Karigar reference removed.");
      });
    }

    grid.appendChild(card);
  });
}

const karigarSearchInput = document.getElementById("karigarSearchInput");
if (karigarSearchInput) {
  karigarSearchInput.addEventListener("input", (e) => renderKarigars(e.target.value));
}

/* =========================================================
   4. SHARE OR PIN SUB-TABS & FORM SUBMISSIONS
   ========================================================= */
function switchShareSubtab(subtabName) {
  document.querySelectorAll(".subtab-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.subtab === subtabName);
  });
  document.querySelectorAll(".subtab-panel").forEach((panel) => {
    panel.classList.toggle("active-subtab", panel.id === `subtab-${subtabName}`);
  });
}

document.querySelectorAll(".subtab-card").forEach((card) => {
  card.addEventListener("click", () => switchShareSubtab(card.dataset.subtab));
});

const goToPinKarigarBtn = document.getElementById("goToPinKarigarBtn");
if (goToPinKarigarBtn) {
  goToPinKarigarBtn.addEventListener("click", () => {
    switchMainSection("share-pin");
    switchShareSubtab("list-karigar");
  });
}

const freeNeighborBtn = document.getElementById("freeNeighborBtn");
const pocketPriceBtn = document.getElementById("pocketPriceBtn");

if (freeNeighborBtn) {
  freeNeighborBtn.addEventListener("click", () => {
    priceMode = "free";
    freeNeighborBtn.classList.add("active");
    pocketPriceBtn?.classList.remove("active");
    const priceInput = document.getElementById("itemPriceInput");
    if (priceInput) priceInput.value = "0";
  });
}

if (pocketPriceBtn) {
  pocketPriceBtn.addEventListener("click", () => {
    priceMode = "paid";
    pocketPriceBtn.classList.add("active");
    freeNeighborBtn?.classList.remove("active");
    const priceInput = document.getElementById("itemPriceInput");
    if (priceInput && priceInput.value === "0") {
      priceInput.value = "150";
    }
  });
}

const itemImageInput = document.getElementById("itemImageInput");
if (itemImageInput) {
  itemImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      uploadedItemDataUrl = ev.target.result;
      const lbl = document.getElementById("itemUploadLabel");
      if (lbl) lbl.textContent = `Selected: ${file.name}`;
    };
    reader.readAsDataURL(file);
  });
}

const karigarImageInput = document.getElementById("karigarImageInput");
if (karigarImageInput) {
  karigarImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      uploadedKarigarDataUrl = ev.target.result;
      const lbl = document.getElementById("karigarUploadLabel");
      if (lbl) lbl.textContent = `Selected: ${file.name}`;
    };
    reader.readAsDataURL(file);
  });
}

const confirmPlaceItemBtn = document.getElementById("confirmPlaceItemBtn");
if (confirmPlaceItemBtn) {
  confirmPlaceItemBtn.addEventListener("click", () => {
    const name = document.getElementById("itemNameInput").value.trim();
    const condition = document.getElementById("itemConditionInput").value.trim();
    const priceVal = document.getElementById("itemPriceInput").value.trim();
    const sharerName = document.getElementById("sharerNameInput").value.trim();
    const sharerAddress = document.getElementById("sharerAddressInput").value.trim();

    const categoryEl = document.getElementById("itemCategoryInput");
    const diamondCostEl = document.getElementById("itemDiamondCostInput");
    const descriptionEl = document.getElementById("itemDescriptionInput");

    if (!name || !condition || !priceVal || !sharerName || !sharerAddress || !uploadedItemDataUrl) {
      showToast("fill full field", true);
      return;
    }

    const isFree = priceMode === "free" || Number(priceVal) === 0;
    const numericPrice = isFree ? 0 : Number(priceVal) || 0;
    const diamondCost = isFree ? (Number(diamondCostEl?.value) || 25) : 0;

    const newItem = {
      id: `user-item-${Date.now()}`,
      category: categoryEl ? categoryEl.value : "furniture",
      pricingType: isFree ? "free" : "paid",
      price: numericPrice,
      mrp: isFree ? 0 : Math.round(numericPrice * 2.2),
      diamondCost: diamondCost,
      condition: condition,
      distance: "450 m away",
      transportSize: "No Vehicle Needed",
      pincode: "400607",
      title: name,
      fullTitle: name,
      description:
        descriptionEl?.value.trim() ||
        `${name} in ${condition.toLowerCase()} condition at ${sharerAddress}. Easy lobby handoff.`,
      location: sharerAddress,
      pickupAddress: sharerAddress,
      sharer: sharerName,
      sharerKarma: getDiamondsBalance() + 50,
      sharerDiamonds: getDiamondsBalance() + 50,
      image: uploadedItemDataUrl,
      heroImage: uploadedItemDataUrl,
      isFavorite: false,
      isUserCreated: true
    };

    appState.items.unshift(newItem);
    setDiamondsBalance(getDiamondsBalance() + 50);
    appState.stats.neighborsShared += 1;

    updateDiamondsDisplay();
    neighborSlideIndex = 0;
    updateNeighborSlider();
    renderNeighborItems();

    document.getElementById("listItemForm").reset();
    document.getElementById("itemPriceInput").value = "0";
    priceMode = "free";
    freeNeighborBtn?.classList.add("active");
    pocketPriceBtn?.classList.remove("active");
    uploadedItemDataUrl = "";
    const lbl = document.getElementById("itemUploadLabel");
    if (lbl) lbl.textContent = "+ Add an image of the item";

    showToast("Item placed in Neighbor Shares! (+50 💎 Diamonds)");
    switchMainSection("neighbor-shares");
  });
}

const confirmPlaceKarigarBtn = document.getElementById("confirmPlaceKarigarBtn");
if (confirmPlaceKarigarBtn) {
  confirmPlaceKarigarBtn.addEventListener("click", () => {
    const name = document.getElementById("karigarNameInput").value.trim();
    const mends = document.getElementById("karigarMendsInput").value.trim();
    const note = document.getElementById("karigarNoteInput").value.trim();
    const address = document.getElementById("karigarAddressInput").value.trim();
    const landmark = document.getElementById("karigarLandmarkInput").value.trim();
    const rate = document.getElementById("karigarRateInput").value.trim();
    const phone = document.getElementById("karigarPhoneInput").value.trim();

    if (!name || !mends || !note || !address || !landmark || !rate || !phone || !uploadedKarigarDataUrl) {
      showToast("fill full field", true);
      return;
    }

    const formattedRate = rate.toLowerCase().startsWith("rs") ? rate : `Rs. ${rate}`;
    const newKarigar = {
      id: `user-karigar-${Date.now()}`,
      distance: "Nearby walk",
      name: name,
      mends: mends,
      address: `${address}, ${landmark}`,
      hours: "Usually here 10:30 AM – 7:00 PM",
      rate: formattedRate,
      vouched: "1 neighbor vouched",
      phone: phone,
      image: uploadedKarigarDataUrl,
      isUserCreated: true
    };

    appState.karigars.unshift(newKarigar);
    setDiamondsBalance(getDiamondsBalance() + 20);
    appState.stats.thingsMended += 1;

    updateDiamondsDisplay();
    renderKarigars();

    document.getElementById("listKarigarForm").reset();
    uploadedKarigarDataUrl = "";
    const lbl = document.getElementById("karigarUploadLabel");
    if (lbl) lbl.textContent = "+ Add an image of the person or shop";

    showToast("Karigar pinned to Fix & Mend! (+20 💎 Diamonds)");
    switchMainSection("fix-mend");
  });
}

const bookKabadiwalaBtn = document.getElementById("bookKabadiwalaBtn");
if (bookKabadiwalaBtn) {
  bookKabadiwalaBtn.addEventListener("click", () => {
    if (!ewasteBooked) {
      ewasteBooked = true;
      setDiamondsBalance(getDiamondsBalance() + 15);
      showToast("Kabadiwala booked! (+15 💎 Diamonds)");
    }
  });
}