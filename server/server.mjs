import express, { json } from 'express';
import cors from 'cors';
import { join, resolve } from 'path';
import { initialize } from './repository.mjs';
import routes from './routes.mjs';
express()
	.use(cors({
		origin: "*",
		methods: "GET,PUT,POST,DELETE",
		optionsSuccessStatus: 200
	}))
	.use(json())
	.use(express.static(join(resolve(), '../client/build')))
	.use('/api', routes)
	.listen(8080, async () => {
		try {
			await initialize();
		} catch (error) {
			console.error(error);
		}
	});