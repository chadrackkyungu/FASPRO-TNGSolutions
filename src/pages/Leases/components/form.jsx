import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  FormGroup,
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"


const FormWizard = props => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(25)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  const [btn_Valid, setBtnValid] = useState()

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {        
        setactiveTab(tab)
      }
    }
  }

  function toggleTabVertical(tab) {
    
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab)

        if (tab === 1) {
          setprogressValue(25)
        }
        if (tab === 2) {
          setprogressValue(50)
        }
        if (tab === 3) {
          setprogressValue(75)
        }
        if (tab === 4) {
          setprogressValue(100)
        }
      }
    }
  }

  const handleValidSubmit = (event, values) => {
    console.log(" Result ", values);
    // setBtnValid(values);
    props.loginUser(values, props.history)
  }

  
  const [check, setCheck] = useState("")
  const [available, setAvailable] = useState("")

  const getValue = (e, v) => {
    setCheck(v)
  }

  const toggleAvailable = (e, v) => {
    console.log(v);
    setAvailable(v)
  }



  return (
    <React.Fragment>
        <Container fluid={true}  >

          <Row>
            <Col sm="12" >
              <Card className="bd-rds" data-aos="fade-bottom">

                <CardBody>

                  <h4 className="card-title mb-4"> Add Properties Details </h4>

                  <div className="form-horizontal form-wizard-wrapper wizard clearfix">

                      {/* THE NAVIGATION STEPS HEADER */}
                    <div className="steps clearfix">
                      <ul>
                        <NavItem className={classnames, "nav_tab",( { current: activeTab === 1 })}>
                          <NavLink className={classnames({ current: activeTab === 1 })} onClick={() => {  setactiveTab(1) }}>
                            <span className="number">1.</span>  Lease Info
                          </NavLink>
                        </NavItem>
                        
                        <NavItem className={classnames({ current: activeTab === 2 })}>
                          <NavLink className={classnames({ active: activeTab === 2 })} onClick={() => { setactiveTab(2)}}>
                            <span className="number">2.</span> Payment & Extra Charges 
                          </NavLink>
                        </NavItem>

                        <NavItem className={classnames({ current: activeTab === 3 })}>
                          <NavLink className={classnames({ active: activeTab === 3 })} onClick={() =>{setactiveTab(3)}}>
                            <span className="number">3.</span>Late Fees & Utilities
                        </NavLink>
                        </NavItem>

                        <NavItem className={classnames({ current: activeTab === 4 })}>
                          <NavLink  className={classnames({ active: activeTab === 4 })}onClick={() => { setactiveTab(4)}}>
                            <span className="number">4.</span> Successfull Add Tenant
                          </NavLink>
                        </NavItem>
                      </ul>
                  </div>

                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => {  handleValidSubmit(e, v)}}>

                  <div className="content clearfix">
                    {/* THE ENTIRE TAB */}
                       <TabContent activeTab={activeTab} className="body">
                       {/* TAB ONE */}
                        <TabPane tabId={1}>
                        <Row>
                        <Col md={6}>
                              <div className="mb-5">
                                <h5 className="text-center"> Lease Info </h5>
                              </div>

                                <div className="mb-3">
                                  <AvField  name="property" label="Property" className="form-control"  type="text" required/>
                                </div>

                                <div className="mb-3">
                                  <AvField  name="unit" label="Unit" className="form-control"  type="select" required placeholder="...">
                                    <option>  </option>
                                    <option> Other </option>
                                    <option> House </option>
                                    <option> Apartment </option>
                                    <option> Commercial </option>
                                    <option> Duplex </option>
                                    <option> Mixed Use </option>
                                  </AvField>
                                </div>

                                <div className="mb-3">
                                  <AvField  name="leaseType" label="Lease Type" className="form-control"  type="select" required placeholder="...">
                                    <option>  </option>
                                    <option> Commercial </option>
                                    <option> Residential </option>
                                  </AvField>
                                </div>

                                <div className="mb-3">
                                  <AvField  name="unit" label="Due On (Day of Month)" className="form-control"  type="select" required placeholder="...">
                                    <option>  </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                    <option> 6 </option>
                                    <option> 7 </option>
                                    <option> 8 </option>
                                    <option> 9 </option>
                                    <option> 10 </option>
                                    <option> 11 </option>
                                    <option> 12 </option>
                                    <option> 13 </option>
                                    <option> 14 </option>
                                    <option> 15 </option>
                                    <option> 16 </option>
                                    <option> 18 </option>
                                    <option> 19 </option>
                                    <option> 20 </option>
                                    <option> 21 </option>
                                    <option> 22 </option>
                                    <option> 23 </option>
                                    <option> 24 </option>
                                    <option> 25 </option>
                                    <option> 26 </option>
                                    <option> 27 </option>
                                    <option> 28 </option>
                                  </AvField>
                                </div>

                               
                                <div className="mb-3">
                                  <AvField  name="rent_amount" label="Rent Amount" className="form-control"  type="number" required/>
                                </div>

                                <div className="mb-3">
                                  <AvField  name="startDate" label="Start Date" className="form-control"  type="date" required/>
                                </div>

                              </Col>
                              
                              <Col md={6}>
                              <div className="mb-5">
                                <h5 className="text-center"> Deposits </h5>
                              </div>

                                <div className="mb-3">
                                  <AvField  name="rent_dep_amount" label="Rent Deposit Amount" className="form-control"  type="text" required/>
                                </div>

                                <div className="mb-3">
                                  <AvField  name="dep_amount" label="Deposit Amount" className="form-control"  type="number" required/>
                                </div>

                                <div className="mb-3">
                                  <AvField  name="utilityName" label="Utility Name" className="form-control"  type="select" required placeholder="...">
                                    <option>  </option>
                                    <option> Parking </option>
                                    <option> Electricity </option>
                                    <option> Garbage </option>
                                    <option> Water </option>
                                  </AvField>
                                </div>
                               
                              </Col>
                            </Row>
                        </TabPane>
                     {/* TAB ONE END */}




                      {/* TAB TWO */}
                        <TabPane tabId={2}>
                        
                            <Row>
                              <Col md={6}>
                                <div className="mb-1">
                                  <h5 className="text-center"> Tenants </h5>
                                </div>

                                <div className="mb-3">
                                  <AvField className="form-control" type="text"  label="Tenants"  rows="3"  name="tenant" errorMessage="This value is required." validate={{ required: { value: true } }} />
                                </div>

                                <div className="mb-3">
                                    <h5 className="text-center"> Extra Charges </h5>
                                </div>

                                <div className="mb-3">
                                  <AvField  name="extra_charge_name" label="Extra Charge Name" className="form-control"  type="select" required>
                                    <option>  </option>
                                    <option> Service Fee </option>
                                    <option> VAT </option>
                                    <option> Processing Fee </option>
                                  </AvField>
                                </div>

                                <div className="mb-3">
                                  <AvField className="form-control" type="number"  label="Extra Charge Value"  rows="3"  name="extra_charge_value" errorMessage="This value is required." validate={{ required: { value: true } }} />
                                </div>

                                <div className="mb-3">
                                <AvField  name="extra_charge_type" label="Extra Charge Type" className="form-control"  type="select" required>
                                  <option>  </option>
                                  <option> Fixed Value </option>
                                  <option> % of Total Rent </option>
                                  <option> % of Total Amount Over Due </option>
                                </AvField>
                              </div>
                                <div className="mb-3">
                                <AvField  name="frequency" label="Frequency" className="form-control"  type="select" required>
                                  <option>  </option>
                                  <option> One Time </option>
                                  <option> Period To Period </option>
                                </AvField>
                              </div>

                              </Col>

                              <Col md={6}>
                              <div >
                                <h5 className="text-center"> Late Fees </h5>
                              </div>

                              <div className="mb-3">
                                <AvField  name="late_fee_name" label="ELate Fee Name" className="form-control"  type="select" required>
                                  <option>  </option>
                                  <option> Penalty </option>
                                </AvField>
                              </div>

                              <div className="mb-3">
                                <AvField  name="late_fee_value" label="Late Fee Value" className="form-control"  type="number" required/>
                              </div>

                              <div className="mb-3">
                                <AvField  name="late_fee_type" label="Late Fee Type" className="form-control"  type="select" required>
                                  <option>  </option>
                                  <option> Fixed Value </option>
                                  <option> % of Total Rent </option>
                                  <option> % of Total Amount Over Due </option>
                                </AvField>
                              </div>

                              <div className="mb-3">
                                <AvField  name="late_fee_frequency" label="Frequency" className="form-control"  type="select" required>
                                    <option>  </option>
                                    <option> One Time </option>
                                    <option> Daily </option>
                                    <option> Weekly </option>
                                    <option> Bi-Weekly </option>
                                    <option> Monthly </option>
                                </AvField>
                              </div>

                              <div className="mb-3">
                              <AvField  name="grace_period" label="Grace Period (Days)" className="form-control"  type="number" required/>
                            </div>

                            </Col>

                            </Row>

                        </TabPane>
                     {/* TAB TWO END */}



                      {/* TAB THREE  */}

                        <TabPane tabId={3}>
                            <Row>
                              <Col md={6}>
                                <div className="mb-5">
                                  <h5 className="text-center"> Utility Charges </h5>
                                </div>
                                <div className="mb-3">
                                  <AvField  name="utilityName" label="Utility Name" className="form-control"  type="select" required>
                                    <option>  </option>
                                    <option> Parking </option>
                                    <option> Electricity </option>
                                    <option> Garbage </option>
                                    <option> Water </option>
                                  </AvField>
                               </div>

                                <div className="mb-3">
                                  <AvField  name="unitCost" label="Unit Cost" className="form-control"  type="text" required/>
                                </div>
                               
                                <div className="mb-3">
                                  <AvField  name="baseFee" label="Base Fee" className="form-control"  type="number" required/>
                                </div>

                            </Col>


                            <Col md={6}>


                            <div className="mb-5">
                                    <h5 className="text-center"> Payment Method </h5>
                                </div>

                                <div className="mb-3">
                                <AvField  name="paymentMethod" label="Payment Method" className="form-control"  type="select" required>
                                  <option>  </option>
                                  <option> PayPal </option>
                                  <option> Bank Transfer </option>
                                  <option> MOBILE MONEY </option>
                                  <option> Cash </option>
                                  <option> Cheque </option>
                                </AvField>
                             </div>

                              <div className="mb-3">
                                <AvField  name="paymentMethod_desc" label="Payment Method Description" className="form-control"  type="text" required/>
                              </div>

                            <div className="mb-5">
                              <h5 className="text-center"> Lease Settings </h5>
                            </div>

                             <div className="mb-3">
                                  <AvField  name="generateInvoice" label="Generate Invoice On (Day of Month)" className="form-control"  type="select" required placeholder="...">
                                    <option>  </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                    <option> 6 </option>
                                    <option> 7 </option>
                                    <option> 8 </option>
                                    <option> 9 </option>
                                    <option> 10 </option>
                                    <option> 11 </option>
                                    <option> 12 </option>
                                    <option> 13 </option>
                                    <option> 14 </option>
                                    <option> 15 </option>
                                    <option> 16 </option>
                                    <option> 18 </option>
                                    <option> 19 </option>
                                    <option> 20 </option>
                                    <option> 21 </option>
                                    <option> 22 </option>
                                    <option> 23 </option>
                                    <option> 24 </option>
                                    <option> 25 </option>
                                    <option> 26 </option>
                                    <option> 27 </option>
                                    <option> 28 </option>
                                  </AvField>
                                </div>

                           
                          </Col>

                            </Row>

                        </TabPane>
                         {/* TAB THREE END */}


                          {/* TAB FOUR*/}
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-4" />
                                </div>
                                <div>
                                  <h5> Registration Successfull </h5>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                        {/* TAB FOUR END */}

                      </TabContent>



                    <div className="actions clearfix">
                      <ul>

                      <li className={ activeTab === 1 ? "previous disabled" : "previous" }>
                          <Link to="#" className="btn login-btn w-md waves-effect waves-light" onClick={() => { toggleTab(activeTab - 1)}}> Previous</Link>
                      </li> 

                      {
                        activeTab < 4 ? <li className={activeTab === 4 ? "next disabled" : null }>
                          <button to="#" className="btn login-btn w-md waves-effect waves-light" onClick={() => { toggleTab(activeTab + 1) }} type="submit"> { activeTab === 3 ? "Submit" : "Next" }  </button>
                        </li>: null
                      }
                        
                      </ul>
                    </div>

                  </div>

                </AvForm>

                </div>
                </CardBody>

              </Card>

            </Col>
          </Row>

        </Container>
    </React.Fragment>
  )
}

export default FormWizard