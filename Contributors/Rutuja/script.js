const animals = [
  {
    img: "alpaca.png",
    id: 1,
    name: "Tiger",
    spirit: "The tiger is all about bravery and independence."
  },
  {
    img: "antelope.png",
    id: 2,
    name: "Bear",
    spirit: "The bear is a symbol of strength and protection."
  },
  {
    img: "alpaca.png",
    id: 3,
    name: "Giraffe",
    spirit: "The giraffe inspires us to see the bigger picture."
  }
];

const container = document.getElementById("animals-container");

animals.forEach(animal => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${animal.img}" alt="${animal.name}">
    <h3>${animal.name}</h3>
    <p>${animal.spirit}</p>
  `;

  container.appendChild(card);
});