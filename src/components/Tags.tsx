import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useHomeStyles } from 'pages/Home/theme';
import { selectIsTagsLoaded, selectTagsItems } from 'redux/ducks/tags/selector';

interface TagsProps {
	classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
	const items = useSelector(selectTagsItems);
	const isLoaded = useSelector(selectIsTagsLoaded);

	if (!isLoaded) {
		return null;
	}

	return (
		<Paper className={classes.rightSideBlock}>
			<Paper className={classes.rightSideBlockHeader} variant='outlined'>
				<b>Актуальные темы</b>
			</Paper>
			<List>
				{items.map((obj) => (
					<React.Fragment key={obj._id}>
						<ListItem className={classes.rightSideBlockItem}>
							<Link to={`/home/tags/search?q=${obj.name}`}>
								<ListItemText
									primary={obj.name}
									secondary={
										<Typography component='span' variant='body2'>
											Твитов: {obj.count}
										</Typography>
									}
								/>
							</Link>
						</ListItem>

						<Divider component='li' />
					</React.Fragment>
				))}
			</List>
		</Paper>
	);
};
