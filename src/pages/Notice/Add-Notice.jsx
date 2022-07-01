import PropTypes from "prop-types"
import React from "react"
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardBody,
  Card,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

import { withRouter, Link } from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb"
import MetaTagComp from "../../components/Common/MetaTags"

function AddNotice() {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTagComp meta_tags="FASPRO 24 | Notice" />
        <Breadcrumb default="Dashboard" title="Notice 
        note" />

        <Container fluid> 

        
          <div className="page-title-box" >
            <CardBody  data-aos="fade-bottom">

            <Row className="align-items-center mb-5">
              <div>
                <Link to="/all-notice" className="btn login-btn w-md waves-effect waves-light" type="submit"> Back to my notice </Link>
              </div>
            </Row>
             
              <Card className="bd-rds" >
                <div className="TenantHeader bd-rds-header">
                  <h5>Add Notice </h5>
                </div>
                <CardBody>
                  <Row className="align-items-center">
                    <Col md={12} lg={12} xl={12}>
                      <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                        <Row>
                          <Col md={12} lg={12} xl={12}>

                            <div className="mb-3">
                              <AvField  name="title"  label="Title"  className="form-control" type="text" required />
                            </div>

                            <div className="mb-3">
                              <AvField name="name" label="Name"  type="text" required
                              />
                            </div>

                            <div className="mb-3">
                              <AvField name="date" label="Choose Date"  type="date" required
                              />
                            </div>

                            <div className="mb-3">
                              <AvField className="form-control" type="textarea"  label="Description"  rows="3"  name="notice" errorMessage="This value is required." validate={{ required: { value: true } }} />
                            </div>
                            
                          </Col>
                        </Row>

                        <div className="newTenantSubmitBtn">
                          <button  className="btn login-btn w-md waves-effect waves-light" type="submit">Save</button>
                        </div>

                      </AvForm>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </CardBody>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

AddNotice.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(AddNotice))
