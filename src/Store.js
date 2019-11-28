import React, { Component, createContext } from 'react';
const { Provider: Store, Consumer } = createContext();

class Provider extends Component {
	state = {
		items: []
	}

	actions = {
		add: item => {
			this.setState({ items: [...this.state.items, item] });
		}
	}

	render() {
		const { state, actions } = this;

		return (
			<Store value={{ state, actions }}>{this.props.children}</Store>
		)
	}
}

export { Provider, Consumer }
