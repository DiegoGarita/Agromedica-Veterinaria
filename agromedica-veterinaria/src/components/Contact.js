import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <Container>
        <Row className="align-items-center">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17432.198399427507!2d-83.87185616619168!3d9.886248016251127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0dfcc1b8f2dc9%3A0x268756c7928d55ae!2sSVA%20Agrmedica!5e0!3m2!1ses!2scr!4v1667021677549!5m2!1ses!2scr"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Row>
        <Row>
          <div>
            <br />
            <h3>Ubicación: </h3>
            <h5>
              Ubicación: 100m este de la iglesia de Paso Ancho Cot de Oreamuno,
              Cartago, Costa Rica
            </h5>
            <hr />
            <br />
            <h3>Horario: </h3>
            <br />
            <Button variant="success">Lunes: 08:00 - 18:00</Button>
            <br />
            <br />
            <Button variant="success">Martes: 08:00 - 18:00</Button>
            <br />
            <br />
            <Button variant="success">Miércoles: 08:00 - 18:00</Button>
            <br />
            <br />
            <Button variant="success">Jueves: 08:00 - 18:00</Button>
            <br />
            <br />
            <Button variant="success">Viernes: 08:00 - 18:00</Button>
            <br />
            <br />
            <Button variant="success">Sábado: 08:00 - 17:30</Button>
            <br />
            <br />
            <hr />
            <h3>Contacto: </h3>
            <h6>
              Para consulta directa puede escribirnos por Whatsapp: +506 8615
              7424
            </h6>
          </div>
        </Row>
      </Container>
    </section>
  );
};
