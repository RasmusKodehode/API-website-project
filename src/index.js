const appElement = document.getElementById("app");

const mainUrl = "https://tronalddump.io/random/quote";

const mainContent = document.createElement("div");
const description = document.createElement("h2");
description.textContent =
  "Get a random quote of the dumbest things Donald Trump said!";
appElement.append(description);

async function getAPI() {
  const fetchRequest = await fetch(mainUrl);
  const fetchData = await fetchRequest.json();
  console.log(fetchData.value);
  return fetchData;
}

let Button = document.createElement("button");
Button.textContent = "Click for random quote";
Button.id = "quote-button";
appElement.append(Button);
Button.addEventListener("click", async () => {
  const TrumpQuote = await getAPI();
  const quoteElement = document.createElement("p");
  quoteElement.id = "quote-element";
  mainContent.innerHTML = "";
  quoteElement.textContent = TrumpQuote.value;
  mainContent.append(quoteElement);
});

appElement.append(mainContent);
