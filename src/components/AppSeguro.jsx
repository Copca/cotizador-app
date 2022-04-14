import useCotizador from '../hooks/useCotizador';

import Spinner from './Spinner';
import Resultado from './Resultado';
import Formulario from './Formulario';

const AppSeguro = () => {
	const { resultado, cargando } = useCotizador();

	return (
		<>
			<header className='my-10'>
				<h1 className='text-4xl text-white text-center font-black'>
					Cotizador de Seguro de Autos
				</h1>
			</header>

			<main className='md:w-2/3 lg:w-2/4 mx-auto bg-white shadow rounded-lg p-10'>
				<Formulario />

				{cargando ? <Spinner /> : <Resultado />}
			</main>
		</>
	);
};

export default AppSeguro;
