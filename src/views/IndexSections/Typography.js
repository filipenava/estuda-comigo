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
import { Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>


        

        {/* <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Lead text
            </small>
          </Col>
          <Col sm="9">
            <p className="lead">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Quote
            </small>
          </Col>
          <Col sm="9">
            <blockquote className="blockquote">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Muted text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-muted mb-0">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Primary text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-primary">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Info text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-info mb-0">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row> */}
        {/* <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Success text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-success mb-0">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row> */}
        {/* <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Warning text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-warning mb-0">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row> */}
        {/* <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Danger text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-danger mb-0">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row> */}
        <h2 className="mt-lg mb-5">
          <span>Melhores Aulas:</span>
        </h2>
        <Row>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            Matemática
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("assets/img/theme/team-1-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            Português
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow"
              src={require("assets/img/theme/team-2-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            Biologia
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/theme/team-3-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            Física
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg"
              src={require("assets/img/theme/team-4-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Typography;
