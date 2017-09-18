	import React from 'react';
	import Cell from './cell';

	class Board extends React.Component {

	render() {
		return (
			<div className='board'>
				{
					this.props.boardArray.map( (val, index) => {
						let rowIndex = index;
						return (
							<div className='board__row' key={rowIndex}>
								{
									val.map((val, colIndex) => {
										return (
											<Cell 
												isAlive={val} 
												key={"" + rowIndex + colIndex} 
												onClick={this.props.toggleCell}
												row={rowIndex}
												col={colIndex}
											/>
										)
									})
								}
							</div>
						)
					})
				}
			</div>
		);
	}
	}

	export default Board;