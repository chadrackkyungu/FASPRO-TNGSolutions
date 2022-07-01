import PropTypes from "prop-types"
import React,{useState} from "react"
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CardBody, Card} from "reactstrap";
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";

import { admin_json_Obj  } from '../ARRAYS-AND-OBJECTS/Admin-object';
import Welcome from './components/welcome'
import ApexChart from './components/ApexChart'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import LinesCharts from './components/LinesCharts'
import CardsChart from './components/CardsChart'

const Dashboard = () => {

  let AdminJSON = admin_json_Obj();

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTagComp meta_tags="FASPRO24 | Dashboard" />
        <Breadcrumb default="Dashboard" title="" />

        <Container fluid>
          <div className="page-title-box">

          <Welcome />
          
          <CardsChart />

          <Row>
            <Col lg={6} data-aos="fade-up-right">
              <Card className="bd-rds">
                <CardBody>
                  <h4 className="card-title mb-4"> Title here </h4>
                  <ApexChart />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6} data-aos="fade-up-left">
              <Card className="bd-rds">
                <CardBody>
                  <h4 className="card-title mb-4"> Title here </h4>
                  <LineChart />
                </CardBody>
              </Card>
            </Col>
        </Row>

          <Row>
            <Col lg={6} data-aos="fade-up-right">
              <Card className="bd-rds">
                <CardBody>
                  <h4 className="card-title mb-4"> Title here </h4>
                  <PieChart />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6} data-aos="fade-up-left">
              <Card className="bd-rds">
                <CardBody>
                  <h4 className="card-title mb-4"> Title here </h4>
                  <LinesCharts />
                </CardBody>
              </Card>
            </Col>
        </Row>
          </div>
        </Container>

      </div>
    </React.Fragment>
   )
}

Dashboard.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(Dashboard))