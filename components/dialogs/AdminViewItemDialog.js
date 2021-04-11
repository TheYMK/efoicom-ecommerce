import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Avatar, Badge } from 'antd';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AdminViewItemDialog = ({ open, handleClose, item }) => {
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="sm"
				fullWidth={true}
			>
				<DialogTitle id="alert-dialog-title">Aperçu de l'article</DialogTitle>
				{item.title && (
					<DialogContent>
						<p style={{ color: 'red', fontWeight: '700' }}>À propos de l'article</p>
						<div>
							<strong>Images:</strong>
							<div className="row">
								{item.images &&
									item.images.map((image) => (
										<Badge key={image.public_id} style={{ cursor: 'pointer' }}>
											<Avatar src={image.url} size={100} className="ml-3 mb-3" shape="square" />
										</Badge>
									))}
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<p>
									<strong>Titre de l'article:</strong>
									<br /> {item.title}
								</p>
								<p>
									<strong>Categorie:</strong>
									<br /> <span className="badge rounded-pill bg-success">{item.category.name}</span>
								</p>
								<div>
									<strong>Sous-Catégorie:</strong>
									<br />
									{item.subs.map((sub) => (
										<span key={sub._id} className="mr-2 mt-2 badge rounded-pill bg-primary">
											{sub.name}
										</span>
									))}
								</div>
							</div>
							<div className="col-md-6">
								<p>
									<strong>Type:</strong>
									<br /> {item.item_type && item.item_type === 'product' ? 'Produit' : 'Service'}
								</p>

								<p>
									<strong>Description:</strong>
									<br />
									{item.description}
								</p>
							</div>
						</div>
						<hr />
						<p style={{ color: 'red', fontWeight: '700' }}>À propos du fournisseur</p>
						<div className="row">
							<div className="col-md-6">
								<p>
									<strong>Nom & Prénom:</strong>
									<br /> {item.provider_name}
								</p>
								<p>
									<strong>Île</strong>
									<br /> {item.provider_island}
								</p>
								<p>
									<strong>Adresse</strong>
									<br /> {item.provider_address}
								</p>
							</div>
							<div className="col-md-6">
								<p>
									<strong>Numéro de téléphone:</strong>
									<br /> {item.provider_phone_number}
								</p>

								<p>
									<strong>Email du référent:</strong>
									<br />
									{item.referent_email}
								</p>
							</div>
						</div>
						<DialogContentText id="alert-dialog-description" />
					</DialogContent>
				)}
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Fermer
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AdminViewItemDialog;
