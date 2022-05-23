
import welcomeCard from "./sorting.js";
import studentInfoCard from "./students.js"
import voldyCard
  from "./components/cardsOnDom/vold.js";
import form from "./form.js"
import eventListener
 from "./events/event.js";
import renderToDom
 from "./utili/utility";
import'bootstrap';
import '../style/main.css';
 


// Function to Start Application
const startApp = () => {
  renderToDom(),
  studentInfoCard(students);
  voldyCard(badArmy);
  welcomeCard();
  hide();
  // sort();
  form();
  eventListener();
};

startApp();
