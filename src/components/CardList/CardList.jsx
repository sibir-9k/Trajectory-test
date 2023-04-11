import React from 'react';
import { Card } from '../Card/Card';
import './CardList.scss';

export const CardList = ({ data, changeCard, deleteCard }) => {
	return (
		<div className="card-list">
			{data.map((car) => {
				return <Card key={car.id} car={car} changeCard={changeCard} deleteCard={deleteCard} />;
			})}
		</div>
	);
};
