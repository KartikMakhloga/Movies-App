
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";
import React from "react";

class App extends React.Component {
  state = {
    noOfMovies: 0,
    searchString: "",
    currGenre: "All Genre",
  };

  recieveMovieData = (number) => {
    this.setState({ noOfMovies: number });
  };

  recieveSearchParam = (param) => {
    this.setState({ searchString: param });
  };

  receiveCurrGenre = (genre) => {
    this.setState({ currGenre: genre });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2 p-4">
            <Category receiveCurrGenre={this.receiveCurrGenre} />
          </div>
          <div className="col-10 p-4">
            <div className="row">
              <div className="row">
                <div className="col-8">
                  <Search
                    noOfMovies={this.state.noOfMovies}
                    received={this.recieveSearchParam}
                  />
                </div>
              </div>
            </div>
            <Table
              sendData={this.recieveMovieData}
              searchString={this.state.searchString}
              currGenre={this.state.currGenre}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
