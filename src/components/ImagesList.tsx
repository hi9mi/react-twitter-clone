import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

import { useHomeStyles } from 'pages/Home/theme';

interface ImagesListProps {
	classes: ReturnType<typeof useHomeStyles>;
	images: string[];
	removeImage?: (url: string) => void;
}

export const ImagesList: React.FC<ImagesListProps> = ({ classes, images, removeImage }) => {
	if (!images.length) {
		return null;
	}

	return (
		<div className={classes.imageList}>
			{images.map((url) => (
				<div key={url} className={classes.imageListItem}>
					<img src={url} alt={url} style={{ backgroundImage: `url(${url})` }} />
					{removeImage && (
						<IconButton className={classes.imageListRemoveButton} onClick={(): void => removeImage(url)}>
							<ClearOutlinedIcon style={{ fontSize: 16 }} />
						</IconButton>
					)}
				</div>
			))}
		</div>
	);
};
