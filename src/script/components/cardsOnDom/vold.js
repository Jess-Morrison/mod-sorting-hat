// Create Voldy House Card

const voldyCard = (array) => {
  let voldyDomString = " ";
  for (let former of array) {
    console.log(former);
    if (former.expelled === false || true) {
      voldyDomString += `<div class="card" style="width: 18rem;">
<img src="darkcloud.jpg" class="card-img-top" alt="photo of dark clouds">
<div class="card-body">
<p class="card-text1"> Student: ${former.name}</p>
<p class="card-text3" id"${former.expelled} "> Expelled: Yes, and can never return!</p>
<p class="card-text2"> Former House: ${former.house}</p>
</div>
</div>`;
    }
  }
  renderToDom("#voldyContainer", voldyDomString);
};
