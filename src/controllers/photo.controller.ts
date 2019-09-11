import { Request, Response } from 'express';

export function HelloWorld(req: Request, res: Response): Response {
	return res.send('Hello world');
}
