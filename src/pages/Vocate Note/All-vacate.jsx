import PropTypes from "prop-types"
import React , {useState }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory} from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";
import { VacateNote_Obj } from '../../APIs/VacateNote'

function VocateNote() {
  const [dataDb, setData] = useState(VacateNote_Obj());
  let history = useHistory();
  
  function handleClick(prm) {
    history.push(`/property-details/${prm}`);
  }

  const column = [
    {label: "Tenant",field: "tenant",sort: "asc",width: 150},
    {label: "Lease",field: "lease",sort: "asc",width: 150},
    {label: "Property",field: "property",sort: "asc",width: 150},
    {label: "Unit",field: "unit",sort: "asc",width: 150},
    {label: "Vacating Date",field: "vacating_date",sort: "asc",width: 150},
  ];

 const data = { 
  columns: column,
  rows: dataDb,  
 } 


  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | Vocate Note" />
      <Breadcrumb default="Dashboard" title="Vocate table" />

      <CardBody> 
      <Container fluid>        
        <Row className="d-flex justify-content-around align-items-center">
          <CardBody data-aos="fade-bottom">
            <div className="page-title-box mb-3">
              <Link to="/add-vacate-note" className="btn login-btn w-md waves-effect waves-light" type="submit"> + Add Vocate Note </Link>
            </div>
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

VocateNote.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(VocateNote))