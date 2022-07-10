import React, { useState, useEffect, useRef } from 'react';
import useHistory from './hooks/useHistory';
import clearInput from './utils/utils';
import getWeather from './api/index';
import * as commands from './utils/commands';
import banner from './utils/banner';

function App() {
	const [history, updateHistory, deleteHistory] = useHistory();
	const [inputText, setInputText] = useState('');
	const historyEndRef = useRef(null);
	const scrollToBottom = () => { historyEndRef.current.scrollIntoView({ behavior: 'auto' }); };

	async function commandExec(textInputValue) {
		let apiReq;

		const splittedInput = textInputValue.trim().split(' ');
		clearInput();

		switch (splittedInput[0].toLowerCase()) {
		case 'about':
			updateHistory([`> ${splittedInput[0]}`, commands.about()]);
			break;

		case 'banner':
			updateHistory([`> ${splittedInput[0]}`, banner()]);
			break;

		case 'clear':
			deleteHistory();
			break;

		case 'date':
			updateHistory([`> ${splittedInput[0]}`, commands.date()]);
			break;

		case 'echo':
			updateHistory([`> ${splittedInput[0]}`, textInputValue.slice(5)]);
			break;

		case 'github':
			updateHistory([`> ${splittedInput[0]}`, commands.github()]);
			break;

		case 'help':
			updateHistory([`> ${splittedInput[0]}`, commands.help()]);
			break;

		case 'instagram':
			updateHistory([`> ${splittedInput[0]}`, commands.instagram()]);
			break;

		case 'linkedin':
			updateHistory([`> ${splittedInput[0]}`, commands.linkedin()]);
			break;

		case 'mail':
			updateHistory([`> ${splittedInput[0]}`, commands.mail()]);
			break;

		case 'man':
			updateHistory([`> ${textInputValue}`, commands.man(splittedInput[1])]);
			break;

		case 'projects':
			updateHistory([`> ${splittedInput[0]}`, commands.projects()]);
			break;

		case 'repo':
			updateHistory([`> ${splittedInput[0]}`, commands.repo()]);
			break;

		case 'theme':
			updateHistory([`> ${textInputValue}`, commands.theme(splittedInput[1])]);
			break;

		case 'twitter':
			updateHistory([`> ${splittedInput[0]}`, commands.twitter()]);
			break;

		case 'weather':
			apiReq = await getWeather(splittedInput[1]);
			updateHistory([`> ${textInputValue}`, apiReq]);
			break;

		case 'whoami':
			updateHistory([`> ${splittedInput[0]}`, commands.whoami()]);
			break;

		default:
			updateHistory([`> ${textInputValue}`, commands.noCommand(textInputValue)]);
			break;
		}
	}

	function onInputChange(evt) {
		const trimmedInput = evt.target.value;
		setInputText(trimmedInput);
	}

	function formSubmit(evt) {
		evt.preventDefault();

		if (inputText !== '') { commandExec(inputText); }

		setInputText('');
	}

	useEffect(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			commands.theme('light');
		} else {
			commands.theme('dark');
		}

		updateHistory(['', banner()]);
		document.getElementById('termInput').focus();
	}, []);

	useEffect(scrollToBottom, [history]);

	return (
		<div className="terminal">
			<div id="termHistory">
				{history.map((results) => (
					results.map((result) => (
						<p className="text-line">{result}</p>
					))
				))}
				<div ref={historyEndRef} />
			</div>

			<form id="form" onSubmit={(evt) => formSubmit(evt)}>
				<label id="inputLabel" className="text-line" htmlFor="termInput">guest@bsh $ </label>
				<input id="termInput" className="text-line" value={inputText} type="text" placeholder="Type 'help' for more info..." autoComplete="off" onChange={(evt) => onInputChange(evt)} />
			</form>
		</div>
	);
}

export default App;
