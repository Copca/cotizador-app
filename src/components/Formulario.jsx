import { Fragment } from 'react';

import { MARCAS, YEARS, PLANES } from '../constanst';
import useCotizador from '../hooks/useCotizador';

import Error from './Error';

const Formulario = () => {
	const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador();

	const handleSubmit = e => {
		e.preventDefault();

		if (Object.values(datos).includes('')) {
			setError('Todos los campos son obligatorios');
			return;
		}

		setError('');

		cotizarSeguro();
	};

	return (
		<>
			{error && <Error />}

			<form onSubmit={handleSubmit}>
				<div className='my-5'>
					<label className='block to-gray-400 font-bold uppercase'>Marca</label>
					<select
						name='marca'
						className='w-full bg-white border border-gray-200 p-3'
						onChange={e => handleChangeDatos(e)}
						value={datos.marca}
					>
						<option value=''>-- Selecciona Marca --</option>
						{MARCAS.map(marca => (
							<option key={marca.id} value={marca.id}>
								{marca.nombre}
							</option>
						))}
					</select>
				</div>

				<div className='my-5'>
					<label className='block to-gray-400 font-bold uppercase'>Año</label>
					<select
						name='year'
						className='w-full bg-white border border-gray-200 p-3'
						onChange={e => handleChangeDatos(e)}
						value={datos.year}
					>
						<option value=''>-- Selecciona Año --</option>

						{YEARS.map(year => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>

				<div className='my-5'>
					<label className='block to-gray-400 font-bold uppercase'>
						Elige un plan
					</label>
					<div className='flex items-center gap-3'>
						{PLANES.map(plan => (
							<Fragment key={plan.id}>
								<label>{plan.nombre}</label>
								<input
									type='radio'
									name='plan'
									value={plan.id}
									onChange={e => handleChangeDatos(e)}
								/>
							</Fragment>
						))}
					</div>
				</div>

				<input
					type='submit'
					className='w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase cursor-pointer p-3 transition-colors'
					value='Cotizar'
				/>
			</form>
		</>
	);
};

export default Formulario;
