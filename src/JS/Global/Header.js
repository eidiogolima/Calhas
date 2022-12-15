import React from 'react';
import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className='cor-b-2'>
      <nav className="navbar navbar-expand-md bg-light d-flex container-md-fluid container-lg p-2 justify-content-between">
        <a href="/">
          <img src={Logo} alt="" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse flex-grow-0"
        >
          <ul className="d-flex navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                WhastApp
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Quem Somos ?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Avaliações
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-white" href="/">
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
