const renderToDom = (divID, textToDom) => {
  document.querySelector(divID).innerHTML = textToDom;
};

export default renderToDom
