import React from 'react';
import './Select.scss';

export const Select = ({ options, defaultValue, value, onChange }) => {
	return (
		<select id="select" value={value} onChange={(event) => onChange(event.target.value)}>
			<option disabled value="">
				{defaultValue}
			</option>
			{options.map((option) => (
				<option key={option.id} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};
