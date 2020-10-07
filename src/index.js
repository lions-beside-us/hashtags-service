import React from "react";
import ReactDOM, { render } from "react-dom";
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hashtags: []
    }
    this.getHashtags = this.getHashtags.bind(this);
  }

  getHashtags() {
    // console.log('hi');
    axios.get('http://localhost:4001/hashtags/13')
      .then(response => {
        const hashtags = response.data.data;
        this.setState({
          hashtags
        });
      });
  }

  componentDidMount() {
    this.getHashtags();
  }

  render() {
    return (
      <div className="container">
          {
            this.state.hashtags.map(hashtag =>
                <span className="badge badge-pill badge-secondary mr-1">#{hashtag}</span>
            )
          }
      </div>
    );
  }

};

ReactDOM.render(<App />, document.querySelector("#hashtags"));