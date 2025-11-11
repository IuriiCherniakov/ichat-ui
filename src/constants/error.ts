import { SnackMessage } from "../interfaces/snack-message.interface";

const UNKNOWN_ERROR_MESSAGE =
	"An unknown error occurred. Please try again later.";
const UNKNOWN_ERROR_SNACK_MESSAGE: SnackMessage = {
	type: "error",
	message: UNKNOWN_ERROR_MESSAGE,
};

export { UNKNOWN_ERROR_SNACK_MESSAGE, UNKNOWN_ERROR_MESSAGE };
