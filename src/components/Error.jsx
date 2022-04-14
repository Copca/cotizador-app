import useCotizador from '../hooks/useCotizador';

const Error = () => {
	const { error } = useCotizador();

	return (
		<div className='bg-red-100 text-red-700 text-center border border-red-400 py-3'>
			<p>{error}</p>
		</div>
	);
};

export default Error;
