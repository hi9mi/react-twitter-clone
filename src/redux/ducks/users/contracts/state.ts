import { User } from "redux/ducks/user/contracts/state";
import { LoadingStatus } from "redux/types";


export interface UsersState {
	items: User[];
	LoadingStatus: LoadingStatus;
}
