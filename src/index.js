import React from "react";
import ReactDOM, { render } from "react-dom";
import axios from 'axios';
// import styled from 'styled-components'

// const DavidTag = styled.span`
//   background-color: #999;
//   border: none;
//   color: white;
//   padding: 5px 8px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   margin: 4px 2px;
//   cursor: pointer;
//   border-radius: 16px;
//   font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
//   font-size: 14px;
//   cursor: pointer;
//   &:hover {
//     background-color: #333;
//   }
// `;

const divStyle = {
  // color: 'blue',
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
  cursor: 'pointer',
  "&:hover": {
    background: '#333'
  }
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

  componentDidMount() {
    let hashtagsId = window.location.pathname.substring(1);
    this.getHashtags(hashtagsId);
  }

  render() {
    return (
      <div>
          {
            this.state.hashtags.map(hashtag =>
                <span style={divStyle}>#{hashtag}</span>
            )
          }
      </div>
    );
  }

};

ReactDOM.render(<App />, document.querySelector("#hashtags"));