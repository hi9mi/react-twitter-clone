import { axios } from 'core/axios';

interface UploaderImagesReturnProps {
	resolution: string;
	size: string;
	url: string;
}

export const uploaderImages = async (image: File): Promise<UploaderImagesReturnProps> => {
	const formData = new FormData();
	formData.append('image', image);

	const { data } = await axios.post('/upload', formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return data;
};
