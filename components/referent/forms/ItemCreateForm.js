import React, { useState } from 'react';
import { Select } from 'antd';
const { Option } = Select;
import PhoneInput from 'react-phone-number-input';

const ItemCreateForm = ({
	values,
	loading,
	handleSubmit,
	handleChange,
	handleCategoryChange,
	subOptions,
	showSubs,
	setValues
}) => {
	const {
		title,
		description,
		category,
		categories,
		subs,
		images,
		provider_name,
		provider_phone_number,
		provider_address,
		// availability,
		item_type
	} = values;

	const showCreateItemForm = () => (
		<form>
			<div className="form-group">
				<label>
					Que voulez-vous soumettre? <span style={{ color: 'red' }}>*</span>
				</label>{' '}
				<br />
				<label className="custom-control custom-radio custom-control-inline">
					<input
						className="custom-control-input"
						type="radio"
						name="item_type"
						required
						value="product"
						onChange={handleChange}
					/>
					<span className="custom-control-label"> Un produit </span>
				</label>
				<label className="custom-control custom-radio custom-control-inline">
					<input
						className="custom-control-input"
						type="radio"
						name="item_type"
						required
						value="service"
						onChange={handleChange}
					/>
					<span className="custom-control-label"> Un service </span>
				</label>
			</div>

			<div className="form-group">
				<label>
					Titre <span style={{ color: 'red' }}>*</span>
				</label>
				<input
					type="text"
					name="title"
					className="form-control"
					value={title}
					required
					onChange={handleChange}
					placeholder="Saisissez un titre pour votre produit ou service"
				/>
			</div>
			<div className="form-group">
				<label>
					Description <span style={{ color: 'red' }}>*</span>
				</label>
				<input
					type="text"
					name="description"
					className="form-control"
					value={description}
					required
					onChange={handleChange}
					placeholder="Decrivez votre produit ou service"
				/>
			</div>

			<div className="form-row">
				<div className="col-md-6">
					<label>
						Nom du fournisseur <span style={{ color: 'red' }}>*</span>
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
						Numéro de téléphone du fournisseur <span style={{ color: 'red' }}>*</span>
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
				<div className="form-group col-md-8 mt-4">
					<label>
						Adresse du fournisseur <span style={{ color: 'red' }}>*</span>
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
					Categorie <span style={{ color: 'red' }}>*</span>
				</label>
				<select name="category" className="form-control" onChange={handleCategoryChange}>
					<option value="">Veuillez selectionner une catégorie</option>
					{categories.length > 0 &&
						categories.map((category) => (
							<option key={category._id} value={category._id}>
								{category.name}
							</option>
						))}
				</select>
			</div>

			{showSubs && (
				<div>
					<label>
						Sous-Categories <span style={{ color: 'red' }}>*</span>
					</label>
					<Select
						mode="multiple"
						allowClear
						style={{ width: '100%' }}
						placeholder="Please select"
						value={subs}
						onChange={(value) => setValues({ ...values, subs: value })}
					>
						{subOptions.length &&
							subOptions.map((sub) => (
								<Option value={sub._id} key={sub._id}>
									{sub.name}
								</Option>
							))}
					</Select>
				</div>
			)}

			<button className="btn btn-primary mt-4" onClick={handleSubmit}>
				{loading ? 'En cours...' : 'Soumettre'}
			</button>
		</form>
	);

	return <React.Fragment>{showCreateItemForm()}</React.Fragment>;
};

export default ItemCreateForm;
