const today = new Date();
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const options = { weekday: 'short', month: 'short', day: 'numeric' };

const commandsList = [
	'Available commands:\n',
	'about\n',
	'banner\n',
	'clear\n',
	'date\n',
	'echo\n',
	'help\n',
	'instagram\n',
	'linkedin\n',
	'mail\n',
	'man\n',
	'projects\n',
	'theme\n',
	'twitter\n',
	'weather\n',
	'whoami\n',
];

const projectsList = [
	'~ (-bsh)      -> terminal style portfolio (https://borisdev.net)\n',
	'DEISI Website -> Computer Science Department @ ULHT (https://deisi.ulusofona.pt - under development)\n',
];

const about = () => `My main focus from the very fisrt beginning has been frontend development. Yet, for the last few months i've been
focused on backend development. The two main languages I use are JavaScript and Python.\n
For frontend development, I usually interact with React (JSX), Vanilla JS and CSS/SCSS and for backend development 
I mostly use NodeJS. I also have a little experience with Django, MySQL, REST API's and Docker.\n
Alongide this terminal website and a few other personal projects, I'm currently developing the new website for the 
Computer Science department of my college, Universidade Lusófona (ULHT).\n
`;

const date = () => `${today.toLocaleDateString(undefined, options)} ${time}`;
const help = () => commandsList;

const instagram = () => {
	window.open('https://www.instagram.com/__boris________/');
	return 'Opening instagram...';
};

const linkedin = () => {
	window.open('https://www.linkedin.com/in/eduardo-miranda-8105561a6/');
	return 'Opening linkedin...';
};

const mail = () => {
	window.open('mailto:eduffmiranda@gmail.com');
	return 'Starting mail to eduffmiranda@gmail.com ...';
};

const man = (command) => {
	if (command !== undefined) {
		switch (command) {
		case 'about':
			return 'Usage: about\nGives info about my skills and projects.';

		case 'banner':
			return 'Usage: banner\nShows banner of the terminal.';

		case 'clear':
			return 'Usage: clear\nClears the terminal screen.';

		case 'date':
			return 'Usage: date\nShows current date and time.';

		case 'echo':
			return 'Usage: echo <text>\nPrints text inserted.';

		case 'help':
			return 'Usage: help\nShows all available commands.';

		case 'instagram':
			return 'Usage: instagram\nOpens instagram account.';

		case 'linkedin':
			return 'Usage: linkedin\nOpens linkedin account.';

		case 'mail':
			return 'Usage: mail\nOpens email.';

		case 'man':
			return `Usage: man <command>\nShows info and instructions for each command.\n${commandsList.join('')}`;

		case 'projects':
			return 'Usage: projects\nShows list of developed/under development projects.';

		case 'theme':
			return 'Usage: theme <option>\nSwitches terminal theme.\nOptions available: dark | light';

		case 'twitter':
			return 'Usage: twitter\nOpens twitter account.';

		case 'weather':
			return 'Usage: weather <location>\nGives the current weather for a specific location.';

		case 'whoami':
			return 'Usage: whoami\nGives info about me.';

		default:
			return `Usage: man <command>\n${commandsList.join('')}`;
		}
	}

	return `Usage: man <command>\n${commandsList.join('')}`;
};

const projects = () => projectsList;

const theme = (color) => {
	if (color === 'light') {
		document.body.classList.remove('dark-theme');
		document.body.classList.add('light-theme');
		return `Switched to ${color} theme.`;
	} if (color === 'dark') {
		document.body.classList.remove('light-theme');
		document.body.classList.add('dark-theme');
		return `Switched to ${color} theme.`;
	}

	return 'Usage: theme <option>.\nOptions available: dark | light';
};

const twitter = () => {
	window.open('https://twitter.com/__boris________');
	return 'Opening twitter...';
};

const whoami = () => `My name is Eduardo Miranda, a final-year Computer Science student and a self thaught beginner full-stack developer.\n
I was first introduced to programming back in 2015, through a good friend of mine and one year later I decided to 
do my first workshop, called "Let's build a computer game". That’s how I got into Computer Science.\n
When I'm not studying, I like to discover "new sides" of programming, workout, or just to watch a movie... or two. 
Full Stack is the main goal, but I would love to change the way people interact with software, through software.\n
`;

const noCommand = (comm) => `bsh: command not found: ${comm}`;

export {
	about,
	date,
	help,
	instagram,
	linkedin,
	mail,
	man,
	projects,
	theme,
	twitter,
	whoami,
	noCommand,
};
