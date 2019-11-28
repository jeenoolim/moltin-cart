import React, { Component } from 'react'
import { 소비자 } from './Store'
export default class Test extends Component {
	render() {
		return (
			<div>
				<소비자>
					{
						(data) => {
							console.log(data);
						}
					}
				</소비자>
			</div>
		)
	}
}
