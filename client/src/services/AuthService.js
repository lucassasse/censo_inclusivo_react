import axios from 'axios';

const API_URL = 'http://localhost:3500/api';

const AuthService = {
	login: async (cpf, password) => {
		try {
			const response = await axios.post(`${API_URL}/login`, {
				cpf: cpf,
				password,
			});
			return response.data;
		} catch (error) {
			throw error.response.data;
		}
	},
};

export default AuthService;
