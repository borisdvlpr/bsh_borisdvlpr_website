const addTextToResults = (textToAdd) => {
	document.getElementById('termHistory').innerHTML += `<p>${textToAdd}</p>`;
	scrollToBottomOfResults();
};

const scrollToBottomOfResults = () => {
	const terminalResultsDiv = document.getElementById('termHistory');
	terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
};

const clearInput = () => {
	document.getElementById('termInput').value = '';
};

export { addTextToResults, scrollToBottomOfResults, clearInput };
