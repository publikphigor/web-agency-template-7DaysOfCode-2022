// Pricing plan

const pricingContainer = document.querySelector(".pricing");
const pricingPlan = document.querySelector(".pricing-plan");

// price of the plan with the $ sign (str)
let amount = document.querySelector(".price");

// price of the plan without the $ sign (number)
let price = +document.querySelector(".price").innerText.slice(1);

const pricingDescription = document.querySelector(".pricing-description");
const pricingList = document.querySelector(".pricing-list");
const addFeatureButton = document.querySelectorAll(".features-list button");
const featuresList = document.querySelector(".features-list");

addFeatureButton.forEach((button) => {
  button.addEventListener("click", () => {
    let newFeature = document
      .createRange()
      .createContextualFragment(
        `<li>${button.previousElementSibling.innerText}</li>`
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
  });
});
