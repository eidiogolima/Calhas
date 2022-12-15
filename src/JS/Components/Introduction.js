import React from 'react';
import Sorriso from '../../assets/icons/sorisso.svg';
import Velocidade from '../../assets/icons/velocidade.svg';
import Tempo from '../../assets/icons/Tempo.svg';
import Garantia from '../../assets/icons/garantia.svg';
import Servico from '../../assets/img/servico-1.jpg';
const Introduction = () => {
  return (
    <section className="py-lg-6 py-5 cor-b-2">
      <div className="container-sm-fluid container-lg text-start mt-2">
        <div className="row d-flex align-items-center">
          <div className="col-md">
            <span className='cor-7 text-secondary-l '>Desde 1990 realizando trabalhos.</span>
            <h1 className='mb-4 fs-1 h1'>Porque nos contratar ?</h1>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-sm ">
                    <div className="mb-2">
                      <img  className="img-fluid mb-3" width="50px" src={Garantia} alt="" />
                      <p>Selo de Serviço grantido </p>
                    </div>

                    <div className="mb-2">
                      <img className='mb-3' width="50px" src={Tempo} alt="" />
                      <p>
                        Economize tempo contratando profissionais capacitados
                      </p>
                    </div>
                  </div>

                  <div className="col ">
                    <div className="mb-2">
                      <div >
                        <img className='mb-3' width="50px" src={Sorriso} alt="" />
                        <p>+1000 clientes satisfeitos </p>
                      </div>

                      <div className="mb">
                        <img className='mb-3 img-fluid' width="50px" src={Velocidade} alt="" />
                        <p>99,9% dos serviços entregues dentro do prazo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg col-lg-auto">
            <img className='d-none d-lg-block' src={Servico} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
