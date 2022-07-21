import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />
    }
    render(){
        const title = 'Next player: X';

        return (
            <div>
                <div className="title">{title}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <style jsx>
                    {
                        `.board-row { 
                            display: block;
                            font-size:0
                        }
                        .board-row + .board-row > .square{
                            border-top: 0
                        }
                         `
                    }
                </style>
            </div>
        )
    }
}