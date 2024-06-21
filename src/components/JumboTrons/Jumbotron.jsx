import React from 'react';

function Jumbotron() {
  return (
    <>
      <div className="position-relative overflow-hidden p-3 p-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Comercio MXXM</h1>
          <h3 className="fw-normal text-muted mb-3">Bienvenidos a nuestro catálogo</h3>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </>
  );
}

export default Jumbotron;
