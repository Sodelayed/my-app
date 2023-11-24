import React, { Component } from 'react';
import { Cell } from './Cell';
import { connect } from 'react-redux';

class BoardContainer extends Component {
	constructor(props) {
		super(props);

		this.state = 0;
	}

	render() {
		return (
			<div className="grid grid-cols-[repeat(3,auto)] m-[20px]">
				{this.props.board.map((el, index) => (
					<Cell key={index} id={index} value={el} />
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	board: state.board,
});

export const Board = connect(mapStateToProps)(BoardContainer);
