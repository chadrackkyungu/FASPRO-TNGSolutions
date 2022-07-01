import PropTypes from "prop-types"
import React , {useState }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory} from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";
import { Payment_Obj } from '../../APIs/Payment'

function PaymentTable() {
  const [dataDb, setData] = useState(Payment_Obj());
  let history = useHistory();
  
  function handleClick(prm) {
    history.push(`/property-details/${prm}`);
  }

  const column = [
    {label: "Tenant Name",field: "tenant_name",sort: "asc",width: 150},
    {label: "Lease",field: "lease",sort: "asc",width: 150},
    {label: "Amount",field: "amount",sort: "asc",width: 150},
    {label: "Payment Method",field: "payment_method",sort: "asc",width: 150},
    {label: "Payment Date",field: "payment_date",sort: "asc",width: 150},
    {label: "Paid By",field: "paid_by",sort: "asc",width: 150},
    {label: "Reference Number",field: "reference",sort: "asc",width: 150},
    {label: "Extra Note",field: "extra_note",sort: "asc",width: 150}
  ];

 const data = { 
  columns: column,
  rows: dataDb,  
 } 


  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | Payment table" />
      <Breadcrumb default="Dashboard" title="Payment table" />

      <CardBody> 
      <Container fluid>        
        <Row className="d-flex justify-content-around align-items-center">
          <CardBody data-aos="fade-bottom">
            <div className="page-title-box mb-3">
              <Link to="/add-payment" className="btn login-btn w-md waves-effect waves-light" type="submit"> + Add Payment </Link>
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

PaymentTable.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(PaymentTable))