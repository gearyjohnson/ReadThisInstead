import React, { Component } from "react";

//Still need to work on this part of the app, where we scrape with Nightmare and then pass the scraped article to the frontend.
class article extends Component {
  fun = () => {
    console.log(this);
  };

  render() {
    return (
      <React.Fragment>
        <div class="container App">
          <div
            class="card border-dark mb-3 m-5"
            style={{ maxwidth: 18 + "rem" }}
          >
            <h3 class="card-header">Your Article</h3>
            <div class="card-body">
              <button onClick={this.fun}>Test</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default article;
