import React from 'react';


const Footer = () => {
  return (
    <footer className="cor-b-12 py-5 py-lg-6">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h3 className="cor-6">Só Calhas</h3>
          </div>

          <div className="col-md mt-md-0 mt-4">
            <h3 className="cor-3">Contatos</h3>
            <ul>
              <li className="">
                <a className='cor-4' href="https://api.whatsapp.com/send?phone=5516997327962">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md">
            <h3 className="cor-3">Menu</h3>
            <ul>
              <li className="cor-4">
                <a href="https://api.whatsapp.com/send?phone=5516997327962">
                  +55 16 99732-7962
                </a>
              </li>


          
  
              
            </ul>
          </div>

          <div className="col">
            <h3 className="cor-3">Nos-Avalie</h3>
            <ul>
            <li className="cor-4">
                <a href="https://api.whatsapp.com/send?phone=5516997327962">
                  Gostou do nosso serviço então nos <a href="/">Avalie</a>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
