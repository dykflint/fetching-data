const img = document.querySelector("img");
const newImageButton = document.querySelector("#new-image-button");
newImageButton.addEventListener("click", () => {
  newImage();
});
const searchInput = document.querySelector("#search");
searchInput.onkeypress = function (e) {
  if (!e) e = window.event;
  const keyCode = e.code || e.key;
  if (keyCode === "Enter") {
    const searchQuery = searchInput.value;
    fetchImage(searchQuery);
  }
;
// giphy api call
async function fetchImage(searchTag) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=0IiPFfZdM2HA3lIGvae2dCzCmyVw5b69&s=${searchTag}`,
      { mode: "cors" },
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  } catch (error) {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=0IiPFfZdM2HA3lIGvae2dCzCmyVw5b69&s=404`,
      { mode: "cors" },
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
    console.log(error);
  }
}
function newImage() {
  fetchImage("cat");
}

fetchImage("cat");
