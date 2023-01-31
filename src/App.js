import Navbar from "./Navbar";
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";
import React from "react";

function App(props) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row">
        <div className="col-2 p-4">
          <Category />
        </div>
        <div className="col-10 p-4">
          <div className="row">
            <div className="row">
              <div className="col-8">
                <Search />
              </div>
            </div>
          </div>
          <Table />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
