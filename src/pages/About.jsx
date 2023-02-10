import React from "react";

export const About = () => {
  return (
    <div className="main">
      <div className="objetive">
        <p>
          Un proyecto depende en gran medida, de su grado de evaluación, que no
          es otra cosa que la valoración de sus riesgos, gastos, beneficios,
          recursos y elementos. Dicho de otra manera, se trata de buscar la
          mejor alternativa de ejecución. Todo proceso de evaluación implica
          situarse en escenarios hipotéticos. El objetivo de este simulador es
          poner el proyecto en dichos escenarios y, a la vez, tratar de plantear
          los retos que ello implicaría para el cumplimiento de las metas
          iniciales. De este modo el simulador puede introducir los cambios que
          mejoren la ejecución del proyecto de inversión.
        </p>
      </div>
      <div className="img-center">
        <img className="img__about" src="about-img.png" alt="" />
      </div>
    </div>
  );
};
