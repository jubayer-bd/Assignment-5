// Counters on the navbar
// const wishlistCounter = document.querySelector("#wishlistCounter span");
const wishlistCounter = document.getElementById("wishlistCounter");

// const coinsCounter = document.querySelector("#coinsCounter span");
const coinsCounter = document.getElementById("coinsCounter");
// const copyCounter = document.querySelector("#copyCounter span");
const copyCounter = document.getElementById("copyCounter");

//  Call History
const callHistory = document.getElementById("callHistory");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

//  Initial Values
let wishlistCount = 0;
let copyCount = 0;
let coins = parseInt(coinsCounter.textContent);

//  Loop for All Cards
document.querySelectorAll(".card").forEach(function (card) {
  const serviceName = card.querySelector(".service-name").textContent;
  const serviceNumber = card.querySelector(".service-number").textContent;
  const copyBtn = card.querySelector(".copy-btn");
  const callBtn = card.querySelector(".call-btn");
  const wishlistBtn = card.querySelector(".wishlist-btn");

  //  Copy Button
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(serviceNumber).then(() => {
      copyCount++;
      copyCounter.textContent = copyCount;
      alert(`Copied: ${serviceNumber}`);
    });
  });

  //  Call Button
  callBtn.addEventListener("click", function()  {
    if (coins < 20) {
      alert(" ❌Not enough coins to make a call! You need at least 20 coins.");
      return;
    }
    alert(`📞Calling ${serviceName} ${serviceNumber} ...`);
    coins -= 20;
    coinsCounter.textContent = coins;

    // add history
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center p-2 bg-[#f9f9f9] rounded-md shadow";

    li.innerHTML = `
      <div>
        <p class="font-bold">${serviceName}</p>
        <p class="text-sm text-gray-600">${serviceNumber}</p>
      </div>
      <span class="text-sm text-gray-500">${new Date().toLocaleTimeString(
        "en-US",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }
      )}</span>
    `;

    callHistory.prepend(li); // newest on top
  });

  //  Wishlist Button
  wishlistBtn.addEventListener("click", function()  {
    wishlistCount++;
    wishlistCounter.textContent = wishlistCount;
  });
});

//  Clear Call History
clearHistoryBtn.addEventListener("click", function()  {
  callHistory.innerHTML = "";
});
