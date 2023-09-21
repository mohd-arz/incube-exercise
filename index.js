/* eslint-disable no-alert */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable quotes */

const button = document.querySelector(".btn");
const noodlesInput = document.querySelector(".noodles");
const riceInput = document.querySelector(".rice");
const onionInput = document.querySelector(".onion");
const carrotInput = document.querySelector(".carrot");

const noodlesQuantity = document.querySelector(".noodles-quantity");
const friedRiceQuantity = document.querySelector(".friedrice-quantity");
const orderBtn = document.querySelector(".order-btn");

const ingredients = {
  noodles: 0,
  rice: 0,
  onion: 0,
  carrot: 0,
};

function addItem(item, value) {
  ingredients[item] = value;
}

function getOrder(item, quantity) {
  let testIndex = 0;
  for (const ingredient in ingredients) {
    if (ingredients[ingredient] !== 0) {
      testIndex++;
    }
  }
  if (testIndex === 0) {
    alert("Fill Every Ingredients");
    return;
  }

  if (item === "Noodles") {
    let alerts = "";
    if (ingredients.noodles - 500 * quantity < 0) {
      alerts += `Noodles is not enough, Need ${
        +(500 * quantity) - ingredients.noodles
      } more m/g \n`;
    } else if (alerts === "") ingredients.noodles -= 500 * quantity;

    if (ingredients.onion - 250 * quantity < 0) {
      alerts += `Onion is not enough, Need ${
        +(250 * quantity) - ingredients.onion
      } more m/g \n`;
    } else if (alerts === "") ingredients.onion -= 250 * quantity;

    if (ingredients.carrot - 200 * quantity < 0) {
      alerts += `Carrot is not enough, Need ${
        +(200 * quantity) - ingredients.carrot
      } more m/g`;
    } else if (alerts === "") ingredients.carrot -= 200 * quantity;

    if (alerts !== "") {
      alert(alerts);
    } else {
      alert("Your Noodles is Ready");
    }
  }
  if (item === "Fried Rice") {
    let alerts = "";
    if (ingredients.rice - 500 * quantity < 0) {
      alerts += `Rice is not enough, Need ${
        +(500 * quantity) - ingredients.rice
      } more m/g \n`;
    } else if (alerts === "") ingredients.rice -= 500 * quantity;

    if (ingredients.onion - 250 * quantity < 0) {
      alerts += `Onion is not enough, Need ${
        +(250 * quantity) - ingredients.onion
      } more m/g\n`;
    } else if (alerts === "") ingredients.onion -= 250 * quantity;

    if (ingredients.carrot - 200 * quantity < 0) {
      alerts += `Carrot is not enough, Need ${
        +(200 * quantity) - ingredients.carrot
      } more m/g`;
    } else if (alerts === "") ingredients.carrot -= 200 * quantity;

    if (alerts !== "") {
      alert(alerts);
    } else {
      alert("Your Fried Rice is Ready");
    }
  }
  display();
}

button.addEventListener("click", () => {
  if (noodlesInput.value !== "") {
    addItem("noodles", +noodlesInput.value);
  }
  if (riceInput.value !== "") {
    addItem("rice", +riceInput.value);
  }
  if (onionInput.value !== "") {
    addItem("onion", +onionInput.value);
  }
  if (carrotInput.value !== "") {
    addItem("carrot", +carrotInput.value);
  }
  display();
  noodlesInput.value = "";
  riceInput.value = "";
  onionInput.value = "";
  carrotInput.value = "";
});

orderBtn.addEventListener("click", () => {
  if (noodlesQuantity.value !== "" && friedRiceQuantity.value !== "") {
    getOrder("Noodles", +noodlesQuantity.value);
    getOrder("Fried Rice", +friedRiceQuantity.value);
  } else if (noodlesQuantity.value !== "") {
    getOrder("Noodles", +noodlesQuantity.value);
  } else if (friedRiceQuantity.value !== "") {
    getOrder("Fried Rice", +friedRiceQuantity.value);
  }
  noodlesQuantity.value = "";
  friedRiceQuantity.value = "";
});
function display() {
  const noodlesDisplay = document.querySelector(".noodles-display");
  const riceDisplay = document.querySelector(".rice-display");
  const onionDisplay = document.querySelector(".onion-display");
  const carrotDisplay = document.querySelector(".carrot-display");
  noodlesDisplay.textContent = `Noodle: ${ingredients.noodles} m/g`;
  riceDisplay.textContent = `Rice: ${ingredients.rice} m/g`;
  onionDisplay.textContent = `Onion: ${ingredients.onion} m/g`;
  carrotDisplay.textContent = `Carrot: ${ingredients.carrot} m/g`;
}

display();
