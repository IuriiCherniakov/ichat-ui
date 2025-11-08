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
}

export const useGetMe = () => {
	return useQuery<GetMeQuery>(GET_ME);
};
