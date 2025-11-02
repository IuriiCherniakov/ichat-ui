// TODO: get rid of any
export const extractErrorMessage = (error: any) => {
	const errorMessage = error.errors[0]?.extensions?.originalError?.message;
	if (Array.isArray(errorMessage)) {
		return formatErrorMessage(errorMessage[0]);
	} else {
		return errorMessage;
	}
};

const formatErrorMessage = (errorMessage: string) => {
	return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};
