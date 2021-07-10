import React from 'react';
import { useSelector } from 'react-redux';

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
	handleTypeChange,
	allZonesFromDB,
	selectedZone,
	handleZoneChange
}) => {
	const { lang } = useSelector((state) => ({ ...state }));

	const showIslands = () => (
		<article className="filter-group">
			<h6 className="title">
				<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">
					{' '}
					{lang === 'fr' ? 'Filtrer par île' : 'Filter by island'}{' '}
				</a>
			</h6>
			<div className="filter-content collapse show" id="collapse_1">
				<div className="inner">
					<label className="custom-control custom-radio">
						<input
							type="radio"
							name="allIslands"
							value="allIslands"
							checked={selectedIsland === 'allIslands'}
							className="custom-control-input"
							onChange={handleIslandChange}
						/>
						<div className="custom-control-label">{lang === 'fr' ? 'Toutes les îles' : 'All islands'}</div>
					</label>

					<label className="custom-control custom-radio">
						<input
							type="radio"
							name="ndzuwani"
							value="ndzuwani"
							checked={selectedIsland === 'ndzuwani'}
							onChange={handleIslandChange}
							className="custom-control-input"
						/>
						<div className="custom-control-label">Ndzuwani</div>
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
							name="mwali"
							value="mwali"
							checked={selectedIsland === 'mwali'}
							onChange={handleIslandChange}
							className="custom-control-input"
						/>
						<div className="custom-control-label">Mwali</div>
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
					{lang === 'fr' ? 'Filtrer par catégories' : 'Filter by categories'}{' '}
				</a>
				<br />
				<small>{lang === 'fr' ? 'Selection multiple' : 'Multiple selection'}</small>
			</h6>
			<div className="filter-content collapse" id="collapse_2">
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
					{lang === 'fr' ? 'Filtrer par réputation' : 'Filter by rating'}{' '}
				</a>
			</h6>
			<div className="filter-content collapse" id="collapse_3">
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
						<div className="custom-control-label text-warning">{lang === 'fr' ? 'Tous' : 'All'}</div>
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
					{lang === 'fr' ? 'Filtrer par sous-catégorie' : 'Filter by subcategory'}{' '}
				</a>
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
					{lang === 'fr' ? `Filtrer par type d'article` : 'Filter by type'}{' '}
				</a>
			</h6>
			<div className="filter-content collapse" id="collapse_5">
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
						<div className="custom-control-label">{lang === 'fr' ? 'Tous types' : 'All types'}</div>
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
						<div className="custom-control-label">{lang === 'fr' ? 'Produits' : 'Products'}</div>
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
						<div className="custom-control-label">{lang === 'fr' ? 'Services' : 'Services'}</div>
					</label>
				</div>
			</div>
		</article>
	);

	const showZones = () => (
		<article className="filter-group">
			<h6 className="title">
				<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_6">
					{' '}
					{lang === 'fr' ? 'Filtrer par commune' : 'Filter by region'}{' '}
				</a>
			</h6>
			<div className="filter-content collapse show" id="collapse_6">
				<div className="inner">
					<div className="form-inline mr-auto">
						<select className="form-control" value={selectedZone} onChange={handleZoneChange}>
							<option value="allzones">{lang === 'fr' ? 'Toutes les communes' : 'All regions'}</option>
							{allZonesFromDB.map((zone, index) => (
								<option value={zone._id} key={zone._id}>
									{zone.name} ({zone.island})
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</article>
	);

	return (
		<aside className="col-md-2">
			{showIslands()}
			{showZones()}
			{showCategories()}
			{showTypes()}
			{showRatings()}
			{showSubs()}
		</aside>
	);
};

export default Filters;
