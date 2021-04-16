import React from 'react';

const Blogs = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Actualités récentes</h4>
				</header>

				<div className="row">
					{/* 1 */}
					<div className="col-md-3">
						<div className="annoucement-card annoucement-card-profile">
							<div className="annoucement-card-header annoucement-card-header-image">
								<a href="#">
									<img className="img" src="/static/images/items/article1.jpg" />
								</a>
								<div className="colored-shadow" />
							</div>
							<div className="annoucement-card-body ">
								<h6 className="annoucement-card-category text-info">Annonce 1</h6>

								<p className="annoucement-card-description">
									Don't be scared of the truth because we need to restart the human foundation in
									truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
									back is...
								</p>
								<button className="btn btn-primary">Lire plus</button>
							</div>
						</div>
					</div>
					{/* 2 */}
					<div className="col-md-3">
						<div className="annoucement-card annoucement-card-profile">
							<div className="annoucement-card-header annoucement-card-header-image">
								<a href="#">
									<img className="img" src="/static/images/items/article2.jpg" />
								</a>
								<div className="colored-shadow" />
							</div>
							<div className="annoucement-card-body ">
								<h6 className="annoucement-card-category text-info">Annonce 2</h6>

								<p className="annoucement-card-description">
									Don't be scared of the truth because we need to restart the human foundation in
									truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
									back is...
								</p>
								<button className="btn btn-primary">Lire plus</button>
							</div>
						</div>
					</div>
					{/* 3 */}
					<div className="col-md-3">
						<div className="annoucement-card annoucement-card-profile">
							<div className="annoucement-card-header annoucement-card-header-image">
								<a href="#">
									<img className="img" src="/static/images/items/article1.jpg" />
								</a>
								<div className="colored-shadow" />
							</div>
							<div className="annoucement-card-body ">
								<h6 className="annoucement-card-category text-info">Annonce 3</h6>

								<p className="annoucement-card-description">
									Don't be scared of the truth because we need to restart the human foundation in
									truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
									back is...
								</p>
								<button className="btn btn-primary">Lire plus</button>
							</div>
						</div>
					</div>
					{/* 4 */}
					<div className="col-md-3">
						<div className="annoucement-card annoucement-card-profile">
							<div className="annoucement-card-header annoucement-card-header-image">
								<a href="#">
									<img className="img" src="/static/images/items/article2.jpg" />
								</a>
								<div className="colored-shadow" />
							</div>
							<div className="annoucement-card-body ">
								<h6 className="annoucement-card-category text-info">Annonce 4</h6>

								<p className="annoucement-card-description">
									Don't be scared of the truth because we need to restart the human foundation in
									truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
									back is...
								</p>
								<button className="btn btn-primary">Lire plus</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Blogs;
