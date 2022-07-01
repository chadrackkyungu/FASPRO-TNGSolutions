import PropTypes from 'prop-types'
import React from "react"

import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link, useHistory, useLocation } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// actions

// import images
import logoSm from "../../assets/images/faspro24_favicon-original.png";
import LoginImg from "../../assets/images/Faspro24_illustrations_login_1.png";
import MetaTagComp from "../../components/Common/MetaTags";
import ParticlesBg from "particles-bg"; 

const Login = props => {

 {/* const handleValidSubmit = (event, values) => {}  */}
  return (
    <React.Fragment>
     
     <MetaTagComp meta_tags="FASPRO 24 | Login" />
     
      <div className="account-pages">
          <Row className="justify-content-center">
            <Col md={6} lg={6} xl={6}>
              <div className="login-content-container"> 
              <div> 
              <Card className="overflow-hidden">
                <div className="login-header">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">
                      Welcome Back !
                        </h5>
                    <p className="text-white-50">
                      Sign in to continue to FASPRO24.
                        </p>
                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          // value="admin@themesbrand.com"
                          className="form-control"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          // value="123456"
                          type="password"
                          required
                        />
                      </div>

                      <Row className="mb-3">
                        <Col sm={6}>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="customControlInline" />
                            <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                          </div>
                        </Col>

                        <Col sm={6} className="text-end">
                          <Link to="/dashboard">  <button className="btn login-btn w-md waves-effect waves-light" type="submit"> Log In </button> </Link>
                        </Col>
                      </Row>

                      <Row className="mt-2 mb-0 row">
                        <div className="col-12 mt-4" >
                          <Link to="/forgot-password" className="remember">
                            <i className="mdi mdi-lock"></i> Forgot your password?
                          </Link>
                        </div>
                      </Row>
                      
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p> Don&#39;t have an account ?  <Link to="register" className="fw-medium remember"> Signup now </Link> </p>
                <p> © {new Date().getFullYear()} FASPRO24 </p>
              </div>
              </div> 
              </div>
            </Col>

            <Col md={6} lg={6} xl={6} className="login-side-container"> 
              <div className="login-img-container">
                <img src={LoginImg} alt="faspro24-login" />
              </div>
            </Col>

          </Row>
      </div>
    </React.Fragment>
  )
}



export default Login 