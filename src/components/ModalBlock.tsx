import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useStylesSignIn } from '../pages/SignIn';

interface ModalBlockProps {
	title: string;
	children: React.ReactNode;
	classes?: ReturnType<typeof useStylesSignIn>;
	visable?: boolean;
	onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
	title,
	children,
	visable = false,
	onClose,
}: ModalBlockProps): React.ReactElement | null => {
	if (!visable) {
		return null;
	}
	return (
		<Dialog open={visable} onClose={onClose} aria-labelledby='form-dialog-title'>
			<DialogTitle id='form-dialog-title'>
				<IconButton onClick={onClose} color='secondary' aria-label='close'>
					<CloseIcon style={{ fontSize: 26 }} color='primary' />
				</IconButton>
				{title}
			</DialogTitle>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};
