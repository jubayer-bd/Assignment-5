// ===== Grab Counters =====
const wishlistCounter = document.querySelector("#wishlistCounter span");
const coinsCounter = document.querySelector("#coinsCounter span");
const copyCounter = document.querySelector("#copyCounter span");

// ===== Grab Call History =====
const callHistory = document.getElementById("callHistory");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// ===== Initial Values =====
let wishlistCount = 0;
let copyCount = 0;
let coins = parseInt(coinsCounter.textContent);

// ===== Loop Through All Cards =====
document.querySelectorAll(".card").forEach((card) => {
  const serviceName = card.querySelector(".service-name").textContent;
  const serviceNumber = card.querySelector(".service-number").textContent;
  const copyBtn = card.querySelector(".copy-btn");
  const callBtn = card.querySelector(".call-btn");
  const wishlistBtn = card.querySelector(".wishlist-btn");

  // ---- Copy Button ----
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(serviceNumber).then(() => {
      copyCount++;
      copyCounter.textContent = copyCount;
      alert(`Copied: ${serviceNumber}`);
    });
  });

  // ---- Call Button ----
  callBtn.addEventListener("click", () => {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinsCounter.textContent = coins;

    alert(`Calling ${serviceName} (${serviceNumber})`);

    // add history
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center p-2 bg-[#f9f9f9] rounded-md shadow";

    li.innerHTML = `
      <div>
        <p class="font-bold">${serviceName}</p>
        <p class="text-sm text-gray-600">${serviceNumber}</p>
      </div>
      <span class="text-sm text-gray-500">${new Date().toLocaleTimeString()}</span>
    `;

    callHistory.prepend(li); // newest on top
  });

  // ---- Wishlist Button ----
  wishlistBtn.addEventListener("click", () => {
    wishlistCount++;
    wishlistCounter.textContent = wishlistCount;
  });
});

// ===== Clear Call History =====
clearHistoryBtn.addEventListener("click", () => {
  callHistory.innerHTML = "";
});
