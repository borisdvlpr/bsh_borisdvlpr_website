import axios from 'axios';
import 'regenerator-runtime/runtime';

const getWeather = async (location) => {
	if (location !== undefined) {
		try {
			const weather = await axios.get(`https://wttr.in/${location}?format=3`)
				.then((res) => res.data);
			return weather.toUpperCase();
		} catch (err) {
			return `${err.response.status} (${err.response.statusText}): could not make the request :(`;
		}
	}

	return 'Usage: weather <location>.';
};

export default getWeather;
