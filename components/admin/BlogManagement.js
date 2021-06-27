import React, { useEffect, useState } from 'react';
import BlogCreateDialog from '../dialogs/BlogCreateDialog';
import AdminMenu from './AdminMenu';
import BlogCategory from './BlogCategory';
import Tag from './Tag';
import { withRouter } from 'next/router'; // so we have access to router props (so that we can maybe grap router parameters)
import { useSelector } from 'react-redux';
import { createBlog, getBlogs, removeBlog } from '../../actions/blog';
import { getBlogCategories } from '../../actions/blogcategory';
import { toast } from 'react-toastify';
import { getTags } from '../../actions/tag';
import Link from 'next/link';

const BlogManagement = ({ router }) => {
	// Grab the blog from local storage
	const getBlogFromLS = () => {
		if (typeof window === 'undefined') {
			return false;
		}

		if (localStorage.getItem('blog')) {
			return JSON.parse(localStorage.getItem('blog'));
		} else {
			return false;
		}
	};
	const [ openBlogCreate, setOpenBlogCreate ] = useState(false);
	const [ blogcategories, setBlogcategories ] = useState([]);
	const [ tags, setTags ] = useState([]);
	const [ checkedCategories, setCheckedCategories ] = useState([]);
	const [ checkedTags, setCheckedTags ] = useState([]);
	const [ body, setBody ] = useState(getBlogFromLS());
	const [ reload, setReload ] = useState(false);
	const [ blogs, setBlogs ] = useState([]);
	const [ values, setValues ] = useState({
		error: '',
		sizeError: '',
		success: '',
		formData: '',
		images: [],
		title: ''
	});

	const [ loading, setLoading ] = useState(false);
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			setValues({ ...values, formData: new FormData() });
			fetchBlogs();
			initBlogCategories();
			initTags();
		},
		[ router, reload ]
	);

	const fetchBlogs = () => {
		getBlogs()
			.then((res) => {
				setBlogs(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const initBlogCategories = () => {
		getBlogCategories()
			.then((res) => {
				setBlogcategories(res.data);
			})
			.catch((err) => {
				console.log(err);
				toast.error(
					`Nous n'avons pas pu avoir la liste des catégories existantes. Veuillez recharger la page.`
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
					`Nous n'avons pas pu avoir la liste des étiquettes existantes. Veuillez recharger la page.`
				);
			});
	};

	const handleOpenBlogCreateDialog = () => {
		setOpenBlogCreate(true);
	};

	const handleCloseBlogCreateDialog = () => {
		setOpenBlogCreate(false);
	};

	const deleteBlog = (slug) => {
		removeBlog(slug, user.token)
			.then((res) => {
				toast.success('Blog supprimé avec succès.');
				setReload(!reload);
			})
			.catch((err) => {
				console.log(err);
				toast.error(`Oops! Nous n'avons pas pu supprimer ce blog. Veuillez réessayer!`);
			});
	};

	const showBlogs = () => (
		<div className="table-responsive">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Titre</th>
						<th scope="col">Catégories</th>
						<th scope="col">Étiquettes</th>
						<th scope="col">Publié le</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{blogs.map((b, i) => (
						<tr key={i}>
							<th scope="row">{i + 1}</th>
							<td>{b.title}</td>
							<td>
								{b.blogcategories.map((c, j) => (
									<div className="tag bg-dark text-white mr-2" key={j}>
										{c.name}
									</div>
								))}
							</td>
							<td>
								{b.tags.map((t, j) => (
									<div className="tag bg-dark text-white mr-2" key={j}>
										{t.name}
									</div>
								))}
							</td>
							<td>{new Date(b.createdAt).toLocaleDateString('en-US')}</td>
							<td>
								<div className="dropdown d-inline-block">
									<button data-toggle="dropdown" className="dropdown-toggle btn btn-primary">
										Cliquer ici
									</button>
									<div className="dropdown-menu dropdown-menu-right">
										<Link href={`/admin/blog/${b.slug}`}>
											<a className="dropdown-item">Modifer</a>
										</Link>

										<button className="dropdown-item" onClick={(e) => deleteBlog(b.slug)}>
											Supprimer
										</button>
									</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	const handleSubmitBlog = (f, i) => {
		// append images to formdata before sending
		// formData.set(images, i);
		setLoading(true);

		if (!i || !i[0]) {
			toast.error(`Vous devez télécharger au moins une image.`);
			setLoading(false);
			return;
		}

		f.set('image', i[0].url);

		// console.log([ ...f ]);

		createBlog(f, user.token)
			.then((res) => {
				if (res.data.error) {
					toast.error(`${res.data.error}`);
					setLoading(false);
				} else {
					setValues({
						...values,
						title: '',
						error: '',
						images: [],
						success: `Nouveau blog publié: ${res.data.title}`
					});

					toast.success(`Votre blog a été publié.`);
					setBody('');
					setBlogcategories([]);
					setTags([]);
					setOpenBlogCreate(false);
					setLoading(false);
					setReload(!reload);
				}
			})
			.catch((err) => {
				console.log(err);
				// toast.error(`${err.message}`);
				toast.error(
					`Oops! Nous n'avons pas pu publier votre blog. Assurez-vous de remplir tous les champs obligatoires. Veuillez réessayer!`
				);
				setLoading(false);
			});
	};

	return (
		<React.Fragment>
			<BlogCreateDialog
				open={openBlogCreate}
				handleClose={handleCloseBlogCreateDialog}
				loading={loading}
				setLoading={setLoading}
				values={values}
				setValues={setValues}
				body={body}
				setBody={setBody}
				checkedCategories={checkedCategories}
				setCheckedCategories={setCheckedCategories}
				checkedTags={checkedTags}
				setCheckedTags={setCheckedTags}
				blogcategories={blogcategories}
				tags={tags}
				handleSubmitBlog={handleSubmitBlog}
			/>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="blog_management" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Catégorie & Étiquette</strong>
								</header>
								<div className="card-body mb-5">
									<div className="row">
										<div className="col-md-6 mt-4">
											<BlogCategory refresh={reload} setRefresh={setReload} />
										</div>
										<div className="col-md-6 mt-4">
											<Tag refresh={reload} setRefresh={setReload} />
										</div>
									</div>
								</div>
							</article>
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Articles</strong>
								</header>
								<div className="card-body mb-5">
									<div className="text-center">
										<button className="btn btn-primary" onClick={handleOpenBlogCreateDialog}>
											Écrire un article
										</button>
									</div>
									<div className="mt-4">{showBlogs()}</div>
								</div>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default withRouter(BlogManagement);
