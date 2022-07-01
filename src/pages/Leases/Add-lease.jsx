import PropTypes from "prop-types"
import React from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";
import Form from './components/form'
import {Link} from "react-router-dom"

function AddLeases() {
  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | add Leases" />
      <Breadcrumb default="Dashboard" title="Leases" />

      <Container fluid>
        <div className="page-title-box">

          <Row className="align-items-center mb-5">
            <div>
              <Link to="/table-lease" className="btn login-btn w-md waves-effect waves-light" type="submit"> Back to lease table </Link>
            </div>
          </Row>

          <Row className="align-items-center" data-aos="fade-bottom">
           <Form />
          </Row>
        </div>
      </Container>

    </div>
    </React.Fragment>
  )
}

AddLeases.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(AddLeases))