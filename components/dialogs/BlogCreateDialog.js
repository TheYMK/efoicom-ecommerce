import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import DialogContentText from '@material-ui/core/DialogContentText';
import FileUpload from '../FileUpload';
import dynamic from 'next/dynamic'; // because we're gonna use a rich text editor and we only want it to work with the client not the server
import { QuillModules, QuillFormats } from '../../helpers/quill';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
		backgroundColor: '#FF914D'
	},
	title: {
		marginLeft: theme.spacing(2),
		color: '#fff',
		flex: 1
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const BlogCreateDialog = ({
	open,
	handleClose,
	loading,
	setLoading,
	values,
	setValues,
	body,
	setBody,
	checkedCategories,
	setCheckedCategories,
	checkedTags,
	setCheckedTags,
	blogcategories,
	tags,
	handleSubmitBlog
}) => {
	const classes = useStyles();
	const { error, success, formData, images, title } = values;

	const handleChange = (name) => (e) => {
		formData.set(name, e.target.value);
		setValues({ ...values, [name]: e.target.value, formData: formData, error: '' });
	};

	const handleBody = (e) => {
		// console.log(e);
		setBody(e);
		formData.set('body', e);
		if (typeof window !== 'undefined') {
			localStorage.setItem('blog', JSON.stringify(e));
		}
	};

	const handleToggleCategories = (categoryID) => () => {
		setValues({ ...values, error: '' });

		// return the first index or -1
		const clickedCategory = checkedCategories.indexOf(categoryID);
		const allCategories = [ ...checkedCategories ];

		// if it didn't find the index in the state - we can push it into
		if (clickedCategory === -1) {
			allCategories.push(categoryID);
		} else {
			allCategories.splice(clickedCategory, 1);
		}

		setCheckedCategories(allCategories);
		formData.set('blogcategories', allCategories);
	};

	const handleToggleTags = (tagID) => () => {
		setValues({ ...values, error: '' });

		const clickedTag = checkedTags.indexOf(tagID);
		const allTags = [ ...checkedTags ];

		if (clickedTag === -1) {
			allTags.push(tagID);
		} else {
			allTags.splice(clickedTag, 1);
		}
		setCheckedTags(allTags);
		formData.set('tags', allTags);
	};

	const showBlogCategories = () => {
		return (
			blogcategories &&
			blogcategories.map((category, index) => (
				<li className="list-unstyled" key={index}>
					<input className="mr-2" type="checkbox" onChange={handleToggleCategories(category._id)} />
					<label className="form-check-label">{category.name}</label>
				</li>
			))
		);
	};

	const showTags = () => {
		return (
			tags &&
			tags.map((tag, index) => (
				<li className="list-unstyled" key={index}>
					<input className="mr-2" type="checkbox" onChange={handleToggleTags(tag._id)} />
					<label className="form-check-label">{tag.name}</label>
				</li>
			))
		);
	};

	return (
		<div>
			<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Ecrivez votre article ici
						</Typography>
						<Button autoFocus color="inherit" onClick={() => handleSubmitBlog(formData, images)}>
							{loading ? 'En cours...' : `Publier l'article`}
						</Button>
					</Toolbar>
				</AppBar>
				<DialogContent dividers>
					<div className="mt-4 p-3">
						<FileUpload values={values} setValues={setValues} setLoading={setLoading} loading={loading} />
					</div>
					<div className="mt-3">
						<form>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label className="text-muted">Titre de l'article</label>
									<input
										className="form-control"
										value={title}
										type="text"
										placeholder="Votre titre ici..."
										onChange={handleChange('title')}
									/>
								</div>
							</div>
							<div className="form-group">
								<ReactQuill
									modules={QuillModules}
									formats={QuillFormats}
									value={body}
									placeholder="Rediger votre article ici..."
									onChange={handleBody}
								/>
							</div>
						</form>
					</div>
					{/* <Typography gutterBottom>
						Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
					</Typography> */}
					<div className="mt-5">
						<h5>Selectionner des categories</h5>
						<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showBlogCategories()}</ul>

						<hr />
					</div>
					<div>
						<h5>Selectionner des étiquettes</h5>
						<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>

						<hr />
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default BlogCreateDialog;
