import renderToDom from "./utili/utility.js";
import { students,badArmy } from "./data/data.js";
import welcomeCard from "./script/components/cardsOnDom/sorting.js";
import studentInfoCard from "./script/components/cardsOnDom/student.js";
import voldyCard from "./script/components/cardsOnDom/vold.js";
  
import form from "./script/components/form/form.js";
import eventListener from "./script/events/event.js";
 import { hide,sort } from "./script/functions/function.js";  
import'bootstrap';
import './style/main.css';


 


// Function to Start Application
const startApp = () => {
  
  eventListener();
  studentInfoCard(students);
  voldyCard(badArmy);
  welcomeCard();
  renderToDom(),
  hide();
  sort();
  form();
};

startApp();
