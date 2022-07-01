import PropTypes from "prop-types"
import React from 'react'
import { Col, Container, CardBody, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

import { FiShare } from 'react-icons/fi';

import { withRouter, Link } from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";

function AddDocument() {
  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | Documents" />
      <Breadcrumb default="Dashboard" title="Share Document" />

      <Container fluid>
        <CardBody> 
          <div className="page-title-box">
            <div className="container-content"> 
           <CardBody> 
            {/* 
            <div className="share-Container">
              <FiShare size={100} className="share-icon"/>
            </div>           
          */}

            <form action="/action_page.php" className="share-Container">

              <input type="file" id="myFile" name="filename" className="mb-5"/>
             
              <div className="page-title-box mb-3 mt-5">
                <Link to="/add-booking" className="btn login-btn w-md waves-effect waves-light" type="submit"> 
                Submit </Link>
             </div>

            </form>

          </CardBody> 
            </div>
          </div>
        </CardBody>
      </Container>

    </div>
    </React.Fragment>
  )
}

AddDocument.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(AddDocument))