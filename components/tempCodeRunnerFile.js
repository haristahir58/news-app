          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3">
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