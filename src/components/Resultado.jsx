import { useCallback, useMemo, useRef } from 'react';

import useCotizador from '../hooks/useCotizador';
import { MARCAS, PLANES } from '../constanst';

const Resultado = () => {
	const { resultado, datos } = useCotizador();
	const { marca, plan, year } = datos;
	const yearRef = useRef(year);

	// useCallback lo usamos para evitar el rerender cuando cambia el estado, unicamente se dispara cuando resultado cambia
	const [nombreMarca] = useCallback(
		MARCAS.filter(m => m.id === Number(marca)),
		[resultado]
	);
	const [nombrePlan] = useCallback(
		PLANES.filter(p => p.id === Number(plan)),
		[resultado]
	);

	if (resultado === 0) return null;

	return (
		<div className='bg-gray-100 text-center shadow mt-5 p-5'>
			<h2 className='text-gray-600 text-3xl font-black'>Resumen</h2>

			<p className='my-2'>
				<span className='font-bold'>Marca: </span>
				{nombreMarca.nombre}
			</p>

			<p className='my-2'>
				<span className='font-bold'>Plan: </span>
				{nombrePlan.nombre}
			</p>

			<p className='my-2'>
				<span className='font-bold'>Año del Auto: </span>
				{yearRef.current}
			</p>

			<p className='text-2xl my-2'>
				<span className='font-bold'>Total Cotización: </span>
				{resultado}
			</p>
		</div>
	);
};

export default Resultado;
