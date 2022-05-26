import renderToDom from "../../utili/utility";
import'bootstrap';
import './style/main.css';
// Create sorting card

const welcomeCard = () => {
  let domString = " ";
  domString += `<div class="sort-card">
<div class="card-header">
  Hello and welcome to hogwarts! 
</div>
<div class="card-body">
  <h5 class="card-title">Please select the sort button to begin</h5>
  <p class="card-text">Today is only the beginning! </p>
 <a  id= "start" onclick="sort()" href="#" class="btn btn-primary">Start</a>
 
</div>
</div>`;

  renderToDom("#introContainer", domString);
};

export default welcomeCard
