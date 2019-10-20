import React from "react";

class About extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => {
        return posts.filter((item, i) => {
          return item.id <= 10;
        });
      })
      .then(posts => {
        console.log("2", posts);
        this.setState({
          posts
        });
      });
  }
  render() {
    return (
      <div className="container">
        <h2 className="center">About page</h2>
        {!this.state.posts.length ||
          this.state.posts.map(post => {
            return (
              <div key={post.id} className="row">
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-image">
                      <img src="https://marketing.twitter.com/content/dam/marketing-twitter/na/en/solutions/adspecs/mastheadimages/masthead-website-card-v2-twitter-marketing-ad-specs.png" />
                      <span className="card-title">{post.title}</span>
                      <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">+</i>
                      </a>
                    </div>
                    <div className="card-content">
                      <p>{post.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default About;
