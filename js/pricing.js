"use strict";

// Pricing plan

const pricingContainer = document.querySelector(".pricing");
const pricingPlan = document.querySelector(".pricing-plan");

// price of the plan with the $ sign (str)
let amount = document.querySelector(".price");

// price of the plan without the $ sign (number)
let price = +document.querySelector(".price").innerText.slice(1);
const pricingDescription = document.querySelector(".pricing-description");
const pricingList = document.querySelector(".pricing-list");
const featuresList = document.querySelector(".features-list");
const addFeatBtn = featuresList.querySelectorAll("button");
let remFeatBtn = [];
let addedFeat = 0;

addFeatBtn.forEach((button) => {
  button.addEventListener("click", () => {
    let newFeature = document.createRange().createContextualFragment(
      `<li data-price="${button.closest("li").getAttribute("data-price")}">
        <div class="new-pricing-list"><span>${
          button.previousElementSibling.innerText
        }</span>
        <button class="remove-btn">Remove</button></div></li>`
    );

    // adds new feature and delete from features list
    pricingList.appendChild(newFeature);
    if (button.parentNode.classList.contains("temporary")) {
      featuresList.removeChild(button.parentNode);
    }

    /* 
        increases and updates price plan
        changes plan name and plan description
        changes background as plan changes
    */

    // stop increament at $1000
    price += Number(button.parentNode.getAttribute("data-price"));
    if (price < 1000) {
      amount.innerText = `$${price}`;
    } else {
      price = 1000;
      amount.innerText = `$${price}`;
    }

    // change plans based on price
    if (price >= 500 && price < 750) {
      pricingPlan.innerText = "Business Lite";
      pricingContainer.classList.add("business-lite");
      pricingContainer.classList.remove("premium");
      pricingDescription.innerText = `Super-charge your business!`;
    } else if (price >= 750) {
      pricingContainer.classList.remove("business-lite");
      pricingContainer.classList.add("premium");
      pricingPlan.innerText = "Premium";
      pricingDescription.innerText = `The sky is your limit!`;
    }

    removeFeature();
  });
});

function removeFeature() {
  let removedFeat = "";
  // select remove-btn
  remFeatBtn = document.querySelectorAll(".remove-btn");

  remFeatBtn.forEach((btn) => {
    // removes added feature and returns it to the features list
    btn.addEventListener("click", function (e) {
      e.target.closest("li").remove();
      removedFeat = `<li data-price="${btn
        .closest("li")
        .getAttribute("data-price")}"><span>${
        btn.previousElementSibling.innerText
      }</span>
          <button>Add</button>
        </li>`;

      featuresList.insertAdjacentHTML("beforeend", removedFeat);
    });
  });
}
