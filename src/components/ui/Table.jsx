

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



export const Table = ({ item = 0 }) => {

	return (
		<div>
			<div className="card">
				{/* <h5>Flujo neto de efectivo</h5> */}
				<DataTable value={item} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
					<Column field="year" header="Año" style={{ minWidth: '200px' }}></Column>

					<Column field="id" header="FNE" style={{ minWidth: '200px' }}></Column>
				</DataTable>
			</div>

		</div>
	);
}
