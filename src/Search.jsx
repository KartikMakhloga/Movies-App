import React from "react";

class Search extends React.Component {
  state = {
    currSearchString: "",
  };

  render() {
    return (
      <div>
        <p>Showing {this.props.noOfMovies} movies from the database</p>
        <button type="button" class="btn btn-primary mb-4">
          New
        </button>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            onChange={(e) => {
              this.setState({ currSearchString: e.currentTarget.value });
              this.props.received(this.state.currSearchString)
            }}
          />
        </div>
      </div>
    );
  }
}

export default Search;
