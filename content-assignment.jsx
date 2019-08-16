import React from "react";

class toggleData extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut."
    };
  }
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <h2>DO YOU Like TO READ ?</h2>
        <p>
          {this.state.show
            ? this.state.content
            : this.state.content.substring(1, 100)}
        </p>
        <button onClick={this.handleClick}>{`show ${
          this.state.show ? "less" : "more"
        }`}</button>
      </div>
    );
  }
}

export default toggleData;
