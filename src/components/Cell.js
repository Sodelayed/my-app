import React, { Component } from 'react';
import { connect } from 'react-redux';
import { STATE_BETWEEN_TURN, SET_WINNER } from '../actions';
import WIN_COMBOS from '../utils/winCombo';

class CellContainer extends Component {
	constructor(props) {
		super(props);
		this.state = 0;
	}
	click(index) {
		const boardCopy = [...this.props.board];
		if (this.props.winner || boardCopy[index]) return;
		boardCopy[index] = this.props.xTurn ? 'X' : 'O';
		this.checkWinner(boardCopy);
		this.props.newTurn(boardCopy);
	}
	checkWinner(board) {
		for (let i = 0; i < WIN_COMBOS.length; i++) {
			const [a, b, c] = WIN_COMBOS[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				this.props.setWinner(board[a]);
			}
		}
	}
	render() {
		return (
			<div
				id={this.props.id}
				className="w-[75px] h-[75px] shadow-[0_0_0_2px_rgb(0,0,0)] text-[50px] cursor-pointer hover:bg-green-100 hover:transition-all"
				onClick={(e) => this.click(e.target.id)}
			>
				{this.props.value}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	winner: state.winner,
	board: state.board,
	xTurn: state.xTurn,
});
const mapDispatchToProps = (dispatch) => {
	return {
		newTurn: (boardCopy) => dispatch(STATE_BETWEEN_TURN(boardCopy)),
		setWinner: (array) => dispatch(SET_WINNER(array)),
	};
};
export const Cell = connect(mapStateToProps, mapDispatchToProps)(CellContainer);
