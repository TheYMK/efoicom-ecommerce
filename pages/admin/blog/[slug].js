import React, { useEffect, useState } from 'react';
import { getSingleBlog, updateBlog } from '../../../actions/blog';
import { withRouter } from 'next/router';
import Layout from '../../../components/Layout';
import AdminProtected from '../../../components/auth/AdminProtected';
import Header from '../../../components/header/Header';
import PageTop from '../../../components/sections/PageTop';
import { useSelector } from 'react-redux';
import { getBlogCategories } from '../../../actions/blogcategory';
import { getTags } from '../../../actions/tag';
import { QuillModules, QuillFormats } from '../../../helpers/quill';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import Router from 'next/router';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const BlogUpdatePage = ({ blog, router }) => {
	const [ body, setBody ] = useState('');
	const [ blogcategories, setBlogcategories ] = useState([]);
	const [ tags, setTags ] = useState([]);
	const [ checkedCategories, setCheckedCategories ] = useState([]);
	const [ checkedTags, setCheckedTags ] = useState([]);
	const [ values, setValues ] = useState({
		title: ''
	});
	const [ loading, setLoading ] = useState(false);

	const { title } = values;
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			initBlog();
			initCategories();
			initTags();
		},
		[ router ]
	);

	const initBlog = () => {
		setValues({ ...values, title: blog.title });
		setBody(blog.body);
		setCategoriesArray(blog.blogcategories);
		setTagsArray(blog.tags);
	};

	const setCategoriesArray = (blogCategories) => {
		let ca = [];
		blogCategories.map((c, i) => {
			ca.push(c._id);
		});

		setCheckedCategories(ca);
	};

	const setTagsArray = (blogTags) => {
		let ta = [];
		blogTags.map((t, i) => {
			ta.push(t._id);
		});
		setCheckedTags(ta);
	};

	const initCategories = () => {
		getBlogCategories()
			.then((res) => {
				setBlogcategories(res.data);
			})
			.catch((err) => {
				console.log(err);
				toast.error(
					`Nous n'avons pas pu avoir la liste des catégories existantes. Veuillez recharger la page!`
				);
			});
	};

	const initTags = () => {
		getTags()
			.then((res) => {
				setTags(res.data);
			})
			.catch((err) => {
				console.log(err);
				toast.error(
					`Nous n'avons pas pu avoir la liste des étiquettes existantes. Veuillez recharger la page!`
				);
			});
	};

	const handleCategoriesToggle = (c) => () => {
		const clickedCategory = checkedCategories.indexOf(c);
		const all = [ ...checkedCategories ];

		if (clickedCategory === -1) {
			all.push(c);
		} else {
			all.splice(clickedCategory, 1);
		}

		setCheckedCategories(all);
	};

	const handleTagsToggle = (t) => () => {
		const clickedTag = checkedTags.indexOf(t);

		const all = [ ...checkedTags ];

		if (clickedTag === -1) {
			all.push(t);
		} else {
			all.splice(clickedTag, 1);
		}

		setCheckedTags(all);
	};

	const findOutCategory = (c) => {
		const result = checkedCategories.indexOf(c);
		if (result !== -1) {
			return true;
		} else {
			return false;
		}
	};

	const findOutTag = (t) => {
		const result = checkedTags.indexOf(t);
		if (result !== -1) {
			return true;
		} else {
			return false;
		}
	};

	const showTags = () => {
		return (
			tags &&
			tags.map((t, i) => (
				<li key={i} className="list-unstyled">
					<input
						onChange={handleTagsToggle(t._id)}
						checked={findOutTag(t._id)}
						type="checkbox"
						className="mr-2"
					/>
					<label className="form-check-label">{t.name}</label>
				</li>
			))
		);
	};

	const showCategories = () => {
		return (
			blogcategories &&
			blogcategories.map((c, i) => (
				<li key={i} className="list-unstyled">
					<input
						onChange={handleCategoriesToggle(c._id)}
						checked={findOutCategory(c._id)}
						type="checkbox"
						className="mr-2"
					/>
					<label className="form-check-label">{c.name}</label>
				</li>
			))
		);
	};

	const updateBlogForm = () => {
		return (
			<form onSubmit={editBlog}>
				<div className="form-group">
					<label className="text-muted">Titre</label>
					<input type="text" className="form-control" value={title} onChange={handleChange('title')} />
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

				<div>
					<button type="submit" className="btn btn-primary">
						{loading ? 'En cours...' : 'Modifier'}
					</button>
				</div>
			</form>
		);
	};

	const handleChange = (name) => (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		// formData.append(name, value);
		setValues({ ...values, [name]: value, error: '' });
	};

	const handleBody = (e) => {
		setBody(e);
		// formData.append('body', e);
	};

	const editBlog = (e) => {
		e.preventDefault();
		setLoading(true);
		let formData = new FormData();
		formData.set('title', title);
		formData.set('blogcategories', checkedCategories);
		formData.set('tags', checkedTags);
		formData.set('body', body);

		// console.log([ ...formData ]);

		updateBlog(blog.slug, formData, user.token)
			.then((res) => {
				if (res.data.error) {
					toast.error(`${res.data.error}`);
					setLoading(false);
				} else {
					toast.success('Modification effectuée.');
					setLoading(false);
					Router.push('/admin/blog-management');
				}
			})
			.catch((err) => {
				console.log(err);
				toast.error(
					`Oops! Echec de l'opération. Un problème est survenu. Assurez vous de remplir tous les champs et de sélectionner au moins une catégorie et une étiquette pour votre article.`
				);
				setLoading(false);
			});
	};

	return (
		<React.Fragment>
			<Layout>
				<AdminProtected>
					<b className="screen-overlay" />
					<header className="section-header">
						<Header />
					</header>
					<PageTop title={'Modifier un blog'} message={''} />
					<section className="section-content bg-white padding-y">
						<div className="container">
							<div className="row">
								<div className="col-md-8">{updateBlogForm()}</div>
								<div className="col-md-4">
									<div>
										<h5>Categories</h5>
										<hr />

										<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showCategories()}</ul>
									</div>
									<div>
										<h5>Étiquettes</h5>
										<hr />
										<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				</AdminProtected>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleBlog(params.slug).then((res) => {
		return {
			props: {
				blog: res.data,
				params
			}
		};
	});
}

export default withRouter(BlogUpdatePage);
