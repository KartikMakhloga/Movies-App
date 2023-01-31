import React from "react";

class Category extends React.Component {
  state = {
    allGenre: ["Action", "Comedy", "Romance", "Thriller", "Horrer"],
  };

  render() {
    return (
      <ul class="list-group">
        {this.state.allGenre.map((el) => {
          return <li class="list-group-item">{el}</li>;
        })}
      </ul>
    );
  }
}

export default Category;