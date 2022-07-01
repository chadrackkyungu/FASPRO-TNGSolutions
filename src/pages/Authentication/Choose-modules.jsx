import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import { Row, Col, Alert, Card, CardBody } from "reactstrap"
import { withRouter, Link } from "react-router-dom"
// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// import images
import property_owner from "../../assets/images/p-owner.jpg";
import eastate from "../../assets/images/eastate.png";
import LoginImg from "../../assets/images/Faspro24_illustrations_login_3.png";
import MetaTagComp from "../../components/Common/MetaTags";

import { FaHouseUser } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const ChooseModule = props => {

  return (
    <React.Fragment>
     <MetaTagComp meta_tags="FASPRO24 | Modules" />

     <Link to="/register" className="btn login-btn w-md waves-effect waves-light m-5" type="submit"> Back </Link>

      <div className="account-pages module-container">
      <h2 className="text-center mt-5"> Sign Up </h2> 
      <p className="text-center mt-5"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout </p>
          <Row className="justify-content-center module-content-container mt-5">
            <Col md={6} lg={6} xl={6}>
                <Card className="bd-rds" data-aos="fade-bottom">
                <CardBody>
                <h4 className="text-center mb-3"> Property Owner </h4>
                <div className="continue-register"> 
                <FaHouseUser size={50} />
                </div>
                </CardBody>

                <div className="text-center">
                    <CardBody> 
                    <Link to="/property-registration" className="btn login-btn w-md waves-effect waves-light" type="submit"> Procceed </Link>
                    </CardBody>
                </div>
                  </Card>
            </Col>
            <Col md={6} lg={6} xl={6}>
                <Card className="bd-rds" data-aos="fade-bottom">
                <CardBody>
                <h4 className="text-center"> Eastate Management </h4> 
                <div className="continue-register"> 
                <BsFillPersonLinesFill size={50} />
                </div>
                </CardBody>
                <div className="text-center">
                <CardBody> 
                <Link to="/Eastate-registration" className="btn login-btn w-md waves-effect waves-light" type="submit"> Procceed </Link>
                </CardBody>
                </div>
                </Card>
            </Col>
           

          </Row>
      </div>
    </React.Fragment>
  )
}

export default ChooseModule