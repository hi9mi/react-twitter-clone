import { axios } from 'core/axios';
import { LoginFormProps } from 'pages/Signin/components/LoginModal';
import { RegisterFormProps } from 'pages/Signin/components/RegisterModal';
import { User } from 'redux/ducks/user/contracts/state';

interface ResponseApi {
	status: string;
	data: User;
}

export const AuthApi = {
	async activate(hash: string): Promise<ResponseApi> {
		const { data } = await axios.get<ResponseApi>('/auth/verify?hash=' + hash);
		return data;
	},

	async sighIn(postData: LoginFormProps): Promise<ResponseApi> {
		const { data } = await axios.post<ResponseApi>('/auth/login', {
			username: postData.email,
			password: postData.password,
		});
		return data;
	},

	async sighUp(postData: RegisterFormProps): Promise<ResponseApi> {
		const { data } = await axios.post<ResponseApi>('/auth/register', {
			email: postData.email,
			username: postData.username,
			fullname: postData.fullname,
			password: postData.password,
			password2: postData.password2,
		});
		return data;
	},

	async getMe(): Promise<ResponseApi> {
		const { data } = await axios.get<ResponseApi>('/users/me');
		return data;
	},

	async getUserInfo(userId: string): Promise<ResponseApi> {
		const { data } = await axios.get<ResponseApi>('/users/' + userId);
		return data;
	},
};

//@ts-ignore
window.AuthApi = AuthApi;
