const scrollToBottomOfResults = () => {
	const termHistory = document.getElementById('termHistory');
	termHistory.scrollTop = termHistory.scrollHeight;
};

const clearInput = () => {
	document.getElementById('termInput').value = '';
};

export { scrollToBottomOfResults, clearInput };
