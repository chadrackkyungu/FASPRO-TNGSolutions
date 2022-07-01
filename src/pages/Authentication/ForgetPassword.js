import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import { Row, Col, Alert, Card, CardBody } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { userForgetPassword } from "../../store/actions"

// import images
import logoSm from "../../assets/images/faspro24_favicon-original.png";
import LoginImg from "../../assets/images/Faspro24_illustrations_login_3.png";
import MetaTagComp from "../../components/Common/MetaTags";

import ParticlesBg from "particles-bg";

const ForgetPasswordPage = props => {
  function handleValidSubmit(event, values) {
    props.userForgetPassword(values, props.history)
  }

  return (
    <React.Fragment>
     
     <MetaTagComp meta_tags="FASPRO24 | Forget Password" />

      <div className="account-pages">
          <Row className="justify-content-center">
            <Col md={4} lg={4} xl={4}>
            <div className="login-content-container"> 
              <div> 
              <Card className="overflow-hidden">
                <div className="login-header">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20 p-2">Forget Password</h5>
                    <a href="index.html" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </a>
                  </div>
                </div>
                <CardBody className="p-4">

                  {props.forgetError && props.forgetError ? (
                    <Alert color="danger" style={{ marginTop: "13px" }} className="mt-5">
                      {props.forgetError}
                    </Alert>
                  ) : null}
                  {props.forgetSuccessMsg ? (
                    <Alert color="success" style={{ marginTop: "13px" }} className="mt-5">
                      {props.forgetSuccessMsg}
                    </Alert>
                  ) : null}

                  <AvForm
                    className="form-horizontal mt-4"
                    onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                  >
                    <div className="mb-3">
                      <AvField
                        name="email"
                        label="Email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>
                    <Row className="mb-3">
                      <Col className="text-end">
                        <button className="btn login-btn w-md waves-effect waves-light" type="submit"> Reset </button>
                      </Col>
                    </Row>
                  </AvForm>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>Remember It ? <Link to="login" className="fw-medium remember"> Sign In here </Link> </p>
                <p> © {new Date().getFullYear()} FASPRO24 </p>
              </div>
              </div> 
              </div>
            </Col>

            <Col md={8} lg={8} xl={8} className="login-side-container"> 
              <div className="login-img-container">
                <img src={LoginImg} alt="faspro24-login" />
              </div>
            </Col>


          </Row>
      </div>
    </React.Fragment>
  )
}

ForgetPasswordPage.propTypes = {
  forgetError: PropTypes.any,
  forgetSuccessMsg: PropTypes.any,
  history: PropTypes.object,
  userForgetPassword: PropTypes.func
}

const mapStatetoProps = state => {
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword
  return { forgetError, forgetSuccessMsg }
}

export default withRouter(
  connect(mapStatetoProps, { userForgetPassword })(ForgetPasswordPage)
)
