import React from 'react';
import './Modal.scss';

export const Modal = ({
	setShowModal,
	name,
	setName,
	model,
	setModel,
	price,
	setPrice,
	handleSubmit,
}) => {
	return (
		<div className={['modal', 'active'].join(' ')}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" onClick={() => setShowModal(false)}>
							<span>&times;</span>
						</button>
						<h5 className="modal-title">Edit Card</h5>
					</div>
					<div className="modal-body">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="editTitle">Name :</label>
								<input
									type="text"
									className="form-control"
									id="editName"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="editDescription">Model :</label>
								<textarea
									className="form-control"
									id="editModel"
									value={model}
									onChange={(e) => setModel(e.target.value)}></textarea>
							</div>
							<div className="form-group">
								<label htmlFor="editDescription">Price :</label>
								<textarea
									className="form-control"
									id="editPrice"
									value={price}
									onChange={(e) => setPrice(e.target.value)}></textarea>
							</div>
							<button type="submit" className="btn">
								Save Changes
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
