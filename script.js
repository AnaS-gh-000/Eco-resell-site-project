/* =========================================================
   JSON DATA SOURCE (Flexible & Extensible)
   ========================================================= */
const INITIAL_DATA_JSON = `{
  "karma": 98,
  "stats": {
    "neighborsShared": 36,
    "thingsMended": 55
  },
  "items": [
    {
      "id": "item-1",
      "badge": "11 kg metal saved",
      "title": "Black five-gear mountain bike",
      "fullTitle": "Black second hand five-gear mountain bike",
      "location": "B-Wing · Lobby Pickup",
      "pickupAddress": "Reserved at B-Wing, Avenue state Lobby Pickup.",
      "sharer": "Aashi K.",
      "sharerKarma": 155,
      "price": 399,
      "image": "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1800&q=80",
      "isUserCreated": false
    },
    {
      "id": "item-2",
      "badge": "High quality fabric",
      "title": "Grey cloth sneakers” 7 size",
      "fullTitle": "Grey cloth fabric sneakers",
      "location": "B-Wing · Lobby Pickup",
      "pickupAddress": "Reserved at Wing B Lobby Pickup.",
      "sharer": "Verma S.",
      "sharerKarma": 92,
      "price": 399,
      "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=80",
      "isUserCreated": false
    },
    {
      "id": "item-3",
      "badge": "11 kg metal saved",
      "title": "Black five-gear mountain bike",
      "fullTitle": "Black second hand five-gear mountain bike",
      "location": "B-Wing · Lobby Pickup",
      "pickupAddress": "Reserved at B-Wing, Avenue state Lobby Pickup.",
      "sharer": "Aashi K.",
      "sharerKarma": 155,
      "price": 399,
      "image": "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1800&q=80",
      "isUserCreated": false
    },
    {
      "id": "item-4",
      "badge": "High quality fabric",
      "title": "Grey cloth sneakers” 7 size",
      "fullTitle": "Grey cloth fabric sneakers",
      "location": "B-Wing · Lobby Pickup",
      "pickupAddress": "Reserved at Wing B Lobby Pickup.",
      "sharer": "Verma S.",
      "sharerKarma": 92,
      "price": 399,
      "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
      "heroImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=80",
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

let appState = { karma: 98, stats: { neighborsShared: 36, thingsMended: 55 }, items: [], karigars: [] };

async function initApp() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) throw new Error("Failed to load data.json");
    appState = await response.json();
  } catch (err) {
    appState = JSON.parse(INITIAL_DATA_JSON);
  }

  updateKarmaDisplay();
  startHomeAutoSlide();
  updateNeighborSlider();
  startNeighborAutoSlide();
  renderNeighborItems();
  renderKarigars();
}

initApp();

let selectedItemId = null;
let modalItemId = null;
let homeSlideIndex = 0;
let neighborSlideIndex = 0;
let homeAutoTimer = null;
let neighborAutoTimer = null;
let uploadedItemDataUrl = "";
let uploadedKarigarDataUrl = "";
let priceMode = "free";
let ewasteBooked = false;

/* =========================================================
   UTILITY: TEMPORARY TOAST MESSAGE
   ========================================================= */
let toastTimeout = null;
function showToast(message, isError = false) {
  const toast = document.getElementById("toastMessage");
  toast.textContent = message;
  toast.classList.toggle("error", isError);
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* =========================================================
   KARMA & STATS SYNC
   ========================================================= */
function updateKarmaDisplay() {
  document.querySelectorAll(".karma-count-display").forEach((el) => {
    el.textContent = appState.karma;
  });
  document.getElementById("statNeighborsCount").textContent = appState.stats.neighborsShared;
  document.getElementById("statMendedCount").textContent = appState.stats.thingsMended;
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

document.querySelector(".brand-block").addEventListener("click", () => {
  switchMainSection("home");
});

/* =========================================================
   1. HOME HERO AUTO-SLIDING CAROUSEL (4 SLIDES)
   ========================================================= */
const homeSlides = document.querySelectorAll(".home-slide");

function showHomeSlide(index) {
  homeSlideIndex = (index + homeSlides.length) % homeSlides.length;
  homeSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === homeSlideIndex);
  });
}

function startHomeAutoSlide() {
  clearInterval(homeAutoTimer);
  homeAutoTimer = setInterval(() => {
    showHomeSlide(homeSlideIndex + 1);
  }, 4500);
}

document.getElementById("homePrevBtn").addEventListener("click", () => {
  showHomeSlide(homeSlideIndex - 1);
  startHomeAutoSlide();
});

document.getElementById("homeNextBtn").addEventListener("click", () => {
  showHomeSlide(homeSlideIndex + 1);
  startHomeAutoSlide();
});

/* =========================================================
   2. NEIGHBOR SHARES: SLIDER, CARDS, SELECTION & HANDOFF MODAL
   ========================================================= */
function updateNeighborSlider() {
  if (!appState.items.length) return;
  neighborSlideIndex = (neighborSlideIndex + appState.items.length) % appState.items.length;
  const currentFeatured = appState.items[neighborSlideIndex];

  const heroBg = document.getElementById("neighborHeroBg");
  const titleEl = document.getElementById("newlyPlacedTitle");

  heroBg.style.backgroundImage = `url('${currentFeatured.heroImage || currentFeatured.image}')`;
  titleEl.textContent = currentFeatured.fullTitle || currentFeatured.title;
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

// Clicking the orange-bordered "Newly placed item" box selects the item, populates right box, and scrolls down
function handleNewlyPlacedClick() {
  if (!appState.items.length) return;
  const currentFeatured = appState.items[neighborSlideIndex];
  selectNeighborItem(currentFeatured.id, false);
  document.getElementById("neighborGridAnchor").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("newlyPlacedCard").addEventListener("click", handleNewlyPlacedClick);
document.getElementById("newlyPlacedCard").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleNewlyPlacedClick();
  }
});

// Select an item -> Show Item Details on lower right, keep Active OTP hidden
function selectNeighborItem(itemId, showOtp = false) {
  selectedItemId = itemId;
  const item = appState.items.find((entry) => entry.id === itemId);
  if (!item) return;

  document.getElementById("pickupEmptyState").classList.add("hidden");
  document.getElementById("pickupDetailsContent").classList.remove("hidden");

  document.getElementById("passItemPrice").textContent =
    Number(item.price) === 0 ? "Free (Karma Handoff)" : `Rs. ${item.price}`;
  document.getElementById("passItemName").textContent = item.fullTitle || item.title;
  document.getElementById("passItemLocation").textContent = item.pickupAddress;

  const otpBox = document.getElementById("activeOtpBox");
  if (showOtp) {
    otpBox.classList.remove("hidden");
  } else {
    otpBox.classList.add("hidden");
  }

  renderNeighborItems(document.getElementById("itemSearchInput").value);
}

// Open Hand Off Point Modal when "Claim Item" is clicked
function openHandoffModal(itemId) {
  modalItemId = itemId;
  const item = appState.items.find((entry) => entry.id === itemId);
  if (!item) return;

  document.getElementById("modalItemTitle").textContent = item.fullTitle || item.title;
  const cleanLobby = item.location.replace("·", "").replace(/\s+/g, " ").trim();
  document.getElementById("modalSharedBy").innerHTML =
    `<strong>Shared by:</strong> ${item.sharer} at ${cleanLobby}`;
  document.getElementById("modalPriceDisplay").textContent =
    Number(item.price) === 0 ? "Free" : `Rs. ${item.price}`;

  const backdrop = document.getElementById("handoffModalBackdrop");
  backdrop.classList.remove("hidden");
  backdrop.setAttribute("aria-hidden", "false");
}

function closeHandoffModal() {
  const backdrop = document.getElementById("handoffModalBackdrop");
  backdrop.classList.add("hidden");
  backdrop.setAttribute("aria-hidden", "true");
}

// Click outside modal card closes it
document.getElementById("handoffModalBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "handoffModalBackdrop") {
    closeHandoffModal();
  }
});

// Confirm Pickup & Pay -> Exits modal & reveals Active OTP on right-hand side
document.getElementById("confirmPickupPayBtn").addEventListener("click", () => {
  if (!modalItemId) return;
  const generatedOtp = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("activeOtpCode").textContent = generatedOtp;
  closeHandoffModal();
  selectNeighborItem(modalItemId, true);
});

function renderNeighborItems(filterText = "") {
  const grid = document.getElementById("neighborItemsGrid");
  const query = filterText.trim().toLowerCase();

  const filtered = appState.items.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      (item.fullTitle && item.fullTitle.toLowerCase().includes(query)) ||
      item.location.toLowerCase().includes(query) ||
      item.sharer.toLowerCase().includes(query)
  );

  grid.innerHTML = "";

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = `product-card ${selectedItemId === item.id ? "selected-card" : ""}`;

    card.innerHTML = `
      <span class="card-badge-pill">${item.badge}</span>
      ${
        item.isUserCreated
          ? `<button type="button" class="delete-entry-btn" title="Delete your listing" aria-label="Delete item"><i class="fa-solid fa-trash"></i></button>`
          : ""
      }
      <div class="product-img-wrap">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="product-card-body">
        <div class="product-location">
          <i class="fa-solid fa-location-dot"></i>
          <span>${item.location}</span>
        </div>
        <h3 class="product-title">${item.title}</h3>
        <div class="product-card-footer">
          <div class="sharer-meta">
            <div class="sharer-avatar"><i class="fa-solid fa-user"></i></div>
            <div>
              <span class="sharer-name">${item.sharer}</span>
              <span class="sharer-karma">${item.sharerKarma} Karma</span>
            </div>
          </div>
          <button type="button" class="claim-item-btn">Claim Item</button>
        </div>
      </div>
    `;

    // Clicking the card selects it and shows details on right (OTP hidden)
    card.addEventListener("click", (e) => {
      if (e.target.closest(".claim-item-btn") || e.target.closest(".delete-entry-btn")) return;
      selectNeighborItem(item.id, false);
    });

    // Clicking "Claim Item" opens the Hand Off Point modal
    card.querySelector(".claim-item-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      openHandoffModal(item.id);
    });

    // Delete button for user-created items only
    const deleteBtn = card.querySelector(".delete-entry-btn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        appState.items = appState.items.filter((entry) => entry.id !== item.id);
        if (selectedItemId === item.id) {
          selectedItemId = null;
          document.getElementById("pickupDetailsContent").classList.add("hidden");
          document.getElementById("pickupEmptyState").classList.remove("hidden");
        }
        neighborSlideIndex = 0;
        updateNeighborSlider();
        renderNeighborItems(document.getElementById("itemSearchInput").value);
        showToast("Listing removed.");
      });
    }

    grid.appendChild(card);
  });
}

document.getElementById("itemSearchInput").addEventListener("input", (e) => {
  renderNeighborItems(e.target.value);
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

    card.querySelector(".call-btn").addEventListener("click", () => {
      copyKarigarContact(karigar.phone);
    });

    card.querySelector(".whatsapp-btn").addEventListener("click", () => {
      copyKarigarContact(karigar.phone);
    });

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

document.getElementById("karigarSearchInput").addEventListener("input", (e) => {
  renderKarigars(e.target.value);
});

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

// "Know a good karigar? + Pin them" navigates directly to "Pin a local repair karigar"
document.getElementById("goToPinKarigarBtn").addEventListener("click", () => {
  switchMainSection("share-pin");
  switchShareSubtab("list-karigar");
});

// Free vs Small pocket price toggle
document.getElementById("freeNeighborBtn").addEventListener("click", () => {
  priceMode = "free";
  document.getElementById("freeNeighborBtn").classList.add("active");
  document.getElementById("pocketPriceBtn").classList.remove("active");
  document.getElementById("itemPriceInput").value = "0";
});

document.getElementById("pocketPriceBtn").addEventListener("click", () => {
  priceMode = "paid";
  document.getElementById("pocketPriceBtn").classList.add("active");
  document.getElementById("freeNeighborBtn").classList.remove("active");
  if (document.getElementById("itemPriceInput").value === "0") {
    document.getElementById("itemPriceInput").value = "150";
  }
});

// Image upload readers
document.getElementById("itemImageInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    uploadedItemDataUrl = ev.target.result;
    document.getElementById("itemUploadLabel").textContent = `Selected: ${file.name}`;
  };
  reader.readAsDataURL(file);
});

document.getElementById("karigarImageInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    uploadedKarigarDataUrl = ev.target.result;
    document.getElementById("karigarUploadLabel").textContent = `Selected: ${file.name}`;
  };
  reader.readAsDataURL(file);
});

// Confirm Placing Item (+50 Karma)
document.getElementById("confirmPlaceItemBtn").addEventListener("click", () => {
  const name = document.getElementById("itemNameInput").value.trim();
  const condition = document.getElementById("itemConditionInput").value.trim();
  const priceVal = document.getElementById("itemPriceInput").value.trim();
  const sharerName = document.getElementById("sharerNameInput").value.trim();
  const sharerAddress = document.getElementById("sharerAddressInput").value.trim();

  if (!name || !condition || !priceVal || !sharerName || !sharerAddress || !uploadedItemDataUrl) {
    showToast("fill full field", true);
    return;
  }

  const numericPrice = priceMode === "free" ? 0 : Number(priceVal) || 0;
  const newItem = {
    id: `user-item-${Date.now()}`,
    badge: "Newly shared",
    title: name,
    fullTitle: name,
    location: sharerAddress,
    pickupAddress: `Reserved at ${sharerAddress}.`,
    sharer: sharerName,
    sharerKarma: appState.karma + 50,
    price: numericPrice,
    image: uploadedItemDataUrl,
    heroImage: uploadedItemDataUrl,
    isUserCreated: true
  };

  appState.items.unshift(newItem);
  appState.karma += 50;
  appState.stats.neighborsShared += 1;

  updateKarmaDisplay();
  neighborSlideIndex = 0;
  updateNeighborSlider();
  renderNeighborItems();

  // Reset form
  document.getElementById("listItemForm").reset();
  document.getElementById("itemPriceInput").value = "0";
  priceMode = "free";
  document.getElementById("freeNeighborBtn").classList.add("active");
  document.getElementById("pocketPriceBtn").classList.remove("active");
  uploadedItemDataUrl = "";
  document.getElementById("itemUploadLabel").textContent = "+ Add an image of the item";

  showToast("Item placed in Neighbor Shares! (+50 Karma)");
  switchMainSection("neighbor-shares");
});

// Set your UPI (prototype placeholder - does nothing)
document.getElementById("setUpiPrototypeBtn").addEventListener("click", () => {
  // Intentionally no action (prototype)
});

// Confirm Placing Karigar (+20 Karma)
document.getElementById("confirmPlaceKarigarBtn").addEventListener("click", () => {
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
  appState.karma += 20;
  appState.stats.thingsMended += 1;

  updateKarmaDisplay();
  renderKarigars();

  // Reset form
  document.getElementById("listKarigarForm").reset();
  uploadedKarigarDataUrl = "";
  document.getElementById("karigarUploadLabel").textContent = "+ Add an image of the person or shop";

  showToast("Karigar pinned to Fix & Mend! (+20 Karma)");
  switchMainSection("fix-mend");
});

// Book Verified Kabadiwala (+15 Karma, prototype booking)
document.getElementById("bookKabadiwalaBtn").addEventListener("click", () => {
  if (!ewasteBooked) {
    ewasteBooked = true;
    appState.karma += 15;
    updateKarmaDisplay();
  }
});

/* =========================================================
   INITIALIZE APPLICATION
   ========================================================= */
updateKarmaDisplay();
startHomeAutoSlide();
updateNeighborSlider();
startNeighborAutoSlide();
renderNeighborItems();
renderKarigars();