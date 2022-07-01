import PropTypes from "prop-types"
import React from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";

function AddServiceProvider() {
  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | Service Provider" />
      <Breadcrumb default="Dashboard" title="Service Provider" />

      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <h2> Example </h2>
          </Row>
        </div>
      </Container>

    </div>
    </React.Fragment>
  )
}

AddServiceProvider.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(AddServiceProvider))