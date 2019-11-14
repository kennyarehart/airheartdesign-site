import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import logo from './images/logo.png'

class App extends React.Component {
	render() {
		return (
			<div id="holder">
				<img id="logo" src={logo} />
				<p>design + illustration</p>
				<a href="emailto:kenny@airheartdesign.com">contact</a>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
