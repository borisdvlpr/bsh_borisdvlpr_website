import { useState } from 'react';

export default function useHistory() {
	const [history, setHistory] = useState([]);

	const updateHistory = (command) => {
		if (command[0] !== undefined && command[1] !== undefined) {
			const historyCopy = [...history];
			historyCopy.push(command);
			setHistory(historyCopy);
		}
	};

	const deleteHistory = () => {
		setHistory([]);
	};

	return [history, updateHistory, deleteHistory];
}
