import React from "react";

class Table extends React.Component {
  state = {
    allMovies: [
      {
        title: "Terminator",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },
      {
        title: "Ter",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },
      {
        title: "Terminator",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },
      {
        title: "Terminator",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },
    ],
  };

  render() {
    let numberOfPages = Math.ceil(this.state.allMovies.length / 5);
    let arr = [];
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i);
    }
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.allMovies.map((el) => {
              return (
                <tr>
                  <td>{el.title}</td>
                  <td>{el.genre}</td>
                  <td>{el.stock}</td>
                  <td>{el.rate}</td>
                  <td>Like</td>
                  <button type="button" class="btn btn-outline-danger m-1">
                    Delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>

            {arr.map(function (el) {
              return (
                <li class="page-item">
                  <a class="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Table;
