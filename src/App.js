import React from 'react';
import logo from './logo.svg';
import data from './item.json';
import Item from './Item';
import { Provider, Consumer } from './Store';
import './App.css';
// import Test from './Test'

function App() {
	return (
		<div className="App">
			<Provider>
				<Consumer>
					{
						({ actions }) => {
							console.log(actions);
							return data.map((item, i) => {
								return <Item key={`item-${i}`} name={item.name} price={item.price} onAdd={actions.add} />
							})
						}
					}
				</Consumer>
				<hr></hr>
				<div>장바구니</div>
				<hr></hr>
				<Consumer>
					{
						({ state }) => {
							return state.items.map((item, i) => {
								return <Item key={`item-${i}`} name={item.name} price={item.price} />
							})
						}
					}
				</Consumer>
			</Provider>
		</div>
	);
}

export default App;
