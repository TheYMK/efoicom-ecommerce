import React, { useEffect, useState } from 'react';
import AdminMenu from './AdminMenu';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { createZone, getAllZones, removeZone, updateZone } from '../../actions/zone';
import Link from 'next/link';
import EditZoneDialog from '../dialogs/EditZoneDialog';

const ReferenceZoneManagement = () => {
	const [ values, setValues ] = useState({
		name: '',
		island: '',
		loading: false
	});
	const [ allZones, setAllZones ] = useState([]);
	const [ openEditDialog, setOpenEditDialog ] = useState(false);
	const [ currentSelectedZone, setCurrentSelectedZone ] = useState({});

	const { name, island, loading } = values;
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(() => {
		loadZones();
	}, []);

	const loadZones = () => {
		getAllZones()
			.then((res) => {
				setAllZones(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleCreateZone = (e) => {
		e.preventDefault();

		setValues({ ...values, loading: true });

		if (!name || !island) {
			toast.error(`Oops! Vous devez remplir tous les champs`);
			setValues({ ...values, loading: false });
			return;
		}

		if (user && user.token) {
			createZone(user.token, values)
				.then((res) => {
					toast.success(`Nouvelle zone de référence ajouté`);
					setValues({ ...values, name: '', loading: false });
					loadZones();
				})
				.catch((err) => {
					toast.error(
						`Oops! Echec de l'opération. Cette zone existe peut-être déjà. Essayer avec un autre nom.`
					);
					setValues({ ...values, loading: false });
					return;
				});
		} else {
			toast.error(`Oops! Echec de l'opération. Veuillez recharger la page et réessayer.`);
			setValues({ ...values, loading: false });
			return;
		}
	};

	const handleRemoveZone = (slug) => {
		setValues({ ...values, loading: true });
		if (user && user.token) {
			removeZone(user.token, slug)
				.then((res) => {
					toast.success(`La zone a été retiré`);
					setValues({ ...values, loading: false });
					loadZones();
				})
				.catch((err) => {
					toast.error(`Oops! Echec de l'opération. Veuillez réessayer`);
					setValues({ ...values, loading: false });
				});
		}
	};

	const handleOpenEditDialog = (zone) => {
		setCurrentSelectedZone(zone);
		setOpenEditDialog(true);
	};

	const handleCloseEditDialog = () => {
		setCurrentSelectedZone('');
		setOpenEditDialog(false);
	};

	const handleUpdateZone = () => {
		if (!currentSelectedZone.name || !currentSelectedZone.island) {
			toast.error(`Oops! Vous devez remplir tous les champs`);
			return;
		}

		if (user && user.token) {
			updateZone(user.token, currentSelectedZone.slug, currentSelectedZone)
				.then((res) => {
					toast.success(`Modification effectué`);
					setCurrentSelectedZone({});
					handleCloseEditDialog();
					loadZones();
				})
				.catch((err) => {
					toast.error(
						`Oops! Echec de l'opération. Cette zone existe peut-être déjà. Essayer avec un autre nom.`
					);
					return;
				});
		} else {
			toast.error(`Oops! Echec de l'opération. Veuillez recharger la page et réessayer.`);
			return;
		}
	};

	const showZones = () => (
		<div className="table-responsive" style={{ height: '500px' }}>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Nom de la zone</th>
						<th>Île</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{allZones.map((zone, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{zone.name}</td>
							<td>{zone.island}</td>
							<td>
								<div className="dropdown d-inline-block">
									<button
										data-toggle="dropdown"
										className="dropdown-toggle btn rounded-pill btn-primary"
									>
										Cliquer ici
									</button>
									<div className="dropdown-menu dropdown-menu-right">
										<button className="dropdown-item" onClick={(e) => handleOpenEditDialog(zone)}>
											Modifer
										</button>

										<button className="dropdown-item" onClick={(e) => handleRemoveZone(zone.slug)}>
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

	return (
		<React.Fragment>
			<EditZoneDialog
				open={openEditDialog}
				handleClose={handleCloseEditDialog}
				currentZone={currentSelectedZone}
				setCurrentZone={setCurrentSelectedZone}
				handleUpdateZone={handleUpdateZone}
			/>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="reference_zone" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Ajouter une zone de référence</strong>
								</header>
								<div className="card-body">
									<form onSubmit={handleCreateZone}>
										<div className="form-row">
											<div className="form-group col-md-4">
												<label htmlFor="name">
													Nom de la zone <span style={{ color: 'red' }}>*</span>
												</label>
												<input
													type="text"
													id="name"
													className="form-control"
													value={name}
													onChange={(e) => setValues({ ...values, name: e.target.value })}
													placeholder="Donnez un nom à cette zone"
													required
												/>
											</div>
											<div className="form-group col-md-6">
												<label>Dans quelle île se trouve cette zone?</label>
												<select
													name="island"
													className="form-control"
													onChange={(e) => setValues({ ...values, island: e.target.value })}
												>
													<option value="">Veuillez selectionner une catégorie</option>
													<option value="anjouan">Anjouan</option>
													<option value="ngazidja">Ngazidja</option>
													<option value="mohéli">Mohéli</option>
												</select>
											</div>
										</div>
										<button type="submit" className="btn rounded-pill btn-primary mt-3">
											{loading ? 'En cours...' : 'Créer une nouvelle zone'}
										</button>
									</form>
								</div>
							</article>
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Liste des zones</strong>
								</header>
								<div className="card-body">{showZones()}</div>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ReferenceZoneManagement;
