
import { students,badArmy } from "./data/data.js";
import studentInfoCard from "./students.js"
import voldyCard
  from "./script/components/cardsOnDom/vold.js";
  import'bootstrap';
import './style/main.css';



const eventListener = () => {
  document.querySelector("#buttons").addEventListener("click", (e) => {
    if (e.target.id === "ravenclaw") {
      const ravenclaw = students.filter(
        (student) => student.house === "Ravenclaw"
      );
      studentInfoCard(ravenclaw);
    }
    if (e.target.id === "gryffindor") {
      const gryffindor = students.filter(
        (student) => student.house === "Gryffindor"
      );
      studentInfoCard(gryffindor);
    }
    if (e.target.id === "hufflepuff") {
      const hufflepuff = students.filter(
        (student) => student.house === "Hufflepuff"
      );
      studentInfoCard(hufflepuff);
    }
    if (e.target.id === "slytherin") {
      const slytherin = students.filter(
        (student) => student.house === "Slytherin"
      );
      studentInfoCard(slytherin);
    }
    if (e.target.id === "expelled") {
      let expelled = students.filter(
        (student) => student.expelled === false || true
      );
      studentInfoCard(expelled);
    }
    if (e.target.id === "expelled") {
      let expelled = students.filter(
        (student) => student.expelled === true || false
      );
      studentInfoCard(expelled);
    }

    if (e.target.id === "all") {
      const all = students.filter((student) => student.house !== "all");
      studentInfoCard(all);
    }
    // if(e.target.id === "expel"){
    //   const expel = former.filter((former)=>former.expelled === true)
    //   voldyCard(expel)
    // }
  });

  document.querySelector("#hogCardContainer").addEventListener("click", (e) => {
    const [method, student] = e.target.id.split("--");

    const index = students.findIndex((taco) => taco.id === parseInt(student));

    if (e.target.id.includes("delete")) {
      badArmy.push(...students.splice(index, 1));
      voldyCard(badArmy);
      studentInfoCard(students);
    }
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const houseNames = [{house:"Gryffindor",image:"./griff.jpg"}, 
    {house:"Hufflepuff",image:"./huff.jpg"}, {house:"Ravenclaw",image:"./raven.jpg"}, {house:"Slytherin",image:"./sly.jpg"}];

    
  
    let sortHouse = houseNames[Math.floor(Math.random() * houseNames.length)];
   
    
    const userName = {
      id: Math.floor(Math.random() * 10) + 5,
      name: document.querySelector("#name").value,
      house: sortHouse.house,
      expelled: false,
      image: sortHouse.image
    };

    console.log(userName);
    students.push(userName);
    studentInfoCard(students);
    form.reset();
  });
};

export default eventListener
