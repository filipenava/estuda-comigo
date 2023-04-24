/*!

=========================================================
* Estuda Comigo - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded Projeto p/ EJ COMP

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3"><strong>Encontre seu professor ideal no Estuda Comigo!</strong></h2>
              </Col>
            </Row>
            <div className="blur--hover">
              <a href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page">
                <div className="icons-container blur-item mt-5 on-screen">
                  <i className="icon ni ni-trophy" />
                  <i className="icon ni ni-like-2" />
                  <i className="icon ni ni-like-2" />
                  <i className="icon ni ni-calendar-grid-58" />
                  <i className="icon ni ni-single-02" />
                  <i className="icon ni ni-single-02" />
                  <i className="icon ni ni-single-02" />
                  <i className="icon ni ni-satisfied" />
                  <i className="icon ni ni-satisfied" />
                  <i className="icon ni ni-satisfied" />
                  <i className="icon ni ni-calendar-grid-58" />
                  <i className="icon ni ni-circle-08" />
                  <i className="icon ni ni-circle-08" />
                </div>  
                <span className="blur-hidden h5 text-success">
                Encontre um professor Agora!
                </span>
              </a>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
