import React, { Component } from "react";
import "../App.css";

class Feed extends Component {
  state = {
    art: [
      { id: 1, tags: "", urls: "" },
      { id: 2, tags: "", urls: "" },
      { id: 3, tags: "", urls: "" }
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
      { id: 3, tags: "", urls: "" }
    ];

    return fetch(req).then(response => {
      console.log(
        response.json().then(data => {
          let i;
          for (i = 0; i < 3; i++) {
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

  refreshNews = () => {
    let newsURL =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=bfcf40411ab446aea8b4959454740fdc";
    let req = new Request(newsURL);
    let art = [
      { id: 1, tags: "", urls: "" },
      { id: 2, tags: "", urls: "" },
      { id: 3, tags: "", urls: "" }
    ];

    return fetch(req).then(response => {
      console.log(
        response.json().then(data => {
          let i;
          for (i = 0; i < 3; i++) {
            let ranNum = Math.floor(Math.random() * 20);
            let output = data.articles[ranNum].title;
            let urlsOut = data.articles[i].url;
            art[i].tags = output;
            art[i].urls = urlsOut;
            this.setState({
              art: art
            });
          }
        })
      );
    });
  };

  // directBut = () => {
  //   return <Link to="/articles" /></Link>;

  // };

  render() {
    return (
      <React.Fragment>
        <div class="container App">
          <div
            class="card border-dark mb-3 m-5"
            style={{ maxwidth: 18 + "rem" }}
          >
            <h3 class="card-header">What's New Today?</h3>
            <div class="card-body">
              <ul class="list-unstyled">
                {this.state.art.map(x => (
                  <li style={{ listStyle: "none" }}>
                    <div>{x.tags}</div>
                    <a
                      role="button"
                      href={x.urls}
                      key={x.urls}
                      class="btn btn-success m-2"
                      data-id={x.urls}
                    >
                      Check It Out
                    </a>
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

export default Feed;
