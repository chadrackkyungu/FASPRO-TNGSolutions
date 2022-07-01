import PropTypes from "prop-types"
import React , {useState }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory} from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";
import { Booking_Obj } from '../../APIs/Booking'

function BookingTable() {
  const [dataDb, setData] = useState(Booking_Obj());
  let history = useHistory();
  
  function handleClick(prm) {
    history.push(`/property-details/${prm}`);
  }

  const column = [
    {label: "Start Time", field: "startTime",sort: "asc", width: 150},
    {label: "End Time", field: "endTime",sort: "asc", width: 150},
    {label: "Date", field: "date",sort: "asc",width: 150},
    {label: "Message", field: "message",sort: "asc", width: 150},
  ];

 const data = { 
  columns: column,
  rows: dataDb,  
 } 


  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | Booking table" />
      <Breadcrumb default="Dashboard" title="Booking table" />

      <CardBody> 
      <Container fluid>        
        <Row className="d-flex justify-content-around align-items-center">
          <CardBody data-aos="fade-bottom">
            <div className="page-title-box mb-3">
              <Link to="/add-booking" className="btn login-btn w-md waves-effect waves-light" type="submit"> + Add Bookings </Link>
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

BookingTable.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(BookingTable))