import PropTypes from "prop-types";
import React from 'react';
import { Col, Container, Row,CardBody,Card, Progress } from "reactstrap"
import { admin_json_Obj  } from '../../ARRAYS-AND-OBJECTS/Admin-object';
import { withTranslation } from "react-i18next"
import { withRouter } from "react-router-dom"

function CardsChart(props) {

    let AdminJSON = admin_json_Obj();

  return (
    <React.Fragment>
        <Row className="">
            {
              AdminJSON.map((card, i) =>{
                return (
                  <Col xl={3} md={6} key={i}> 

                  <Card data-aos="fade-left" className="bd-rds">
                    <CardBody>

                      <div className="d-flex align-items-start">
                        <div className="avatar-sm font-size-20 me-3">
                            <card.icon size={card.size} className="icon-mobile-size"/>
                        </div>
                        <div className="flex-1">
                          <div className="font-size-16 mt-2">{props.t(card.title)}</div>
                        </div>
                      </div>

                      <h4 className="mt-2">{props.t(card.number)}</h4>

                      <div className="row">
                        <div className="col-7">
                          <p className="mb-0"><span className={card.text}> {props.t(card.percentage)} <i
                            className="mdi mdi-arrow-up"></i> </span></p>
                        </div>
                        <div className="col-5 align-self-center">

                          <Progress
                            value={card.value_progress}
                            color={card.color}
                            className="bg-transparent progress-sm"
                            size="sm"
                          />
                        </div>
                      </div>

                    </CardBody>
                  </Card>

                  </Col>
                )
              })
            }
           
          </Row>
    </React.Fragment>
  )
}

CardsChart.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(CardsChart))