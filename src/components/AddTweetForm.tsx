import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import IconButton from '@material-ui/core/IconButton';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import classNames from 'classnames';
import { useHomeStyles } from 'pages/Home/theme';

interface AddTweetFormProps {
	classes: ReturnType<typeof useHomeStyles>;
	rowsMax?: number;
}

const ONE_HUNDRED_PERCENT = 100;

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
	classes,
	rowsMax,
}: AddTweetFormProps): React.ReactElement => {
	const [text, setText] = React.useState<string>('');
	const textLimitPercent = Math.round((text.length / MAX_LENGTH) * ONE_HUNDRED_PERCENT);
	const textCount = MAX_LENGTH - text.length;

	const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
		if (e.currentTarget && e.currentTarget.value.length <= MAX_LENGTH) {
			setText(e.currentTarget.value);
		}
	};

	const handleClickAddTweet = (): void => {
		setText('');
	};

	return (
		<div>
			<div className={classes.addFormBody}>
				<Avatar
					className={classes.TweetAvatar}
					alt={`Аватарка пользователя UserAvatar`}
					src='https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80'
				/>
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
					<IconButton color='primary'>
						<ImageOutlinedIcon style={{ fontSize: 26 }} />
					</IconButton>
					<IconButton color='primary'>
						<EmojiIcon style={{ fontSize: 26 }} />
					</IconButton>
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
					<Button onClick={handleClickAddTweet} disabled={text.length > MAX_LENGTH} color='primary' variant='contained'>
						Твиттнуть
					</Button>
				</div>
			</div>
		</div>
	);
};
