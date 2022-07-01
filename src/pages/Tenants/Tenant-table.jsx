import PropTypes from "prop-types"
import React , {useState }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory} from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";
import { Tenant_Obj } from '../../APIs/Tenants'

function TenantTable() {
  const [dataDb, setData] = useState(Tenant_Obj());
  let history = useHistory();
  
  function handleClick(prm) {
    history.push(`/property-details/${prm}`);
  }

  const column = [
    {label: "First Name",field: "name",sort: "asc",width: 150},
    {label: "Last Name",field: "lastName",sort: "asc",width: 150},
    {label: "Phone Number",field: "phone_num",sort: "asc",width: 150},
    {label: "Monthly Rental",field: "monthly_rental",sort: "asc",width: 150},
    {label: "Payment Method",field: "pament_method",sort: "asc",width: 150},
    {label: "Email",field: "email",sort: "asc",width: 150},
    {label: "Select Tenant Property ",field: "select_tenant_property",sort: "asc",width: 150},
    {label: "Available",field: "on_and_of",sort: "asc",width: 150},
  ];

 const data = { 
  columns: column,
  rows: dataDb,  
 } 


  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | Tenant table" />
      <Breadcrumb default="Dashboard" title="Tenant table" />

      <CardBody> 
        <Container fluid>
              <Link to="/add-tenant" className="btn login-btn w-md waves-effect waves-light mb-3" type="submit"> + Add Tenant </Link>

          <Row className="d-flex justify-content-around align-items-center" >
              <CardBody data-aos="fade-bottom">
              <Card className="bd-rds">
                  <CardBody>
                  <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover  data={data} fullPagination />            
                  </CardBody>
              </Card>
              </CardBody>
        </Row>

        </Container>
      </CardBody>

      </div>
    </React.Fragment>
  )
}

TenantTable.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(TenantTable))