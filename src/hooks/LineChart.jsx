
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

export const LineChart = ({ data = [] }) => {
	// const data = [
	// 	{
	// 		id: 1,
	// 		year: 1
	// 	},
	// 	{
	// 		id: -22,
	// 		year: 2
	// 	},
	// 	{
	// 		id: 3,
	// 		year: 3
	// 	},
	// 	{
	// 		id: 4,
	// 		year: 4
	// 	},
	// 	{
	// 		id: -5,
	// 		year: 5
	// 	},
	// 	{
	// 		id: 6,
	// 		year: 6
	// 	},
	// ]

	const fne = data.map((item) => (
		item.id
	));

	const year = data.map((item) => (
		'Año ' + item.year
	));

	const min = data.map((item) => (
		item.id < 0 ? item.id : 0
	))

	const max = data.map((item) => (
		item.id > 0 ? item.id : 0
	))


	const [DataLine] = useState({
		labels: year,
		datasets: [
			{
				label: 'Flujo neto de efectivo',
				data: fne,
				fill: false,
				borderColor: '#4338ca',
				tension: .4
			},
			// {
			// 	label: 'Second Dataset',
			// 	data: [28, 48, 40, 19, 86, 27, 90],
			// 	fill: false,
			// 	borderColor: '#FFA726',
			// 	tension: .4
			// }
		]
	});


	const [DataBar] = useState({
		labels: year,
		datasets: [

			{
				label: 'Ganancias',
				backgroundColor: '#22C55E',
				data: max
			},
			{
				label: 'Perdidas',
				backgroundColor: '#4338ca',
				data: min
			}
		]
	});




	const getLightTheme = () => {
		let basicOptions = {
			maintainAspectRatio: false,
			aspectRatio: .6,
			plugins: {
				legend: {
					labels: {
						color: '#495057'
					}
				}
			},
			scales: {
				x: {
					ticks: {
						color: '#495057'
					},
					grid: {
						color: '#ebedef'
					}
				},
				y: {
					ticks: {
						color: '#495057'
					},
					grid: {
						color: '#ebedef'
					}
				}
			}
		};



		return {
			basicOptions

		}
	}

	const { basicOptions } = getLightTheme();

	return (
		<div style={{ width: '100%' }}>
			<Card style={{ marginTop: '10px' }}>
				<div className="card" >
					{/* <h5>Valor del precio en el tiempo</h5> */}
					<Chart type="line" data={DataLine} options={basicOptions} />
				</div>
			</Card>







			<Card style={{ marginTop: '10px' }}>
				<div className="card">
					<h5>Valor del dinero en el tiempo</h5>
					<Chart type="bar" data={DataBar} options={basicOptions} />
				</div>
			</Card>

			{/* <Card style={{ marginTop: '10px' }}>
				<div className="card" >
					<h5>Line Styles</h5>
					<Chart type="line" data={lineStylesData} options={basicOptions} />
				</div>
			</Card> */}

		</div>
	)
}
