import { Link } from "react-router-dom"

export const Main = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 ">
                <div className="px-12">
                    <h1 className=" text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">Proyecto de Investigación Operativa</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-8xl">
                        <Link
                            to='simplex'
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                        >
                            <CalculatorIcon className="w-12 h-12 text-gray-600 dark:text-gray-400 mb-4" />
                            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300 text-center">Método Simplex</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Resuelve problemas de programación lineal utilizando el Método Simplex, incluyendo variantes como el Método de 2 Fases y Gran M.
                            </p>
                        </Link>
                        <Link
                            to='critical-route'
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                        >
                            <TrendingDown className="w-12 h-12 text-gray-600 dark:text-gray-400 mb-4" />
                            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300 text-center">Método de la Ruta Crítica CPM</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Determina la secuencia más larga de tareas críticas identificando el tiempo mínimo necesario para completar el proyecto.
                            </p>
                        </Link>
                        <Link
                            to='pert'
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                        >
                            <Clock className="w-12 h-12 text-gray-600 dark:text-gray-400 mb-4" />
                            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300 text-center">Método PERT</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Evalúa la duración de tareas en proyectos utilizando estimaciones optimistas, probables y pesimistas para gestionar incertidumbres.
                            </p>
                        </Link>
                        <Link
                            to='eoq'
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                        >
                            <Calculator className="w-12 h-12 text-gray-600 dark:text-gray-400 mb-4" />
                            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300 text-center">Método EOQ</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Calcula la cantidad económica de pedido para minimizar costos de inventario y pedidos en tu negocio.
                            </p>
                        </Link>
                        <Link
                            to='eoq-discounts'
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                        >
                            <ShoppingCart className="w-12 h-12 text-gray-600 dark:text-gray-400 mb-4" />
                            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300 text-center">EOQ con Descuentos</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Calcula el EOQ optimizado considerando descuentos por volumen de compra.
                            </p>
                        </Link>
                        <Link
                            to='ahp'
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                        >
                            <TwoWayArrow className="w-12 h-12 text-gray-600 dark:text-gray-400 mb-4" />
                            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300 text-center">Método AHP</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Calcula la mejor alternativa basada en criterios ponderados.
                            </p>
                        </Link>
                        <Link
                            to='decision-tree'
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                        >
                            <DecisionTreeIcon className="w-12 h-12 text-gray-600 dark:text-gray-400 mb-4" />
                            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300 text-center">Árbol de Decisión</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Visualiza y analiza decisiones con probabilidades y payoff.
                            </p>
                        </Link>
                        <Link
                            to="decision-table"
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                        >
                            <TablaDecisionIcon className="w-12 h-12 text-gray-600 dark:text-gray-400 mb-4" />
                            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300 text-center">Tabla de Decisión</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Aplica y analiza diferentes criterios de decisión.
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
function CalculatorIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <line x1="8" x2="16" y1="6" y2="6" />
            <line x1="16" x2="16" y1="14" y2="18" />
            <path d="M16 10h.01" />
            <path d="M12 10h.01" />
            <path d="M8 10h.01" />
            <path d="M12 14h.01" />
            <path d="M8 14h.01" />
            <path d="M12 18h.01" />
            <path d="M8 18h.01" />
        </svg>
    )
}

function TrendingDown(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {...props}>
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
        <polyline points="17 18 23 18 23 12" />
      </svg>
    );
  }

function Clock(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {...props}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  }

  function Calculator(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="main-grid-item-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        {...props}
      >
        <rect x="3" y="2" width="18" height="20" rx="2" ry="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="7" y1="15" x2="7" y2="15" />
        <line x1="11" y1="15" x2="11" y2="15" />
        <line x1="15" y1="15" x2="15" y2="15" />
        <line x1="7" y1="19" x2="7" y2="19" />
        <line x1="11" y1="19" x2="11" y2="19" />
        <line x1="15" y1="19" x2="15" y2="19" />
      </svg>
    );
  }
  
  function ShoppingCart(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="main-grid-item-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        {...props}
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.48-8.39H6" />
      </svg>
    );
  }
  
  function TwoWayArrow(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="main-grid-item-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        {...props}
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="8 7 12 3 16 7" />
        <polyline points="16 17 12 21 8 17" />
      </svg>
    );
  }
  
  function DecisionTreeIcon(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="main-grid-item-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        {...props}
      >
        {/* Nodo raíz */}
        <circle cx="12" cy="4" r="2" />
        {/* Primer conjunto de líneas */}
        <line x1="12" y1="6" x2="6" y2="12" />
        <line x1="12" y1="6" x2="18" y2="12" />
        {/* Nodos hijos */}
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="12" r="2" />
        {/* Segundo conjunto de líneas */}
        <line x1="6" y1="14" x2="4" y2="18" />
        <line x1="6" y1="14" x2="8" y2="18" />
        <line x1="18" y1="14" x2="16" y2="18" />
        <line x1="18" y1="14" x2="20" y2="18" />
        {/* Nodos hoja */}
        <circle cx="4" cy="18" r="2" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="16" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
      </svg>
    );
  }
  
  const TablaDecisionIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
            />
        </svg>
    );
};

export default TablaDecisionIcon