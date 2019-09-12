import { Request, Response } from 'express';

export function createPhoto(req: Request, res: Response): Response {
	return res.json({
		message: 'Subida Correctamente',
	});
}

export function getPhoto(req: Request, res: Response): Response {
	return res.json({
		message: 'foto obtenida',
	});
}
