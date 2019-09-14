import { Request, Response } from 'express';
import photoModel, { IPhoto } from '../models/photo.model';
import uuid from 'uuid/v4';
import fs from 'fs-extra';
import path from 'path';

const jsonPhotos = fs.readFileSync('src/db/data.json', 'utf-8');
let photos: IPhoto[] = JSON.parse(jsonPhotos);

export async function createPhoto(req: Request, res: Response): Promise<Response> {
	debugger;
	const { title, description } = req.body;
	const newPhoto = {
		_id: uuid(),
		title: title,
		description: description,
		imagePath: req.file.path,
	};

	// const photo = new photoModel(newPhoto);
	// await photo.save();

	photos.push(newPhoto);

	const jsonPhotos = JSON.stringify(photos);
	fs.writeFileSync('src/db/data.json', jsonPhotos);

	return res.json({
		message: 'Imagen guardada correctamente',
		//photo,
		photo: newPhoto,
	});
}

export async function getPhotos(req: Request, res: Response): Promise<Response> {
	// const photos = await photoModel.find({});
	return res.json({
		photos,
	});
}

export async function getPhoto(req: Request, res: Response): Promise<Response> {
	const id = req.params.id;
	// const photo = await photoModel.find({ _id: id });
	const photo = await photos.find(x => x._id === id);
	return res.json({
		photo,
	});
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
	const id = req.params.id;
	// const photo = await photoModel.findByIdAndRemove(id);

	const photo = await photos.find(x => x._id === id);

	if (photo) {
		await fs.unlink(path.resolve(photo.imagePath));
	}

	const newPhotos = await photos.filter(element => element._id !== id);
	photos = newPhotos;

	const jsonPhotos = JSON.stringify(photos);
	fs.writeFileSync('src/db/data.json', jsonPhotos);

	return res.json({
		message: 'Elemente deleted',
		photo,
	});
}

export async function updatePhoto(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const { title, description } = req.body;

	const updatedPhoto = await photoModel.findByIdAndUpdate(id, {
		title,
		description,
	});

	return res.json({
		message: 'Element Updated',
		phpto: updatedPhoto,
	});
}
