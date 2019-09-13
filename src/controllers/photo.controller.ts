import { Request, Response } from 'express';
import photoModel from '../models/photo.model';
import { request } from 'https';

export async function createPhoto(req: Request, res: Response) {
	const { title, description } = req.body;
	const newPhoto = {
		title: title,
		description: description,
		imagePath: req.file.path,
	};

	const photo = new photoModel(newPhoto);
	await photo.save();

	return res.json({
		message: 'Imagen guardada correctamente',
		photo,
	});
}

export async function getPhotos(req: Request, res: Response): Promise<Response> {
	const photos = await photoModel.find({});

	return res.json({
		photos,
	});
}

export async function getPhoto(req: Request, res: Response): Promise<Response> {
	const id = req.params.id;
	const photo = await photoModel.find({ _id: id });
	return res.json({
		photo,
	});
}
