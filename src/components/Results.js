import { Component } from 'react';
import data from "../csvjson.json";
import React from 'react';
import './Result.css';

class Result extends Component {
  render() {
    let content;

    if (this.props.ans === '') {
      content = data.data.map((slang, index) => (
        <div
          key={index}
          className="slang-item"
          onClick={async () => {
            await navigator.clipboard.writeText(slang.Meaning);
            alert('Text copied!');
          }}
        >
          <div className="slang-text">
            <b>{slang.Slang}</b> -
          </div>
          <div className="meaning-text">{slang.Meaning}</div>
        </div>
      ));
    } else {
      const res = data.data.filter((slang) =>
        slang.Slang.toLowerCase().includes(this.props.ans.toLowerCase())
      );

      if (res.length === 0) {
        content = (
          <div className="no-results">
            <h4>No result Found.</h4>
          </div>
        );
      } else {
        content = res.map((slang, index) => (
          <div
            key={index}
            className="slang-item"
            onClick={async () => {
              await navigator.clipboard.writeText(slang.Meaning);
              alert('Text copied!');
            }}
          >
            <div className="slang-text">
              <b>{slang.Slang}</b> -
            </div>
            <div className="meaning-text">{slang.Meaning}</div>
          </div>
        ));
      }
    }

    return <div className="container">{content}</div>;
  }
}

export default React.memo(Result);
