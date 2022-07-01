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


const Loading = props => {

  return (
    <React.Fragment>
     <MetaTagComp meta_tags="FASPRO24 | Modules" />

     <Link to="/property-registration" className="btn login-btn w-md waves-effect waves-light m-5" type="submit"> Back </Link>

      <div className="account-pages module-container-page">

            <Link to="modules"> Go Buy a Modules </Link>
         
      </div>
    </React.Fragment>
  )
}

export default Loading