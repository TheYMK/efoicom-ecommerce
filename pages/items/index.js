import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Filters from '../../components/items/Filters';
import ItemsDisplay from '../../components/items/ItemsDisplay';
import Layout from '../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItems, fetchItemsByFilter } from '../../actions/item';
import { toast } from 'react-toastify';
import { getCategories } from '../../actions/category';
import { getSubs } from '../../actions/sub';

const AllProductsPage = ({ allProductsFromDB, allServicesFromDB, allCategoriesFromDB, allSubsFromDB }) => {
	const [ values, setValues ] = useState({
		allItems: [ ...allProductsFromDB, ...allServicesFromDB ],
		allCategories: allCategoriesFromDB,
		allSubs: allSubsFromDB
	});

	const { allItems } = values;

	const dispatch = useDispatch();
	const { search, filter } = useSelector((state) => ({ ...state }));
	const { text, island_choice } = search;
	const { byCategory, bySub, byType } = filter;

	const [ selectedIsland, setSelectedIsland ] = useState(island_choice);
	const [ selectedType, setSelectedType ] = useState(byType);
	const [ selectedCategories, setSelectedCategories ] = useState(byCategory);
	const [ selectedSub, setSelectedSub ] = useState(bySub);
	const [ selectedRating, setSelectedRating ] = useState(0);

	const fetchItems = (arg) => {
		fetchItemsByFilter(arg)
			.then((res) => {
				setValues({ ...values, allItems: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// ************************************************
	//		1 .load items on user search input
	// ************************************************
	useEffect(
		() => {
			if (text === '') {
				setValues({ ...values, allItems: [ ...allProductsFromDB, ...allServicesFromDB ] });
			} else {
				const delayed = setTimeout(() => {
					fetchItems({ query: { text, island_choice } });
				}, 300);

				return () => clearTimeout(delayed);
			}
		},
		[ text, island_choice ]
	);

	// ************************************************
	//		2 .load items on provider island selected
	// ************************************************
	const handleIslandChange = (e) => {
		// START RESET PREVIOUS SEARCH OPTIONS
		dispatch({
			type: 'SEARCH_QUERY',
			payload: { text: '', island_choice: 'allIslands' }
		});
		setSelectedCategories([]);
		setSelectedRating(0);
		setSelectedSub('');
		setSelectedType('all');
		// END RESET PREVIOUS SEARCH OPTIONS

		setSelectedIsland(e.target.value);
		fetchItems({ island: e.target.value });
	};

	// ************************************************
	//		3 .load items on category selected
	// ************************************************

	// This bit of code is for when the user selects a category from the home page
	useEffect(
		() => {
			if (byCategory.length > 0) {
				fetchItems({ category: selectedCategories });
			} else {
				setValues({ ...values, allItems: [ ...allProductsFromDB, ...allServicesFromDB ] });
			}
		},
		[ byCategory ]
	);

	const handleCategoriesChange = (e) => {
		// START RESET PREVIOUS SEARCH OPTIONS
		dispatch({
			type: 'SEARCH_QUERY',
			payload: { text: '', island_choice: 'allIslands' }
		});
		setSelectedRating(0);
		setSelectedIsland(island_choice);
		setSelectedSub('');
		setSelectedType('all');

		// END RESET PREVIOUS SEARCH OPTIONS

		let inTheState = [ ...selectedCategories ];
		let justChecked = e.target.value;
		let foundInTheState = inTheState.indexOf(justChecked);

		if (foundInTheState === -1) {
			inTheState.push(justChecked);
		} else {
			inTheState.splice(foundInTheState, 1);
		}

		setSelectedCategories(inTheState);
		if (inTheState.length < 1) {
			setValues({ ...values, allItems: [ ...allProductsFromDB, ...allServicesFromDB ] });
		} else {
			console.log(inTheState);
			fetchItems({ category: inTheState });
		}
	};

	// ************************************************
	//		4 .load items on rating selected
	// ************************************************
	const handleRatingChange = (e) => {
		// START RESET PREVIOUS SEARCH OPTIONS
		dispatch({
			type: 'SEARCH_QUERY',
			payload: { text: '', island_choice: 'allIslands' }
		});
		setSelectedCategories([]);
		setSelectedIsland('');
		setSelectedSub('');
		setSelectedType('all');

		// END RESET PREVIOUS SEARCH OPTIONS

		setSelectedRating(e.target.value);
		fetchItems({ rating: e.target.value });
	};

	// ************************************************
	//		5 .load items on sub selected
	// ************************************************

	useEffect(
		() => {
			if (bySub === '') {
				setValues({ ...values, allItems: [ ...allProductsFromDB, ...allServicesFromDB ] });
			} else {
				fetchItems({ sub: selectedSub });
			}
		},
		[ bySub ]
	);

	const handleSubChange = (sub) => {
		// START RESET PREVIOUS SEARCH OPTIONS
		dispatch({
			type: 'SEARCH_QUERY',
			payload: { text: '', island_choice: 'allIslands' }
		});
		setSelectedRating(0);
		setSelectedIsland(island_choice);
		setSelectedCategories([]);
		setSelectedType('all');

		// END RESET PREVIOUS SEARCH OPTIONS

		setSelectedSub(sub);
		fetchItems({ sub: sub });
	};

	// ************************************************
	//		6 .load items on type selected
	// ************************************************

	useEffect(
		() => {
			if (byType === 'all') {
				setValues({ ...values, allItems: [ ...allProductsFromDB, ...allServicesFromDB ] });
			} else {
				fetchItems({ type: selectedType });
			}
		},
		[ bySub ]
	);

	const handleTypeChange = (e) => {
		// START RESET PREVIOUS SEARCH OPTIONS
		dispatch({
			type: 'SEARCH_QUERY',
			payload: { text: '', island_choice: 'allIslands' }
		});
		setSelectedCategories([]);
		setSelectedRating(0);
		setSelectedSub('');
		setSelectedIsland(island_choice);

		// END RESET PREVIOUS SEARCH OPTIONS

		setSelectedType(e.target.value);
		fetchItems({ type: e.target.value });
	};

	return (
		<React.Fragment>
			<Layout>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
				<section className="section-content padding-y">
					<div className="container">
						<div className="card mb-3">
							<div className="card-body">
								<ol className="breadcrumb float-left">
									<li className="breadcrumb-item">
										<a href="/">Accueil</a>
									</li>
									<li className="breadcrumb-item active">Tous les produits</li>
								</ol>
							</div>
						</div>
						<div className="row">
							{/* ASIDE */}

							<Filters
								selectedIsland={selectedIsland}
								handleIslandChange={handleIslandChange}
								selectedType={selectedType}
								handleTypeChange={handleTypeChange}
								selectedCategories={selectedCategories}
								handleCategoriesChange={handleCategoriesChange}
								allCategoriesFromDB={allCategoriesFromDB}
								selectedRating={selectedRating}
								handleRatingChange={handleRatingChange}
								selectedSub={selectedSub}
								handleSubChange={handleSubChange}
								allSubsFromDB={allSubsFromDB}
							/>
							<ItemsDisplay items={allItems} />
						</div>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getAllItems().then((i) => {
		return getCategories().then((c) => {
			return getSubs().then((s) => {
				return {
					props: {
						allProductsFromDB: i.data.allApprovedProducts,
						allServicesFromDB: i.data.allApprovedServices,
						allCategoriesFromDB: c.data,
						allSubsFromDB: s.data
					}
				};
			});
		});
	});
}

export default AllProductsPage;
