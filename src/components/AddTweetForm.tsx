import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Alert from '@material-ui/lab/Alert';

import { useHomeStyles } from 'pages/Home/theme';
import { fetchAddTweet, setAddFormState } from 'redux/ducks/tweets/actionCreatores';
import { AddFormState } from 'redux/ducks/tweets/contracts/state';
import { selectAddFormState } from 'redux/ducks/tweets/selector';
import { selectUserData } from 'redux/ducks/user/selector';
import { AddTweetFormActionButtons } from './AddTweetFormActionButtons';
import { uploaderImages } from 'utils/uploaderImages';

interface AddTweetFormProps {
	classes: ReturnType<typeof useHomeStyles>;
	rowsMax?: number;
}

export interface ImageObj {
	blobUrl: string;
	file: File;
}

const ONE_HUNDRED_PERCENT = 100;

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
	classes,
	rowsMax,
}: AddTweetFormProps): React.ReactElement => {
	const dispatch = useDispatch();
	const user = useSelector(selectUserData);
	const [images, setImages] = React.useState<ImageObj[]>([]);
	const [text, setText] = React.useState<string>('');

	const addFormState = useSelector(selectAddFormState);
	const textLimitPercent = Math.round((text.length / MAX_LENGTH) * ONE_HUNDRED_PERCENT);
	const textCount = MAX_LENGTH - text.length;

	const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
		if (e.currentTarget && e.currentTarget.value.length <= MAX_LENGTH) {
			setText(e.currentTarget.value);
		}
	};

	const handleClickAddTweet = async (): Promise<void> => {
		let result = [];
		dispatch(setAddFormState(AddFormState.LOADING));
		for (let i = 0; i < images.length; i++) {
			const file = images[i].file;
			const { url } = await uploaderImages(file);
			result.push(url);
		}

		dispatch(fetchAddTweet({ text, images: result }));
		setText('');
		setImages([]);
	};

	return (
		<div>
			<div className={classes.addFormBody}>
				<Avatar className={classes.TweetAvatar} alt={`Аватарка пользователя ${user?.fullname}`} src={`${undefined}`} />
				<TextareaAutosize
					onChange={handleChangeTextarea}
					className={classes.addFormTextarea}
					placeholder={'Что происходит?'}
					value={text}
					rowsMax={rowsMax}
				/>
			</div>
			<div className={classes.addFormBottom}>
				<div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
					<AddTweetFormActionButtons images={images} onChangeImages={setImages} />
				</div>
				<div className={classes.addFormBottomRight}>
					{text && (
						<>
							<span>{textCount}</span>
							<div className={classes.addFormCircleProgress}>
								<CircularProgress
									variant='determinate'
									size={20}
									thickness={5}
									value={textLimitPercent > ONE_HUNDRED_PERCENT ? ONE_HUNDRED_PERCENT : textLimitPercent}
									style={
										text.length >= 240 ? { color: '#FF004B' } : text.length >= 200 ? { color: '#FCED2B' } : undefined
									}
								/>
								<CircularProgress
									style={{ color: 'rgba(0, 0, 0, 0.1)' }}
									variant='determinate'
									size={20}
									thickness={5}
									value={100}
								/>
							</div>
						</>
					)}
					<Button
						onClick={handleClickAddTweet}
						disabled={text.length > MAX_LENGTH || !text || addFormState === AddFormState.LOADING}
						color='primary'
						variant='contained'>
						{addFormState === AddFormState.LOADING ? (
							<CircularProgress size={16} color='inherit' style={{ margin: '10px 30px' }} />
						) : (
							'Твитнуть'
						)}
					</Button>
				</div>
			</div>
			{addFormState === AddFormState.ERROR && (
				<Alert severity='error'>Произошла ошибка во время добавления твита 😓</Alert>
			)}
		</div>
	);
};
