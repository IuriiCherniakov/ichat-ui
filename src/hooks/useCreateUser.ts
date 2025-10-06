import {gql} from "@apollo/client";
import {useMutation} from "@apollo/client/react";

interface CreateUserInput {
	email: string;
	password: string;
}

// type CreateUserMutation = {
// 	createUser: (createUserData: CreateUserInput) => Promise<User>;
// };

const CREATE_USER_MUTATION = gql`
	mutation CreateUserMutation($createUserInput: CreateUserInput!) {
		createUser(createUserInput: $createUserInput) {
			_id
			email
		}
	}
`;

const useCreateUser = () => {
	// return useMutation<User, CreateUserInput>(CREATE_USER_MUTATION);
	return useMutation<any, any>(CREATE_USER_MUTATION);
};

export {useCreateUser};
