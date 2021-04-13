import React from 'react';

const Filters = ({
	selectedIsland,
	handleIslandChange,
	selectedCategories,
	handleCategoriesChange,
	allCategoriesFromDB,
	selectedRating,
	handleRatingChange,
	selectedSub,
	handleSubChange,
	allSubsFromDB,
	selectedType,
	handleTypeChange
}) => {
	const showIslands = () => (
		<article className="filter-group">
			<h6 className="title">
				<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">
					{' '}
					Filtrer par île{' '}
				</a>
			</h6>
			<div className="filter-content collapse show" id="collapse_1">
				<div className="inner">
					<label className="custom-control custom-radio">
						<input
							type="radio"
							name="all"
							value="all"
							checked={selectedIsland === 'all'}
							className="custom-control-input"
							onChange={handleIslandChange}
						/>
						<div className="custom-control-label">Toutes les îles</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							name="anjouan"
							value="anjouan"
							checked={selectedIsland === 'anjouan'}
							onChange={handleIslandChange}
							className="custom-control-input"
						/>
						<div className="custom-control-label">Anjouan</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							name="ngazidja"
							value="ngazidja"
							checked={selectedIsland === 'ngazidja'}
							onChange={handleIslandChange}
							className="custom-control-input"
						/>
						<div className="custom-control-label">Ngazidja</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							name="mohéli"
							value="mohéli"
							checked={selectedIsland === 'mohéli'}
							onChange={handleIslandChange}
							className="custom-control-input"
						/>
						<div className="custom-control-label">Mohéli</div>
					</label>
				</div>
			</div>
		</article>
	);

	const showCategories = () => (
		<article className="filter-group">
			<h6 className="title">
				<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2">
					{' '}
					Filtrer par catégories{' '}
				</a>
				<small>Selection multiple</small>
			</h6>
			<div className="filter-content collapse show" id="collapse_2">
				<div className="inner">
					{allCategoriesFromDB.map((category, index) => (
						<label className="checkbox-btn mr-2" key={category._id}>
							<input
								type="checkbox"
								name="category"
								value={category._id}
								checked={selectedCategories.includes(category._id)}
								onChange={handleCategoriesChange}
							/>
							<span className="btn btn-light"> {category.name} </span>
						</label>
					))}
				</div>
			</div>
		</article>
	);

	const showRatings = () => (
		<article className="filter-group">
			<h6 className="title">
				<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3">
					{' '}
					Filtrer par réputation{' '}
				</a>
			</h6>
			<div className="filter-content collapse show" id="collapse_3">
				<div className="inner">
					<label className="custom-control custom-radio">
						<input
							type="radio"
							checked={selectedRating === '5'}
							value={5}
							className="custom-control-input"
							onChange={handleRatingChange}
						/>
						<div className="custom-control-label text-warning">
							<i className="fa fa-star" />
							<i className="fa fa-star" />
							<i className="fa fa-star" />
							<i className="fa fa-star" />
							<i className="fa fa-star" />
						</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							checked={selectedRating === '4'}
							value={4}
							className="custom-control-input"
							onChange={handleRatingChange}
						/>
						<div className="custom-control-label text-warning">
							<i className="fa fa-star" />
							<i className="fa fa-star" />
							<i className="fa fa-star" />
							<i className="fa fa-star" />
						</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							checked={selectedRating === '3'}
							value={3}
							className="custom-control-input"
							onChange={handleRatingChange}
						/>
						<div className="custom-control-label text-warning">
							<i className="fa fa-star" />
							<i className="fa fa-star" />
							<i className="fa fa-star" />
						</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							checked={selectedRating === '2'}
							value={2}
							className="custom-control-input"
							onChange={handleRatingChange}
						/>
						<div className="custom-control-label text-warning">
							<i className="fa fa-star" />
							<i className="fa fa-star" />
						</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							checked={selectedRating === '1'}
							value={1}
							className="custom-control-input"
							onChange={handleRatingChange}
						/>
						<div className="custom-control-label text-warning">
							<i className="fa fa-star" />
						</div>
					</label>
					<label className="custom-control custom-radio">
						<input
							type="radio"
							checked={selectedRating === '0'}
							value={0}
							className="custom-control-input"
							onChange={handleRatingChange}
						/>
						<div className="custom-control-label text-warning">Tous</div>
					</label>
				</div>
			</div>
		</article>
	);

	const showSubs = () => (
		<article className="filter-group">
			<h6 className="title">
				<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4">
					{' '}
					Filtrer par sous-catégorie{' '}
				</a>
				<small>Selection multiple</small>
			</h6>
			<div className="filter-content collapse" id="collapse_4">
				<div className="inner">
					{allSubsFromDB.map((sub, index) => (
						<label className="checkbox-btn mr-2" key={index} onClick={(e) => handleSubChange(sub)}>
							<span className="btn btn-light"> {sub.name} </span>
						</label>
					))}
				</div>
			</div>
		</article>
	);

	const showTypes = () => (
		<article className="filter-group">
			<h6 className="title">
				<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5">
					{' '}
					Filtrer par type d'article{' '}
				</a>
			</h6>
			<div className="filter-content collapse show" id="collapse_5">
				<div className="inner">
					<label className="custom-control custom-radio">
						<input
							type="radio"
							name="all"
							value="all"
							checked={selectedType === 'all'}
							className="custom-control-input"
							onChange={handleTypeChange}
						/>
						<div className="custom-control-label">Tous types</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							name="product"
							value="product"
							checked={selectedType === 'product'}
							onChange={handleTypeChange}
							className="custom-control-input"
						/>
						<div className="custom-control-label">Produits</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							name="service"
							value="service"
							checked={selectedType === 'service'}
							onChange={handleTypeChange}
							className="custom-control-input"
						/>
						<div className="custom-control-label">Services</div>
					</label>
				</div>
			</div>
		</article>
	);
	return (
		<aside className="col-md-2">
			{showIslands()}
			{showCategories()}
			{showTypes()}
			{showRatings()}
			{showSubs()}
		</aside>
	);
};

export default Filters;
