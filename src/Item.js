import React, { Component } from 'react'

export default class Item extends Component {
	render() {
		return (
			<div>
				<span>{this.props.name}</span>
				<span>{this.props.price}원</span>
				{
					this.props.onAdd &&
					<button onClick={() => {
						const { name, price } = this.props;
						this.props.onAdd({ name, price });
					}}>담기</button>
				}

			</div>
		)
	}
}
