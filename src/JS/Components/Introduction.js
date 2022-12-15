import React from 'react';
import Sorriso from '../../assets/icons/sorisso.svg';
import Velocidade from '../../assets/icons/velocidade.svg';
import Tempo from '../../assets/icons/Tempo.svg';
import Garantia from '../../assets/icons/garantia.svg';
import Servico from '../../assets/img/servico-1.jpg';
const Introduction = () => {
  return (
    <section className="py-5">
      <div className="container text-start  mt-2">
        <div className="row d-flex align-items-center">
          <div className="col-md">
            <p className='text-secondary'>Desde 1990 realizando trabalhos.</p>
            <h1 className='mb-4 fs-1 h1'>Porque nos contratar?</h1>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <div className="">
                      <img  className="img-fluid mb-1" src={Garantia} alt="" />
                      <p>Selo de Serviço grantido </p>
                    </div>

                    <div className="">
                      <img className='mb-1' src={Tempo} alt="" />
                      <p>
                        Economize tempo contratando profissionais capacitados
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="col">
                      <div >
                        <img className='mb-1' src={Sorriso} alt="" />
                        <p>+1000 clientes satisfeitos </p>
                      </div>

                      <div className="">
                        <img className='mb-1' src={Velocidade} alt="" />
                        <p>99,9% dos serviços entregues dentro do prazo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <img src={Servico} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
