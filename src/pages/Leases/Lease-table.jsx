import PropTypes from "prop-types"
import React , {useState }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory} from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";
import { properties_Obj } from '../../APIs/Properties'

function LeaseTable() {

  const [dataDb, setData] = useState(properties_Obj());
  let history = useHistory();
  
  function handleClick(prm) {
    history.push(`/property-details/${prm}`);
  }

  const column = [
   {label: "Property Name",field: "property_name",sort: "asc",width: 150},
   {label: "Property Code",field: "property_code",sort: "asc",width: 150},
   {label: "Unit Name",field: "unit_name",sort: "asc",width: 150},
   {label: "Total Rooms",field: "total_rooms",sort: "asc",width: 150},
   {label: "Payment Method",field: "pament_method",sort: "asc",width: 150},
   {label: "Late Fee",field: "late_fee",sort: "asc",width: 150},
   {label: "Late Fee Cost",field: "late_fee_cost",sort: "asc",width: 150},
   {label: "Frequency",field: "Frequency",sort: "asc",width: 150},
  ];

 const data = { 
  columns: column,
  rows: dataDb,  
 } 


  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | Property table" />
      <Breadcrumb default="Dashboard" title="Property table" />

      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
          <div>
            <Link to="/add-lease" className="btn login-btn w-md waves-effect waves-light" type="submit"> + Add Properties </Link>
          </div>

          </Row>
        </div>

        <Row className="d-flex justify-content-around align-items-center" data-aos="fade-bottom">
        <CardBody>
          <Card className="bd-rds">
            <CardBody>
              <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover  data={data} fullPagination />            
            </CardBody>
          </Card>
        </CardBody>
      </Row>


      </Container>

      </div>
    </React.Fragment>
  )
}

LeaseTable.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(LeaseTable))