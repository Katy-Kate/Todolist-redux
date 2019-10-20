import React from "react";
import { connect } from "react-redux";
import Placeholder from "../components/Placeholder";
import { setPosts } from "../actions/postActions";

class Posts extends React.Component {

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => {
        return posts.filter(item => {
          return item.id <= 10;
        });
      })
      .then(posts => {
        this.props.setPosts(posts);
      });
  };

  renderPost = post => {
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
  };

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Posts</h1>
        {!this.props.posts.length ? (
          <Placeholder />
        ) : (
          this.props.posts.map(post => {
            return this.renderPost(post);
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPosts: posts => {
      dispatch(setPosts(posts));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
