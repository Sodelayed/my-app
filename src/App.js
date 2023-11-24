import React, { Component } from 'react';
import { Board } from './components/Board';
import { connect } from 'react-redux';
import { REFRESH_GAME } from './actions';

class AppContainer extends Component {
	constructor(props) {
		super(props);

		this.state = 0;
	}
	headerInfo() {
		if (this.props.winner) {
			return `Победитель ${this.props.winner} !`;
		} else if (this.props.turn === 9) {
			return 'Ничья!';
		} else {
			return `Сейчас ходит ${this.props.xTurn ? 'X' : 'O'}`;
		}
	}
	render() {
		return (
			<div className="min-h-screen w-full flex justify-center items-center flex-col">
				<p className="m-0 text-4xl">{this.headerInfo()}</p>
				<Board />
				<button
					className={
						this.props.winner || this.props.turn === 9
							? 'w-[200px] h-[35px] cursor-pointer color text-zinc-50 bg-black border-[1px solid black] p-0 hover:bg-green-100 hover:text-black hover:transition-[0,3s all ease] hover:border-[1px solid rgb(0,0,0)]'
							: 'w-[200px] h-[35px] border-[1px solid black] p-0 opacity-0'
					}
					onClick={this.props.refreshGame}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	winner: state.winner,
	turn: state.turn,
	xTurn: state.xTurn,
});
const mapDispatchToProps = (dispatch) => {
	return {
		refreshGame: () => dispatch(REFRESH_GAME),
	};
};
export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
