import React, { useEffect } from 'react';
import { addTextToResults, scrollToBottomOfResults, clearInput } from './utils/utils';
import banner from './utils/banner';

function App() {
	function run() {
		addTextToResults(banner);
		document.getElementById('termInput').focus();

		document.addEventListener('keydown', () => {
			document.getElementById('form').onsubmit = (evt) => {
				evt.preventDefault();
				const inputText = document.getElementById('termInput').value.trim();

				if (inputText !== '') {
					textReplies(inputText);
				}

				window.scrollTo(0, document.body.scrollHeight);
			};

			scrollToBottomOfResults();

			const postHelpList = () => {
				const helpKeyWords = [
					'Available commands:',
					'clear',
					'help',
					'whoami',
				].join('<br>');
				addTextToResults(helpKeyWords);
			};

			const textReplies = (textInputValue) => {
				addTextToResults(`> ${textInputValue}`);

				const splittedInput = textInputValue.split(' ');

				switch (splittedInput[0].toLowerCase()) {
				case 'banner':
					clearInput();
					addTextToResults(banner);
					break;

				case 'clear':
					clearInput();
					document.getElementById('termHistory').innerHTML = '';
					break;

				case 'help':
					clearInput();
					postHelpList();
					break;

				case 'whoami':
					clearInput();
					addTextToResults('guest');
					break;

				default:
					clearInput();
					addTextToResults('<p><i>bsh: command not found: ' + `<b>${textInputValue}</b>` + '</i></p>');
					break;
				}
			};
		});
	}

	useEffect(() => {
		document.title = '~ (-bsh)';
		run();
	}, []);

	return (
		<div className="terminal">
			<div id="termHistory" />

			<form id="form">
				<label id="inputLabel" htmlFor="termInput">guest@bsh $ </label>
				<input id="termInput" type="text" placeholder="Type 'help' for more info..." autoComplete="off" />
			</form>
		</div>
	);
}

export default App;
