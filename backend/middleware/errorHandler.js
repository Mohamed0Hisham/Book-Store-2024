export const errorHandler = (code, msg) => {
	const error = new Error(msg);
	error.statusCode = code;
	return error;
};
