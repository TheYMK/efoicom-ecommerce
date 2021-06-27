import React, { useEffect, useState } from 'react';
import AdminMenu from './AdminMenu';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { createZone, getAllZones, removeZone, updateZone } from '../../actions/zone';
import Link from 'next/link';
import EditZoneDialog from '../dialogs/EditZoneDialog';
import LocalSearch from '../searchforms/LocalSearch';
import ConfirmDeleteDiaog from '../dialogs/ConfirmDeleteDialog';

const ReferenceZoneManagement = () => {
	const [ values, setValues ] = useState({
		name: '',
		island: '',
		loading: false,
		keyword: ''
	});
	const [ allZones, setAllZones ] = useState([]);
	const [ openEditDialog, setOpenEditDialog ] = useState(false);
	const [ openConfirmDialog, setOpenConfirmDialog ] = useState(false);
	const [ currentSelectedZone, setCurrentSelectedZone ] = useState({
		name: '',
		island: ''
	});

	const { name, island, loading, keyword } = values;
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
					toast.success(`Nouvelle commune ajoutée.`);
					setValues({ ...values, name: '', loading: false });
					loadZones();
				})
				.catch((err) => {
					toast.error(
						`Oops! Echec de l'opération. Cette commune existe peut-être déjà. Essayer avec un autre nom.`
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

	const handleRemoveZone = (zone) => {
		setValues({ ...values, loading: true });
		if (user && user.token) {
			removeZone(user.token, zone.slug)
				.then((res) => {
					toast.success(`La commune a été retirée.`);
					setValues({ ...values, loading: false });
					setOpenConfirmDialog(false);
					loadZones();
				})
				.catch((err) => {
					toast.error(`Oops! Echec de l'opération. Veuillez réessayer.`);
					setValues({ ...values, loading: false });
				});
		}
	};

	const handleOpenEditDialog = (zone) => {
		setCurrentSelectedZone(zone);
		setOpenEditDialog(true);
	};

	const handleCloseEditDialog = () => {
		setCurrentSelectedZone({ name: '', island: '' });
		setOpenEditDialog(false);
	};

	const handleUpdateZone = () => {
		if (!currentSelectedZone.name || !currentSelectedZone.island) {
			toast.error(`Oops! Vous devez remplir tous les champs.`);
			return;
		}

		if (user && user.token) {
			updateZone(user.token, currentSelectedZone.slug, currentSelectedZone)
				.then((res) => {
					toast.success(`Modification effectué`);
					setCurrentSelectedZone({
						name: '',
						island: ''
					});
					handleCloseEditDialog();
					loadZones();
				})
				.catch((err) => {
					toast.error(
						`Oops! Echec de l'opération. Cette commune existe peut-être déjà. Essayer avec un autre nom.`
					);
					return;
				});
		} else {
			toast.error(`Oops! Echec de l'opération. Veuillez recharger la page et réessayer.`);
			return;
		}
	};

	const searched = (keyword) => (z) => z.name.toLowerCase().includes(keyword);

	const handleOpenConfirmDeleteDialog = (zone) => {
		setCurrentSelectedZone(zone);
		setOpenConfirmDialog(true);
	};

	const handleCloseConfirmDialog = () => {
		setCurrentSelectedZone({ name: '', island: '' });
		setOpenConfirmDialog(false);
	};

	const showZones = () => (
		<div className="table-responsive" style={{ height: '500px' }}>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Nom de la commune</th>
						<th>Île</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{allZones.filter(searched(keyword)).map((zone, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{zone.name}</td>
							<td>{zone.island}</td>
							<td>
								<div className="dropdown d-inline-block">
									<button data-toggle="dropdown" className="dropdown-toggle btn btn-primary">
										Cliquer ici
									</button>
									<div className="dropdown-menu dropdown-menu-right">
										<button className="dropdown-item" onClick={(e) => handleOpenEditDialog(zone)}>
											Modifer
										</button>

										<button
											className="dropdown-item"
											onClick={(e) => handleOpenConfirmDeleteDialog(zone)}
										>
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
			<ConfirmDeleteDiaog
				open={openConfirmDialog}
				handleClose={handleCloseConfirmDialog}
				element={currentSelectedZone}
				action={handleRemoveZone}
				text={`Êtes-vous sûr de vouloir supprimer cette commune? Tous les référents et les articles liés à cette commune doivent être modifiés avant de procéder à la suppression.`}
			/>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="reference_zone" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header pure-text">
									<strong className="d-inline-block mr-3">Ajouter une commune</strong>
									<br />
									<small className="">
										Une commune est principalement une zone qui sera couverte par un ou plusieurs
										référent(s). Ces zones auront pour but de spécifier la provenance des produits
										ou services qui seront mis en ligne sur la plateforme. Vous, en tant
										qu'administrateur, avez la responsabilité d'enregistrer ces communes dans la
										base donnée.
									</small>
								</header>
								<div className="card-body">
									<form onSubmit={handleCreateZone}>
										<div className="form-row">
											<div className="form-group col-md-4">
												<label htmlFor="name">
													Nom de la commune <span style={{ color: 'red' }}>*</span>
												</label>
												<input
													type="text"
													id="name"
													className="form-control"
													value={name}
													onChange={(e) => setValues({ ...values, name: e.target.value })}
													placeholder="Sasissez le nom de cette commune"
													required
												/>
											</div>
											<div className="form-group col-md-6">
												<label>
													Dans quelle île se trouve cette commune?{' '}
													<span style={{ color: 'red' }}>*</span>
												</label>
												<select
													name="island"
													className="form-control"
													required
													onChange={(e) => setValues({ ...values, island: e.target.value })}
												>
													<option value="">Veuillez sélectionner une île</option>
													<option value="ndzuwani">Ndzuwani</option>
													<option value="ngazidja">Ngazidja</option>
													<option value="mwali">Mwali</option>
												</select>
											</div>
										</div>
										<button type="submit" className="btn btn-primary mt-3">
											{loading ? 'En cours...' : 'Créer une nouvelle commune'}
										</button>
									</form>
								</div>
							</article>
							<article className="card mb-4">
								<div className="card-body">
									<LocalSearch setValues={setValues} values={values} />
								</div>
							</article>

							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Liste des communes</strong>
								</header>

								<div className="">{showZones()}</div>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ReferenceZoneManagement;
