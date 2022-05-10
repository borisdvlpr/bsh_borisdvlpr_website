import packageJson from '../../package.json';
import { date } from './commands';

const banner = () => `Last login: ${date()} on ttys000

 /$$$$$$$   /$$$$$$  /$$   /$$ 
| $$__  $$ /$$__  $$| $$  | $$      
| $$  \\ $$| $$  \\__/| $$  | $$      
| $$$$$$$ |  $$$$$$ | $$$$$$$$     
| $$__  $$ \\____  $$| $$__  $$ 
| $$  \\ $$ /$$  \\ $$| $$  | $$   
| $$$$$$$/|  $$$$$$/| $$  | $$
|_______/  \\______/ |__/  |__/ v${packageJson.version}
	
`;

export default banner;
