import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Articles extends Component {
  state = {
    art: [
      { id: 1, tags: "", urls: "" },
      { id: 2, tags: "", urls: "" },
      { id: 3, tags: "", urls: "" },
      { id: 4, tags: "", urls: "" },
      { id: 5, tags: "", urls: "" },
      { id: 6, tags: "", urls: "" },
      { id: 7, tags: "", urls: "" },
      { id: 8, tags: "", urls: "" },
      { id: 9, tags: "", urls: "" },
      { id: 10, tags: "", urls: "" },
      { id: 11, tags: "", urls: "" },
      { id: 12, tags: "", urls: "" },
      { id: 13, tags: "", urls: "" },
      { id: 14, tags: "", urls: "" },
      { id: 15, tags: "", urls: "" },
      { id: 16, tags: "", urls: "" },
      { id: 17, tags: "", urls: "" },
      { id: 18, tags: "", urls: "" },
      { id: 19, tags: "", urls: "" },
      { id: 20, tags: "", urls: "" }
    ]
  };

  componentDidMount() {
    let newsURL =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=bfcf40411ab446aea8b4959454740fdc";
    let req = new Request(newsURL);
    let art = [
      { id: 1, tags: "", urls: "" },
      { id: 2, tags: "", urls: "" },
      { id: 3, tags: "", urls: "" },
      { id: 4, tags: "", urls: "" },
      { id: 5, tags: "", urls: "" },
      { id: 6, tags: "", urls: "" },
      { id: 7, tags: "", urls: "" },
      { id: 8, tags: "", urls: "" },
      { id: 9, tags: "", urls: "" },
      { id: 10, tags: "", urls: "" },
      { id: 11, tags: "", urls: "" },
      { id: 12, tags: "", urls: "" },
      { id: 13, tags: "", urls: "" },
      { id: 14, tags: "", urls: "" },
      { id: 15, tags: "", urls: "" },
      { id: 16, tags: "", urls: "" },
      { id: 17, tags: "", urls: "" },
      { id: 18, tags: "", urls: "" },
      { id: 19, tags: "", urls: "" },
      { id: 20, tags: "", urls: "" }
    ];

    return fetch(req).then(response => {
      console.log(
        response.json().then(data => {
          let i;
          for (i = 0; i < 20; i++) {
            let output = data.articles[i].title;
            let urlsOut = data.articles[i].url;
            art[i].tags = output;
            art[i].urls = urlsOut;
            this.setState({
              art: art
            });
            console.log(this);
          }
        })
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div class="container App">
          <div
            class="card border-dark mb-3 m-5"
            style={{ maxwidth: 18 + "rem" }}
          >
            <h3 class="card-header">Featured Articles</h3>
            <div class="card-body">
              <ul>
                {this.state.art.map(x => (
                  <li style={{ listStyle: "none" }}>
                    <div>{x.tags}</div>
                    <Link to={this.state.art[x.id - 1].urls} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span>
            <button className="btn btn-secondary" onClick={this.refreshNews}>
              New Articles
            </button>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Articles;
