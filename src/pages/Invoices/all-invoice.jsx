import PropTypes from "prop-types"
import React , {useState }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory} from "react-router-dom"
import { withTranslation } from "react-i18next"

import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";
import { Invoice_Obj } from '../../APIs/Invoices'

function Invoices() {
  const [dataDb, setData] = useState(Invoice_Obj());
  let history = useHistory();
  
  function handleClick(prm) {
    history.push(`/property-details/${prm}`);
  }

  const column = [
    {label: "Invoice Number",field: "invoice_number",sort: "asc",width: 150},
    {label: "Invoice Date",field: "invoice_date",sort: "asc",width: 150},
    {label: "Lease",field: "lease",sort: "asc",width: 150},
    {label: "Period",field: "period",sort: "asc",width: 150},
    {label: "Amount",field: "amount",sort: "asc",width: 150},
    {label: "Paid",field: "paid",sort: "asc",width: 150},
    {label: "Balance",field: "balance",sort: "asc",width: 150},
    {label: "Due On",field: "due",sort: "asc",width: 150},
    {label: "Status",field: "status",sort: "asc",width: 150},
  ];

 const data = { 
  columns: column,
  rows: dataDb,  
 } 


  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTagComp meta_tags="FASPRO 24 | Invoices" />
      <Breadcrumb default="Dashboard" title="Invoices" />

      <CardBody> 
      <Container fluid>        
        <Row className="d-flex justify-content-around align-items-center">
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

Invoices.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(Invoices))