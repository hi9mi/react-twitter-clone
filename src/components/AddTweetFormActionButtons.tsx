import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined';

import { ImageObj } from './AddTweetForm';
import { ImagesList } from './ImagesList';
import { useHomeStyles } from 'pages/Home/theme';

interface AddTweetFormActionButtonsProps {
	images: ImageObj[];
	onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void;
}

export const AddTweetFormActionButtons: React.FC<AddTweetFormActionButtonsProps> = ({ images, onChangeImages }) => {
	const classes = useHomeStyles();
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleClickAddTweetFormActionButtons = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const removeImage = (url: string) => {
		onChangeImages((prev) => prev.filter((obj) => obj.blobUrl !== url));
	};

	const handleChangeFileInput = React.useCallback(
		(event: Event) => {
			if (event.target) {
				const target = event.target as HTMLInputElement;
				const file = target.files?.[0];
				if (file) {
					const fileUrlObj = new Blob([file]);
					onChangeImages((prev) => [
						...prev,
						{
							blobUrl: URL.createObjectURL(fileUrlObj),
							file,
						},
					]);
				}
			}
		},
		[onChangeImages],
	);

	React.useEffect(() => {
		const currentInputRef = inputRef.current;

		if (currentInputRef) {
			currentInputRef.addEventListener('change', handleChangeFileInput);
		}

		return () => {
			if (currentInputRef) {
				currentInputRef.removeEventListener('change', handleChangeFileInput);
			}
		};
	}, [handleChangeFileInput]);

	return (
		<div>
			<div>
				<IconButton onClick={handleClickAddTweetFormActionButtons} color='primary'>
					<ImageOutlinedIcon style={{ fontSize: 26 }} />
				</IconButton>
				<IconButton color='primary'>
					<EmojiIcon style={{ fontSize: 26 }} />
				</IconButton>
			</div>
			<input ref={inputRef} type='file' id='upload-input' hidden />
			<ImagesList classes={classes} removeImage={removeImage} images={images.map(obj => obj.blobUrl)} />
		</div>
	);
};
