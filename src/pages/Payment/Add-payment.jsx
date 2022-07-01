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

import { withRouter, Link } from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb"
import MetaTagComp from "../../components/Common/MetaTags"
import { AvForm, AvField } from "availity-reactstrap-validation"

function AddPayment() {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTagComp meta_tags="FASPRO 24 | add Payment" />
        <Breadcrumb default="Dashboard" title="Payment" />

        <Container fluid>
          <div className="page-title-box">
            <CardBody data-aos="fade-bottom">
              <div className="page-title-box mb-3">
              <Link to="/payment-table" className="btn login-btn w-md waves-effect waves-light" type="submit"> Payment Table  </Link>
            </div>
              <Card className="bd-rds">
                <div className="TenantHeader bd-rds-header">
                  <h5>Add Payment</h5>
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
                          <Col md={12} lg={12} xl={12}>
                            <div className="mb-3">
                              <AvField
                                name="tenant"
                                label="Tenant"
                                className="form-control"
                                placeholder="tenant"
                                type="text"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <AvField
                                name="lease"
                                label="Lease"
                                type="text"
                                required
                                placeholder="lease"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4} lg={4} xl={4}>
                            <div className="mb-3">
                              <AvField
                                name="amount"
                                label="Amount"
                                className="form-control"
                                placeholder="amount"
                                type="text"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={4} lg={4} xl={4}>
                            <div className="mb-3">
                              <AvField
                                name="paymentMethode "
                                label="Payment Method"
                                type="text"
                                required
                                placeholder="payment method"
                              />
                            </div>
                          </Col>
                          <Col md={4} lg={4} xl={4}>
                            <div className="mb-3">
                              <AvField
                                name="paymentDate "
                                label="Payment Date"
                                type="text"
                                required
                                placeholder="payment date"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6} lg={6} xl={6}>
                            <div className="mb-3">
                              <AvField
                                name="paid"
                                label="Paid By"
                                className="form-control"
                                placeholder="paid"
                                type="text"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={6} lg={6} xl={6}>
                            <div className="mb-3">
                              <AvField
                                name="referenceNumber"
                                label="Reference Number"
                                type="text"
                                required
                                placeholder="reference"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12} lg={12} xl={12}>
                            <div className="mb-3">
                              <AvField
                                name="extraNote"
                                label="Extra Note"
                                className="form-control"
                                placeholder="extra note"
                                type="text"
                                required
                              />
                            </div>
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
            </CardBody>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

AddPayment.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(AddPayment))
