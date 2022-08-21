import React, { useEffect } from 'react'
import { Button } from 'primereact/button';
import { Card } from "primereact/card";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { activeSimulation, startGetSimulations } from '../../actions/simulation';

export const Start = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { data } = useSelector((state) => state.simulation);


	useEffect(() => {
		dispatch(startGetSimulations());
	}, [dispatch]);



	const handleCreateSimulation = () => {
		navigate("/evaluar-proyecto")
	}

	const handleDetail = (id) => {
		const filterSimulation = data.filter((simulation) => simulation._id === id);
		dispatch(activeSimulation(filterSimulation));
		navigate(`/detalles`)
	}



	const buttonCard = (item) => (
		<span>
			<Button
				label='Ver resultados'
				className='p-button-primary'
				onClick={() => handleDetail(item._id)}
			/>

		</span>
	)


	// const footerCard = (item) => (<>{buttonCard(item)}</>)

	return (
		<>
			<div className="main">
				<div className="space-left__button">
					<Button label="Crear Simulación" className="btn  p-button-success p-button-raised" icon="pi pi-plus" onClick={() => handleCreateSimulation()} />
				</div>
				<div className="container">
					{
						data?.slice(0).reverse().map((item, i) => (
							<div className="card__container" key={i} style={{ textAlign: 'center' }}>
								<Card
									subTitle={item.name}
									footer={buttonCard(item)}
									className="justify-content-center align-content-center cursor-pointer"
								>
									<h5>{`${item.description !== '' ? `${item.description.substring(0, 30)}...` : 'Esta simulación no tiene descripción'}`}</h5>

								</Card>
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}
