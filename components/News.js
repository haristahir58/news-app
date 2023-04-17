import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=pakistan&from=2023-02-04&sortBy=publishedAt&apiKey=62477d214f4445549a8fc5cdf9ead97e&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults});
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=pakistan&from=2023-02-04&sortBy=publishedAt&apiKey=62477d214f4445549a8fc5cdf9ead97e&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
 handleNextClick = async () => {
  const totalPages = Math.ceil(this.state.totalResults / 20);
  if (this.state.page + 1 > totalPages) {
    // Do nothing if we're already on the last page
    return;
  }
  const url = `https://newsapi.org/v2/everything?q=pakistan&from=2023-02-04&sortBy=publishedAt&apiKey=62477d214f4445549a8fc5cdf9ead97e&page=${this.state.page + 1}&pageSize=20`;
  const data = await fetch(url);
  const parsedData = await data.json();
  console.log(parsedData);
  this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles,
  });
};

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element, index) => {
  return (
    <div className="col-md-4 my-3" key={index}>
      <NewsItem
        title={
          element.title >= 45
            ? element.title.slice(0, 45)
            : element.title
        }
        description={
          element.description >= 88
            ? element.description.slice(0, 88)
            : element.description
        }
        imageUrl={element.urlToImage}
        newsUrl={element.url}
      />
    </div>
  );
})}


        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
