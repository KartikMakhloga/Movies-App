import React from "react";

class Search extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>Showing 9 movies</p>
        <button type="button" class="btn btn-primary mb-4">
          New
        </button>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
      </div> 
    );
  }
}

export default Search;