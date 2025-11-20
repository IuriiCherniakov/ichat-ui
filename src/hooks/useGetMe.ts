import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { User } from "../models/User";

const GET_ME = gql`
	query Me {
		me {
			_id
			email
		}
	}
`;

interface GetMeQuery {
	me: User;
	error: any;
}

export const useGetMe = () => {
	const { data, error } = useQuery<GetMeQuery>(GET_ME);
	return { data, error };
};
