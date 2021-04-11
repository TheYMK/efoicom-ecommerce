import React, { useState } from 'react';
import { Select } from 'antd';
const { Option } = Select;
import PhoneInput from 'react-phone-number-input';

const ItemUpdateForm = ({
	values,
	handleSubmit,
	handleChange,
	handleCategoryChange,
	subOptions,
	arrayOfSubIds,
	setArrayOfSubIds,
	setValues
}) => {
	const [ loading, setLoading ] = useState(false);

	const {
		title,
		description,
		category,
		categories,
		subs,
		images,
		provider_name,
		provider_phone_number,
		provider_island,
		provider_address,
		// availability,
		item_type
	} = values;

	const showUpdateItemForm = () => (
		<form>
			<div className="form-group">
				<label>
					Que voulez-vous soumettre? <small style={{ color: 'red' }}>*</small>
				</label>{' '}
				<br />
				<label className="custom-control custom-radio custom-control-inline">
					<input
						className="custom-control-input"
						type="radio"
						name="item_type"
						required
						value="product"
						checked={item_type === 'product'}
						onChange={handleChange}
					/>
					<span className="custom-control-label"> Produit </span>
				</label>
				<label className="custom-control custom-radio custom-control-inline">
					<input
						className="custom-control-input"
						type="radio"
						name="item_type"
						required
						value="service"
						checked={item_type === 'service'}
						onChange={handleChange}
					/>
					<span className="custom-control-label"> Service </span>
				</label>
			</div>

			<div className="form-group">
				<label>
					Titre <small style={{ color: 'red' }}>*</small>
				</label>
				<input
					type="text"
					name="title"
					className="form-control"
					value={title}
					required
					onChange={handleChange}
					placeholder="Saisissez un titre pour votre (vos) produit(s) ou service(s)"
				/>
			</div>
			<div className="form-group">
				<label>
					Description <small style={{ color: 'red' }}>*</small>
				</label>
				<input
					type="text"
					name="description"
					className="form-control"
					value={description}
					required
					onChange={handleChange}
					placeholder="Decrivez votre (vos) produit(s) ou service(s)"
				/>
			</div>

			<div className="form-row">
				<div className="col-md-6">
					<label>
						Nom du fournisseur <small style={{ color: 'red' }}>*</small>
					</label>
					<input
						type="text"
						name="provider_name"
						className="form-control"
						value={provider_name}
						required
						onChange={handleChange}
						placeholder="Saisissez le nom du fournisseur"
					/>
				</div>
				<div className="col-md-6">
					<label>
						Numéro de téléphone du fournisseur <small style={{ color: 'red' }}>*</small>
					</label>
					<PhoneInput
						placeholder="3725168"
						value={provider_phone_number}
						required
						name="provider_phone_number"
						className="form-control"
						onChange={(e) => setValues({ ...values, provider_phone_number: e })}
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-4 mt-4">
					<label htmlFor="island">
						île du fournisseur<small style={{ color: 'red' }}>*</small>
					</label>
					<input
						type="text"
						name="provider_island"
						className="form-control"
						value={provider_island}
						required
						onChange={handleChange}
						disabled
					/>
				</div>
				<div className="form-group mt-4 col-md-8">
					<label>
						Adresse du fournisseur <small style={{ color: 'red' }}>*</small>
					</label>
					<input
						type="text"
						name="provider_address"
						className="form-control"
						value={provider_address}
						required
						onChange={handleChange}
						placeholder="Saisissez l'adresse du fournisseur"
					/>
				</div>
			</div>

			<div className="form-group mt-3">
				<label>
					Categorie <small style={{ color: 'red' }}>*</small>
				</label>
				<select value={category._id} name="category" className="form-control" onChange={handleCategoryChange}>
					{categories.length > 0 &&
						categories.map((category) => (
							<option key={category._id} value={category._id}>
								{category.name}
							</option>
						))}
				</select>
			</div>

			<div>
				<label>
					Sous-Categorie <small style={{ color: 'red' }}>*</small>
				</label>
				<Select
					mode="multiple"
					allowClear
					style={{ width: '100%' }}
					placeholder="Please select"
					value={arrayOfSubIds}
					onChange={(value) => setArrayOfSubIds(value)}
				>
					{subOptions.length &&
						subOptions.map((sub) => (
							<Option value={sub._id} key={sub._id}>
								{sub.name}
							</Option>
						))}
				</Select>
			</div>

			<button className="btn btn-primary mt-4" onClick={handleSubmit}>
				{loading ? 'En cours...' : 'Soumettre'}
			</button>
		</form>
	);

	return <React.Fragment>{showUpdateItemForm()}</React.Fragment>;
};

export default ItemUpdateForm;
