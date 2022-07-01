import PropTypes from "prop-types";
import React from 'react'
import { CardBody, Card} from "reactstrap";

import { withTranslation } from "react-i18next"
import { withRouter } from "react-router-dom"

const Welcome = props => {
  return (
    <div className="" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <Card className="welcome"> 
            <CardBody> 
                <h5> {props.t("Hi John Welcome to FASPRO24")}  </h5>
                <p> {props.t("Welcome to  faspro dashboard manegement properties")}  </p> 
            </CardBody>
        </Card>
    </div>
  )
}

Welcome.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(Welcome))