import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";

export const Doc = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);

  const contentSidebar = [
    {
      num: 1,
      title: 'Inversión',
    },
    {
      num: 2,
      title: 'Fondos Propios',
    },
    {
      num: 3,
      title: 'Financiamiento',
    },
    {
      num: 4,
      title: 'Tasa de fondos propios',
    },
    {
      num: 5,
      title: 'Tasa de financiamiento',
    },
    {
      num: 6,
      title: 'Vida del proyecto',
    },
  ]

  const onShowLeft = () => {
    setVisibleLeft(false);
  }

  const SidebarURL = (num, title) => (
    <a className="link__doc" href={`#Dato${num}`} onClick={onShowLeft}>
      {title}
    </a>
  )


  const template = (options) => {
    const toggleIcon = options.collapsed
      ? "pi pi-chevron-down"
      : "pi pi-chevron-up";
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    return (
      <div className={className}>
        <button
          className={options.togglerClassName}
          onClick={options.onTogglerClick}
        >
          <span className={toggleIcon}></span>
          <Ripple />
        </button>
        <span className={titleClassName}>Primer titulo de prueba</span>
      </div>
    );
  };

  return (
    <div className="main">
      <div className="card space-left__button">
        <Sidebar
          visible={visibleLeft}
          onHide={() => setVisibleLeft(false)}
          modal={false}
          fullScreen={false}
        >
          <h5>Contenido</h5>
          {
            contentSidebar.map((item, i) => (
              <div key={i}>
                {SidebarURL(item.num, item.title)}
              </div>
            ))
          }
        </Sidebar>
        <Button
          icon="pi pi-arrow-right"
          label="Doc"
          onClick={() => setVisibleLeft(true)}
          className="mr-2 buttom__doc"
        />
        <div id="Dato1" style={{ paddingTop: "40px" }}>
          <Panel header="Inversión" toggleable>
            <p>
              El término inversión se refiere al acto de postergar el beneficio
              inmediato del bien invertido por la promesa de un beneficio futuro
              más o menos probable. Una inversión es una cantidad limitada de
              dinero que se pone a disposición de terceros, de una empresa o de
              un conjunto de acciones, con la finalidad de que se incremente con
              las ganancias que genere ese proyecto empresarial.
            </p>
          </Panel>
        </div>
        <div id="Dato2" className="panel">
          <Panel header="Recursos Propios" toggleable>
            <p>
              Es aquella cantidad de dinero que usted aporta a la inversión total.
            </p>
          </Panel>
        </div>
        <div id="Dato3" className="panel">
          <Panel header="Financiamiento" toggleable>
            <p>
              Es aquella cantidad de dinero que es solicitada para formar parte de la inversión, puede ser data por bancos en forma de pretamos, o por terceros en forma de créditos.
            </p>
          </Panel>
        </div>
        <div id="Dato4" className="panel">
          <Panel header="Tasa de Fondos Propios" toggleable>
            <p>
              Es la tasa de interés que se aplica a los fondos propios. esto se realiza con el objetivo de obtener una rentabilidad esperada al dinero invertido por el propietario de la iversión.
            </p>
          </Panel>
        </div>
        <div id="Dato5" className="panel">
          <Panel header="Tasa de Financiamiento" toggleable>
            <p>
              Es la tasa de interés que los bancos o personas externas solicitan para el financiamiento de la inversión. esto con el objetivo de generer rentabilidad de la inversión.
            </p>
          </Panel>
        </div>
        <div id="Dato6" className="panel">
          <Panel header="Vida del Proyecto" toggleable>
            <p>
              Es el tiempo que dura el proyecto empresarial. es la cantidad estimada de la duración del proyecto.
            </p>
          </Panel>
        </div>
        {/* <div id="Dato7" className="panel">
          <Panel headerTemplate={template} toggleable>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>
        </div>
        <div id="Dato8" className="panel">
          <Panel headerTemplate={template} toggleable>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>
        </div>
        <div id="Dato9" className="panel">
          <Panel headerTemplate={template} toggleable>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>
        </div>
        <div id="Dato10" className="panel">
          <Panel headerTemplate={template} toggleable>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>
        </div>
        <div id="Dato11" className="panel">
          <Panel headerTemplate={template} toggleable>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>
        </div>
        <div id="Dato12" className="panel">
          <Panel header="Ultimo" toggleable>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>
        </div> */}
      </div>
    </div>
  );
};
