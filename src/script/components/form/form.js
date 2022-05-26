import renderToDom from "../../utili/utility";
import'bootstrap';
import './style/main.css';

const form = () => {
  let domString = `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Student Name:</label>
    <input type="name" class="form-control" id="name" id="exampleInputEmail1" aria-describedby="name" required>
    <div id="Help" class="form-text">A name is needed in order to be sorted!</div>
    <button type="submit" id="sort" class="btn btn-primary">Sort</button>
    </div>
</form>`;

  renderToDom("#formContainer", domString);
};

export default form
