import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { About } from '../pages/About';
import { Details } from '../pages/Details';
import { Doc } from '../pages/Doc';
import { EvaluateProject } from '../pages/EvaluateProject';
import { Start } from '../pages/Start';

const AppRouter = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/")
	}, []);
	return (
		<>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/documentacion" element={<Doc />} />
				<Route path="/acerca" element={<About />} />
				<Route path="/evaluar-proyecto" element={<EvaluateProject />} />
				<Route path="/detalles" element={<Details />} />
				<Route path="/*" element={<Start />} />
			</Routes>
		</>
	)
}

export default AppRouter;