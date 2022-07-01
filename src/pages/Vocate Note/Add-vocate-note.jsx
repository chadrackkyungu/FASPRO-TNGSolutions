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

function AddVocateNote() {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTagComp meta_tags="FASPRO 24 | Vocate Note" />
        <Breadcrumb default="Dashboard" title="Vocate 
        note" />

        <Container fluid> 

        
          <div className="page-title-box" >
            <CardBody  data-aos="fade-bottom">

            <Row className="align-items-center mb-5">
              <div>
                <Link to="/all-vacate" className="btn login-btn w-md waves-effect waves-light" type="submit"> Back to vocate note </Link>
              </div>
            </Row>
             
              <Card className="bd-rds" >
                <div className="TenantHeader bd-rds-header">
                  <h5>Add Vocate Note</h5>
                </div>
                <CardBody>
                  <Row className="align-items-center">
                    <Col md={12} lg={12} xl={12}>
                      <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                        <Row>
                          <Col md={12} lg={12} xl={12}>

                            <div className="mb-3">
                              <AvField  name="Tenant"  label="Tenant Name"  className="form-control" type="text" required />
                            </div>

                            <div className="mb-3">
                              <AvField name="LEase" label="lease"  type="text" required
                              />
                            </div>

                            <div className="mb-3">
                              <AvField name="property" label="Property"  type="text" required
                              />
                            </div>

                            <div className="mb-3">
                              <AvField name="unit" label="Unit"  type="text" required
                              />
                            </div>

                            <div className="mb-3">
                              <AvField name="vacating_date" label="Vacating Date"  type="date" required
                              />
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

AddVocateNote.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(AddVocateNote))
