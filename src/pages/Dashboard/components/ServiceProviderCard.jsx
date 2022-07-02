import PropTypes from "prop-types";
import React from 'react';
import { Col, Container, Row,CardBody,Card, Progress } from "reactstrap"
import { service_pro_json_Obj  } from '../../ARRAYS-AND-OBJECTS/ServiceProvider_Obj';
import { withTranslation } from "react-i18next"
import { withRouter, Link } from "react-router-dom"

function ServiceProvider(props) {

    let service_JSON = service_pro_json_Obj();

  return (
    <React.Fragment>
        <Row className="">
            {
                service_JSON.map((card, i) =>{
                return (
                  <Col xl={2} md={6} key={i}> 
                  <Link to={card.link} className="text-black"> 
                  <Card data-aos="fade-left" className="bd-rds">
                    <CardBody>

                      <div className="d-flex align-items-start">
                      
                        <div className="flex-1">
                          <div className="font-size-16 mt-2">{props.t(card.title)}</div>
                        </div>
                      </div>

                      <h4 className="mt-2">{props.t(card.number)}</h4>

                      <div className="row">
                        <div className="col-7">
                          <p className="mb-0"><span className={card.text}> {props.t(card.percentage)} </span> </p>
                        </div>
                      
                      </div>

                    </CardBody>
                  </Card>
                  </Link> 

                  </Col>
                )
              })
            }
           
          </Row>
    </React.Fragment>
  )
}

ServiceProvider.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(ServiceProvider))