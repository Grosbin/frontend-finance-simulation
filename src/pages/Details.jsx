import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { LineChart } from "../hooks/LineChart";

export const Details = () => {
	const { active } = useSelector((state) => state.simulation);
	const [data, setData] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		setData(active);
	}, [active]);


	return (
		<div className="main">
			<div className="detail__container">
				<div className="">
					<div className="card">
						<DataTable
							align="left"
							value={data}
							scrollHeight="400px"
							virtualScrollerOptions={{ itemSize: 46 }}
							responsiveLayout="stack"
						>
							<Column
								field="investment"
								header="Inversión"
								style={{ minWidth: "200px" }}
							></Column>
							<Column
								field="own_resources"
								header="Recursos Propios"
								style={{ minWidth: "200px" }}
							></Column>
							<Column
								field="rate_own_resources"
								header="Tasa Recursos Propios"
								style={{ minWidth: "200px" }}
							></Column>
							<Column
								field="financing"
								header="Financiamiento"
								style={{ minWidth: "200px" }}
							></Column>
							<Column
								field="rate_financing"
								header="Tasa Financiamiento"
								style={{ minWidth: "200px" }}
							></Column>
							<Column
								field="resul_cpp"
								header="CPP"
								style={{ minWidth: "200px" }}
							></Column>
							<Column
								field="live"
								header="Vida del proyecto"
								style={{ minWidth: "200px" }}
							></Column>
							<Column
								field="resul_vpf"
								header="VPF"
								style={{ minWidth: "200px" }}
							></Column>
							<Column
								field="resul_cpp"
								header="CPP"
								style={{ minWidth: "200px" }}
							></Column>
							<Column
								field="resul_pr"
								header="PR"
								style={{ minWidth: "200px" }}
							></Column>
						</DataTable>
					</div>
					<div className="flex__container" style={{ marginTop: "90px" }}>
						{
							data.map((item, i) => {
								return (
									<div className="flex__item" key={i}>
										<LineChart data={item.random_fne} />
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};
