import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { BiMap } from 'react-icons/bi';
import './Card.scss';

export const Card = ({ car, changeCard, deleteCard }) => {
	const { id, name, model, year, color, price, latitude, longitude } = car;
	const [editName, setEditName] = useState(name);
	const [editModel, setEditModel] = useState(model);
	const [editPrice, setEditPrice] = useState(price);
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setShowModal(false);
		changeCard(id, editName, editModel, editPrice);
	};

	return (
		<>
			<div className="car">
				<h1 className="car__name">
					{name}{' '}
					{model.length < 9 ? (
						model
					) : (
						<div style={{ alignItems: 'center', marginTop: '15px' }}> {model} </div>
					)}
				</h1>
				<h2 className="car__year">{year}</h2>
				<span className="car__color">{color}</span>
				<span className="car__price">$ {price}</span>
				<p className="car__coordinates">
					<BiMap />
					<span className="lati">{latitude}</span>
					<span className="long">{longitude}</span>
				</p>
				<div className="car__btn">
					<button className="btn" onClick={() => setShowModal(true)}>
						Edit
					</button>
					<button className="btn" onClick={() => deleteCard(id)}>
						Delete
					</button>
				</div>
			</div>
			{showModal && (
				<Modal
					setShowModal={setShowModal}
					name={editName}
					setName={setEditName}
					model={editModel}
					setModel={setEditModel}
					price={editPrice}
					setPrice={setEditPrice}
					handleSubmit={handleSubmit}
				/>
			)}
		</>
	);
};
