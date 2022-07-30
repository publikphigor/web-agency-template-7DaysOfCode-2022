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

featuresList.addEventListener("click", function (e) {
  // Guard clause
  if (!e.target.classList.contains("add-btn")) return;

  let addBtn = e.target;
  let newFeature = `<li data-price="${addBtn
    .closest("li")
    .getAttribute("data-price")}">
      <div class="new-pricing-list"><span>${
        addBtn.previousElementSibling.innerText
      }</span>
      <button class="remove-btn">Remove</button></div></li>`;

  // adds new feature and delete from features list
  pricingList.insertAdjacentHTML("beforeend", newFeature);
  if (addBtn.parentNode.classList.contains("temporary")) {
    featuresList.removeChild(addBtn.parentNode);
  }

  /* 
        increases and updates price plan
        changes plan name and plan description
        changes background as plan changes
    */

  // stop increament at $1000
  price += Number(addBtn.parentNode.getAttribute("data-price"));
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
});

pricingList.addEventListener("click", function (e) {
  // Guard clause
  if (!e.target.classList.contains("remove-btn")) return;

  let remBtn = e.target;
  remBtn.closest("li").remove();
  let removedFeat = `<li data-price="${remBtn
    .closest("li")
    .getAttribute("data-price")}"><span>${
    remBtn.previousElementSibling.innerText
  }</span>
      <button class="add-btn">Add</button>
    </li>`;

  featuresList.insertAdjacentHTML("beforeend", removedFeat);
  Array.from(featuresList.children).forEach((feature) => {
    console.log(feature);
    //if (feature === removedFeat) return;
  });
  //if (featuresList.children.contains(removedFeat)) return;
});
