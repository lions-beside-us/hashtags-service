import React from "react";
import ReactDOM, { render } from "react-dom";
import axios from 'axios';
import styled from 'styled-components'

const TolyTag = styled.span`
  background-color: rgb(169,169,169);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hashtags: []
    }
    this.getHashtags = this.getHashtags.bind(this);
  }

  getHashtags(id) {
    // console.log('hi');
    axios.get(`http://localhost:4001/hashtags/${id}`)
      .then(response => {
        const hashtags = response.data.data;
        this.setState({
          hashtags
        });
      });
  }

  componentDidMount() {
    this.getHashtags(1);
  }

  render() {
    return (
      <div className="container">
          {
            this.state.hashtags.map(hashtag =>
                // <span className="badge badge-pill badge-secondary mr-1">#{hashtag}</span>
                <TolyTag>#{hashtag}</TolyTag>
            )
          }
      </div>
    );
  }

};

ReactDOM.render(<App />, document.querySelector("#hashtags"));