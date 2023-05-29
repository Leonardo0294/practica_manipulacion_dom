const data = [
  {
    title: "Card 1",
    description: "Ciudad de Buenos Aires",
    image: "buenosaires"
  },
  {
    title: "Card 2",
    description: "Cataratas de Iguazu",
    image: "cataratas1"
  },
  {
    title: "Card 3",
    description: "Salinas de Jujuy",
    image: "salinasjujuy"
  }
];

const cards = document.getElementsByClassName("card");

for (let i = 0; i < data.length; i++) {
  const card = cards[i];
  const title = card.getElementsByClassName("title")[0];
  const description = card.getElementsByClassName("description")[0];
  const image = card.getElementsByClassName("image")[0];

  title.textContent = data[i].title;
  description.textContent = data[i].description;
  image.src = data[i].image;
}