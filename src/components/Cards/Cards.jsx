import React, { useEffect, useState } from 'react';
import objetoCatalogo from '../../utils/objetoCatalogo';

function Cards(props) {
  const { catalogoSeccion } = props;
  const data = objetoCatalogo;
  const [productList, setProductList] = useState(data[0].LEGOS);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Número de elementos por página

  useEffect(() => {
    miMetodo(catalogoSeccion);
  }, [catalogoSeccion]);

  function miMetodo(seccion) {
    let newProductList = data[0].LEGOS; // Valor por defecto
    if (seccion === 'VASOS') {
      newProductList = data[0].VASOS;
    } else if (seccion === 'TERMOS') {
      newProductList = data[0].TERMOS;
    } else if (seccion === 'OTROS') {
      newProductList = data[0].OTROS;
    }
    setProductList(newProductList);
    setCurrentPage(1); // Reiniciar la página al cambiar la sección
  }

  // Obtener productos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar página y mover al inicio de la lista
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Mover la ventana al inicio de la lista de productos
  };

  // Generar botones de paginación
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-4">Catálogo de Productos</h1>
        <h2 className="text-center mb-4">{catalogoSeccion === null ? 'LEGOS' : catalogoSeccion}</h2>
        <div id="content-catalog">
          <div className="row" id="product-catalog">
            {currentItems.map((elemento, index) => (
              <div className="col-md-4" id="list-product" key={index}>
                <div className="card mb-4 shadow-sm">
                  <img
                    src={elemento.image}
                    className="card-img-top img-fluid"
                    alt={elemento.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{elemento.name}</h5>
                    <p className="card-text">{elemento.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">{elemento.price} MXN</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Renderizar botones de paginación */}
          <nav>
            <ul className="pagination justify-content-center">
              {pageNumbers.map(number => (
                <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                  <button onClick={() => paginate(number)} className="page-link">
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Cards;
