import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
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
  FormGroup,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

import { withRouter, Link } from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb"
import MetaTagComp from "../../components/Common/MetaTags"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"

function AddTenant() {
  const [check, setCheck] = useState("")
  const getValue = (e, v) => {
    setCheck(v)
  }
  const [available, setAvailable] = useState("")
  const toggleAvailable = (e, v) => {
    setAvailable(v)
  }
  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTagComp meta_tags="FASPRO 24 | add Tenant" />
        <Breadcrumb default="Dashboard" title="Tenants" />

        <CardBody>

        
        <Container fluid>

        <Link to="/tenant-table" className="btn login-btn w-md waves-effect waves-light mb-3" type="submit"> Back to table </Link>

          <div className="page-title-box">
            <Card className="bd-rds" data-aos="fade-bottom">
              <div className="TenantHeader bd-rds-header">
                <h5>Add New Tenants</h5>
              </div>
              <CardBody>
                <Row className="align-items-center">
                  <Col md={12} lg={12} xl={12}>
                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      <Row>
                        <Col md={6} lg={6} xl={6}>
                          <div className="mb-3">
                            <AvField
                              name="firstName"
                              label="First Name"
                              className="form-control"
                              placeholder="first name"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              name="idNumber"
                              label="ID Number"
                              type="text"
                              required
                              placeholder="ID"
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              name="phoneNumber"
                              label="Phone Number"
                              type="text"
                              required
                              placeholder="phone number"
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              name="monthlyRental"
                              label="Monthly Rental"
                              type="text"
                              required
                              placeholder="monthly rental"
                            />
                          </div>
                        </Col>

                        <Col md={6} lg={6} xl={6}>
                          <div className="mb-3">
                            <AvField
                              name="flastName"
                              label="Last Name"
                              className="form-control"
                              placeholder="last name"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              name="email"
                              label="Email"
                              className="form-control"
                              placeholder="email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              name="selectTenantProperty"
                              label="Select Tenant Property"
                              className="form-control"
                              placeholder="Select Tenant Property"
                              type="text"
                              required
                            />
                          </div>
                          <FormControlLabel
                            control={<Switch />}
                            label={!available ? "Not available" : "Available"}
                            color="#67b32e"
                            size="medium"
                            onChange={toggleAvailable}
                          />
                        </Col>
                      </Row>

                      <div className="newTenantSubmitBtn">
                        <button
                          className="btn login-btn w-md waves-effect waves-light"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </AvForm>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Container>
        </CardBody>
      </div>
    </React.Fragment>
  )
}

AddTenant.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(AddTenant))
