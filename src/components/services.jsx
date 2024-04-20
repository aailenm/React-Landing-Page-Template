import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>
          Ofrecemos servicios de bordado industrial para ropa de trabajo y blanquería. Cotizamos a medida y por cantidad, adaptándonos a las necesidades específicas de cada empresa. Nuestra calidad y precisión nos distinguen, asegurando resultados duraderos y profesionales.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 d-flex align-items-center  item-service">
                  <div className="service-icon">
                    <img src={d.icon} alt="" />{" "}
                  </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
