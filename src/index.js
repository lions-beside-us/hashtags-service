import React from "react";
import ReactDOM, { render } from "react-dom";
import axios from 'axios';
// import styled from 'styled-components'

const tolysHashtags = {
  backgroundColor: '#999',
  border: 'none',
  color: 'white',
  padding: '5px 8px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '16px',
  fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
  fontSize: '14px',
  cursor: 'pointer'
};

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

  onMouseOver(event) {
    const el = event.target;
    el.style.backgroundColor = '#333';
    el.style.pointer = 'cursor';
  };

  onMouseOut(event) {
    const el = event.target;
    el.style.backgroundColor = '#999';
    el.style.pointer = 'cursor'
  };

  componentDidMount() {
    let hashtagsId = window.location.pathname.substring(1);
    this.getHashtags(hashtagsId);
  }

  render() {
    return (
      <div>
          {
            this.state.hashtags.map(hashtag =>
                <span
                  style={tolysHashtags}
                  onMouseEnter={event => this.onMouseOver(event)}
                  onMouseOut={event => this.onMouseOut(event)}
                >
                  #{hashtag}
                </span>
            )
          }
      </div>
    );
  }

};

ReactDOM.render(<App />, document.querySelector("#hashtags"));