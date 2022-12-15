import React from 'react';
import Servico2 from '../../assets/img/servico-2.jpg';
import Servico3 from '../../assets/img/servico-3.jpg';
import Servico4 from '../../assets/img/Servico-4.jpg';

const Services = () => {
  return (
    <section className="cor-b-12 py-lg-6 py-5">
      <div className="container">
        <span className="cor-6 text-secondary-l">CONHEÇA</span>
        <h1 className="fs-1 cor-3 mb-3">Nossos serviços</h1>

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
           
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Servico2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h2>Excelência</h2>
                <p>
                há mais de 10 anos realizando serviços. 
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Servico3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h2>Qualidade</h2>
                <p>
                 +500 clientes satisfeitos e mais de 4,6 no google maps  
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Servico4} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h2>Profissionalismo</h2>
                <p>
                Serviços de Calhas Rufos Condutores/Manutenção e limpeza de calha 
                </p>
              </div>
            </div>

        
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
