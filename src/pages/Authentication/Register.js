import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { registerUser, apiError, registerUserFailed } from "../../store/actions"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// import images
import logoSm from "../../assets/images/faspro24_favicon-original.png";
import LoginImg from "../../assets/images/Faspro24_illustrations_login_2.png";
import MetaTagComp from "../../components/Common/MetaTags";

import ParticlesBg from "particles-bg";

const Register = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.registerUser(values)
  }

  useEffect(() => {
    props.apiError("")
  }, []);

  return (
    <React.Fragment>
      <MetaTagComp meta_tags="FASPRO 24 | SignUp" />

      <div className="account-pages">
          <Row className="justify-content-center">
            <Col md={6} lg={6} xl={6}>
          <div className="login-content-container"> 
            <div> 
              <Card className="overflow-hidden">

                <div className="login-header">
                  <div className="text-primary text-center p-4">
                    <p className="text-white-50"> Get your free FASPRO24 account now. </p>
                    <a href="index.html" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </a>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {props.registrationError &&
                        props.registrationError ? (
                          <Alert color="danger">
                            {props.registrationError}
                          </Alert>
                        ) : null}

                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                     
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                        <Link to="/continue-signup"> <button className="btn login-btn w-md waves-effect waves-light" type="submit" >  SignUp  </button></Link>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <p className="mb-0">
                            By registering you agree to FASPRO24
                            <Link to="#" className="remember"> Terms of Use </Link>
                          </p>
                        </div>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-5 text-center">
                <p> Already have an account ? <Link to="/login" className="fw-medium remember"> Login </Link> </p>
                <p>  © {new Date().getFullYear()} FASPRO24  </p>
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

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)
