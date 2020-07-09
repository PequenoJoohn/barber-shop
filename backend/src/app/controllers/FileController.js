import File from '../models/File';

class FileController {
    async store(request, response) {
        const { originalname: name, filename: path } = request.file;

        const file = await File.create({
            name,
            path,
        });

        return response.json(file);
        // return response.json(request.file);
    }
}

export default new FileController();
