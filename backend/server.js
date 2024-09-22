// my dependecies
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//my routes
import userRoutes from './routes/user.Routes.js'
import bookRoutes from './routes/book.routes.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config();

//my app
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/book", bookRoutes);
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "internal server error";
	return res.status(statusCode).json({
		success: false,
		message: message,
	});
});

mongoose
	.connect(process.env.DB_URL, {
		dbName: process.env.DB_NAME,
	})
	.then(
		app.listen(process.env.PORT, () => {
			console.log("Server is running");
		})
	)
	.catch((err) => {
		console.log(err.message);
	});
