import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { errorHandler } from "../middleware/errorHandler.js";

export const getUser = async (req, res, next) => {
	const { id } = req.params;
	try {
		const user = await User.findById({ _id: id });
		if (!user) {
			throw Error("could not find the user");
		}
		//exclude the password from the response
		const { password, ...rest } = user._doc;
		//server respond after creating the user successfully
		return res
			.status(200)
			.json({ success: true, data: rest, message: "user fetched" });
	} catch (error) {
		return next(errorHandler(404, error.message));
	}
};

export const postUser = async (req, res, next) => {
	const { username, email, password } = req.body;
	//checking all the required field
	if (!username || !email || !password) {
		return next(errorHandler(400, "all fields are required"));
	}
	//checking if user exist
	const isExistmail = await User.findOne({ email });
	if (isExistmail) {
		return next(errorHandler(400, "user already exist"));
	}
	const isValidEmail = validator.isEmail(email);
	if (!isValidEmail) {
		return next(errorHandler(400, "not a valid email"));
	}
	//check if password is valid
	const isValidPassword = validator.isLength(password, { min: 6 });
	if (!isValidPassword) {
		return next(
			errorHandler(400, "password should be 6 characters at least")
		);
	}
	//encrypt the user password
	const hashedPassword = bcrypt.hashSync(password, 10);

	try {
		const newUser = await new User({
			username,
			email,
			password: hashedPassword,
		}).save();

		//exclude the password from the response
		const { password, ...rest } = newUser._doc;
		//server respond after creating the user successfully
		return res
			.status(201)
			.json({ success: true, data: rest, message: "user created" });
	} catch (error) {
		return next(errorHandler(400, error.message));
	}
};
export const updateUser = async (req, res, next) => {
	const { id } = req.params;
	const { username, email, password } = req.body;
	let hashedPassword = null;
	if (password) {
		hashedPassword = bcrypt.hashSync(password, 10);
	}
	try {
		const user = await User.findByIdAndUpdate(
			{ _id: id },
			{
				$set: {
					username,
					email,
					password: hashedPassword,
				},
			},
			{ new: true }
		);
		//exclude the password from the response
		const { password, ...rest } = user._doc;
		//server respond after creating the user successfully
		return res
			.status(200)
			.json({ success: true, data: rest, message: "user updated" });
	} catch (error) {
		return next(errorHandler(400, error.message));
	}
};
export const deleteUser = async (req, res, next) => {
	const { id } = req.params;
	try {
		const user = await User.findByIdAndDelete({ _id: id });
		//exclude the password from the response
		const { password, ...rest } = user._doc;
		//server respond after creating the user successfully
		return res
			.status(200)
			.json({ success: true, data: rest, message: "user delted" });
	} catch (error) {
		return next(errorHandler(400, error.message));
	}
};
