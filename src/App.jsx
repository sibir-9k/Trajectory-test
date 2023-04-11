import { useState, useEffect } from 'react';
import axios from 'axios';
import { Select } from './UI/Select';
import { CardList } from './components/CardList/CardList';
import './App.css';

function App() {
	const [data, setData] = useState([]);
	const [selectedSort, setSelectedSort] = useState('');

	useEffect(() => {
		const fetchCarsData = async () => {
			const result = await axios('https://test.tspb.su/test-task/vehicles');
			setData(result.data);
		};
		fetchCarsData();
	}, []);

	const sortCard = (sort) => {
		const [key, direction] = sort.split('-');
		setSelectedSort(sort);
		if (direction === 'down') {
			setData([...data].sort((a, b) => a[key] - b[key]));
		} else if (direction === 'up') {
			setData([...data].sort((a, b) => b[key] - a[key]));
		}
	};

	const changeCard = (id, name, model, price) => {
		const newData = data.map((car) => {
			if (car.id !== id) return car;
			car.name = name;
			car.model = model;
			car.price = price;
			return car;
		});
		setData(newData);
	};

	const deleteCard = (id) => {
		const newData = data.filter((car) => car.id !== id);
		setData(newData);
	};

	return (
		<div className="App">
			<Select
				value={selectedSort}
				onChange={sortCard}
				defaultValue="Сортировка"
				options={[
					{ id: 1, value: 'year-up', name: 'По году выпуска от новых моделей ▼' },
					{ id: 2, value: 'year-down', name: 'По году выпуска от старых моделей ▲' },
					{ id: 3, value: 'price-up', name: 'По убыванию стоймости ▼' },
					{ id: 4, value: 'price-down', name: 'По возрастанию стоймости ▲' },
				]}
			/>
			<CardList data={data} changeCard={changeCard} deleteCard={deleteCard} />
		</div>
	);
}

export default App;
