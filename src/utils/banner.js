import packageJson from '../../package.json';

const banner = [
	`<div class="banner">
██████╗ ███████╗██╗  ██╗███████╗██╗     ██╗
██╔══██╗██╔════╝██║  ██║██╔════╝██║     ██║
██████╔╝███████╗███████║█████╗  ██║     ██║
██╔══██╗╚════██║██╔══██║██╔══╝  ██║     ██║
██████╔╝███████║██║  ██║███████╗███████╗███████╗
╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝  v${packageJson.version}
</div>`,
];

export default banner;
