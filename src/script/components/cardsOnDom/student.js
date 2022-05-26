import renderToDom from "../../utili/utility";
import'bootstrap';
import './style/main.css';


const studentInfoCard = (array) => {
  let domString = " ";
  for (let student of array) {
    if (student.expelled === false || true) {
      domString += `<div class="card" style="width: 18rem;">
<img src="${student.image}" class="card-img-top" alt="photo of house">
<div class="card-body">
  <p class="card-text1"> Student: ${student.name}</p>
  <p class="card-text2"> House: ${student.house}</p>
  <button type="button" id="delete--${student.id}" class="btn btn-danger">Expel!</button>
</div>
</div>`;
    }
  }
  renderToDom("#hogCardContainer", domString);
};

export default studentInfoCard
