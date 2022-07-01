import PropTypes from "prop-types"
import React , {useState }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory} from "react-router-dom"
import { withTranslation } from "react-i18next"
import { AvForm, AvField } from "availity-reactstrap-validation"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";

function AllNotice() {

  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | Notice" />
      <Breadcrumb default="Dashboard" title="Notice" />
      <CardBody> 
      <Container fluid> 
      <div className="page-title-box" >
        <CardBody  data-aos="fade-bottom">

        <Row className="align-items-center mb-5">
          <div>
            <Link to="/add-notice" className="btn login-btn w-md waves-effect waves-light" type="submit"> + Add Notice </Link>
          </div>
        </Row>
         
        <Card className="bd-rds" >
        <div className="TenantHeader bd-rds-header">
          <Row> 
            <Col md={6}> 
                <h5>Water</h5>
            </Col>
            <Col md={6}> 
                <p> 27-06-2022 </p>
            </Col>
          </Row>           
        </div>
          <CardBody>
            <Row className="align-items-center">
             <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu </p>
            </Row>

            <button className="btn login-btn w-md waves-effect waves-light"  type="submit" > Get PDF </button>
          </CardBody>
        </Card>

          <Card className="bd-rds" >
          <div className="TenantHeader bd-rds-header">
            <Row> 
              <Col md={6}> 
                  <h5>Maintenance</h5>
              </Col>
              <Col md={6}> 
                  <p> 27-06-2022 </p>
              </Col>
            </Row>           
          </div>
            <CardBody>
              <Row className="align-items-center">
               <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu </p>
              </Row>

              <button className="btn login-btn w-md waves-effect waves-light"  type="submit" > Get PDF </button>
            </CardBody>
          </Card>

          



        </CardBody>
      </div>
    </Container>

      </CardBody>

      </div>
    </React.Fragment>
  )
}

AllNotice.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(AllNotice))