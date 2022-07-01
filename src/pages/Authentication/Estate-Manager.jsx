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

const EstateManagement = props => {

  const handleValidSubmit = (event, values) => {
    props.registerUser(values)
  }

  useEffect(() => {
    props.apiError("")
  }, []);

  return (
    <React.Fragment>
      <MetaTagComp meta_tags="FASPRO 24 | Property Manager" />

      <div className="account-pages">
          <Row className="justify-content-center">
            <Col md={8} lg={8} xl={8}>
          <div className="property-content-container mt-3"> 
            <div> 
            <Link to="/continue-signup" className="btn login-btn w-md waves-effect waves-light mb-3" type="submit"> Back </Link>
              <Card className="overflow-hidden">

                <div className="login-header">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Eastate Manager signup</h5>
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

                <Row>
                    <Col md={6} lg={6} >
                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          value="chad@gmail.com"
                          className="form-control"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="name"
                          label="Name"
                          type="text"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="lastName"
                          label="Last Name"
                          type="text"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="lastName"
                          label="Last Name"
                          type="text"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="number"
                          label="Phone Number"
                          type="number"
                          required
                        />
                      </div>
                    </Col>
                    
                    <Col md={6} lg={6} >
                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          value="chad@gmail.com"
                          className="form-control"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="name"
                          label="Name"
                          type="text"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="lastName"
                          label="Last Name"
                          type="text"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="number"
                          label="Phone Number"
                          type="number"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="number"
                          label="Phone Number"
                          type="number"
                          required
                        />
                      </div>
                    </Col>
                </Row>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                         <Link to="modules"> <button className="btn login-btn w-md waves-effect waves-light" type="submit"> Submit </button> </Link>
                        </div>
                      </div>

                     
                    </AvForm>
                  </div>
                </CardBody>
              </Card>

              </div> 
              </div> 
            </Col>

            <Col md={4} lg={4} xl={4} className="login-side-container"> 
              <div className="login-img-container">
                <img src={LoginImg} alt="faspro24-login" />
              </div>
            </Col>

          </Row>
      </div>
    </React.Fragment>
  )
}

EstateManagement.propTypes = {
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
})(EstateManagement)
