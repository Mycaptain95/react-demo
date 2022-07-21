import React from "react";
import './square.less';

export default class Square extends React.Component {
//   props: {
//     value: number;
//   };
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
