import React from 'react';

const Filters = () => {
	return (
		<aside className="col-md-2">
			<article className="filter-group">
				<h6 className="title">
					<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">
						{' '}
						Product type{' '}
					</a>
				</h6>
				<div className="filter-content collapse show" id="collapse_1">
					<div className="inner">
						<ul className="list-menu">
							<li>
								<a href="#">Shorts </a>
							</li>
							<li>
								<a href="#">Trousers </a>
							</li>
							<li>
								<a href="#">Sweaters </a>
							</li>
							<li>
								<a href="#">Clothes </a>
							</li>
							<li>
								<a href="#">Home items </a>
							</li>
							<li>
								<a href="#">Jackats</a>
							</li>
							<li>
								<a href="#">Somethings </a>
							</li>
						</ul>
					</div>
				</div>
			</article>
			<article className="filter-group">
				<h6 className="title">
					<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2">
						{' '}
						Brands{' '}
					</a>
				</h6>
				<div className="filter-content collapse show" id="collapse_2">
					<div className="inner">
						<label className="custom-control custom-checkbox">
							<input type="checkbox" checked="" className="custom-control-input" />
							<div className="custom-control-label">
								Adidas
								<b className="badge badge-pill badge-light float-right">120</b>{' '}
							</div>
						</label>
						<label className="custom-control custom-checkbox">
							<input type="checkbox" checked="" className="custom-control-input" />
							<div className="custom-control-label">
								Nike
								<b className="badge badge-pill badge-light float-right">15</b>{' '}
							</div>
						</label>
						<label className="custom-control custom-checkbox">
							<input type="checkbox" checked="" className="custom-control-input" />
							<div className="custom-control-label">
								The Noth Face
								<b className="badge badge-pill badge-light float-right">35</b>{' '}
							</div>
						</label>
						<label className="custom-control custom-checkbox">
							<input type="checkbox" checked="" className="custom-control-input" />
							<div className="custom-control-label">
								The cat
								<b className="badge badge-pill badge-light float-right">89</b>{' '}
							</div>
						</label>
						<label className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" />
							<div className="custom-control-label">
								Honda
								<b className="badge badge-pill badge-light float-right">30</b>{' '}
							</div>
						</label>
					</div>
				</div>
			</article>
			<article className="filter-group">
				<h6 className="title">
					<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3">
						{' '}
						Price range{' '}
					</a>
				</h6>
				<div className="filter-content collapse show" id="collapse_3">
					<div className="inner">
						<input type="range" className="custom-range" min="0" max="100" name="" />
						<div className="form-row">
							<div className="form-group col-md-6">
								<label>Min</label>
								<input className="form-control" placeholder="$0" type="number" />
							</div>
							<div className="form-group text-right col-md-6">
								<label>Max</label>
								<input className="form-control" placeholder="$1,0000" type="number" />
							</div>
						</div>
						<button className="btn btn-block btn-primary">Apply</button>
					</div>
				</div>
			</article>
			<article className="filter-group">
				<h6 className="title">
					<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4">
						{' '}
						Sizes{' '}
					</a>
				</h6>
				<div className="filter-content collapse show" id="collapse_4">
					<div className="inner">
						<label className="checkbox-btn">
							<input type="checkbox" />
							<span className="btn btn-light"> XS </span>
						</label>

						<label className="checkbox-btn">
							<input type="checkbox" />
							<span className="btn btn-light"> SM </span>
						</label>

						<label className="checkbox-btn">
							<input type="checkbox" />
							<span className="btn btn-light"> LG </span>
						</label>

						<label className="checkbox-btn">
							<input type="checkbox" />
							<span className="btn btn-light"> XXL </span>
						</label>
					</div>
				</div>
			</article>
			<article className="filter-group">
				<h6 className="title">
					<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5">
						{' '}
						Condition{' '}
					</a>
				</h6>
				<div className="filter-content collapse show" id="collapse_5">
					<div className="inner">
						<label className="custom-control custom-radio">
							<input type="radio" name="myfilter_radio" checked="" className="custom-control-input" />
							<div className="custom-control-label">Any condition</div>
						</label>

						<label className="custom-control custom-radio">
							<input type="radio" name="myfilter_radio" className="custom-control-input" />
							<div className="custom-control-label">Brand new </div>
						</label>

						<label className="custom-control custom-radio">
							<input type="radio" name="myfilter_radio" className="custom-control-input" />
							<div className="custom-control-label">Used items</div>
						</label>

						<label className="custom-control custom-radio">
							<input type="radio" name="myfilter_radio" className="custom-control-input" />
							<div className="custom-control-label">Very old</div>
						</label>
					</div>
				</div>
			</article>
		</aside>
	);
};

export default Filters;
