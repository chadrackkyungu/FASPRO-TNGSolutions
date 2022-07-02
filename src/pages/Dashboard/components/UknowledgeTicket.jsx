import PropTypes from "prop-types";
import React from 'react'
import { CardBody, Card, Container, CardTitle, Badge, Button } from "reactstrap";

import { withTranslation } from "react-i18next"
import { withRouter, Link} from "react-router-dom"

import Breadcrumb from "../../../components/Common/Breadcrumb"
import MetaTagComp from "../../../components/Common/MetaTags"

const uknowladgeTicket = props => {

    const transactions = [
        {
          id: "customCheck2",
          orderId: "#SK2540",
          billingName: "Neal Matthews",
          Date: "07 Oct, 2019",
          badgeClass: "success",
          paymentStatus: "done",
          paymentMethod: "Water",
          link: "view",
        },
        {
          id: "customCheck3",
          orderId: "#SK2541",
          billingName: "Jamal Burnett",
          Date: "07 Oct, 2019",
          badgeClass: "danger",
          paymentStatus: "Pending",
          paymentMethod: "Water",
          link: "#",
        },
        {
          id: "customCheck4",
          orderId: "#SK2542",
          billingName: "Juan Mitchell",
          Date: "06 Oct, 2019",
          badgeClass: "success",
          paymentStatus: "done",
          paymentMethod: "Electricity",
          link: "#",
        },
       
      ]


  return (
    <React.Fragment>
        <div className="page-content">
        <CardBody >
        <Link to="/" className="btn login-btn w-md waves-effect waves-light" type="submit"> Back </Link>
      <Card className="bd-rds mt-5" data-aos="fade-bottom">
        <CardBody >
          <CardTitle className="mb-4">uknowledge Tickets</CardTitle>
          <div className="table-responsive">
            <table className="table align-middle table-nowrap mb-0">
              <thead className="bg-table-header">
                <tr>
                  <th style={{ width: "20px" }}>
                    <div className="form-check font-size-16 align-middle">
                      <input type="checkbox" className="form-check-input" id="customCheck1"/>
                      <label  className="form-check-label"  htmlFor="customCheck1">  &nbsp; </label>
                    </div>
                  </th>
                  <th className="align-middle">Ticket ID</th>
                  <th className="align-middle"> Name</th>
                  <th className="align-middle">Date</th>
                  <th className="align-middle"> Status</th>
                  <th className="align-middle">Services</th>
                  <th className="align-middle">View Details</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, key) => (
                  <tr key={"_tr_" + key}>
                    <td>
                      <div className="form-check font-size-16">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={transaction.id}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={transaction.id}
                        >
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      <Link to="#" className="text-body fw-bold">
                        {transaction.orderId}
                      </Link>
                    </td>
                    <td>{transaction.billingName}</td>
                    <td>{transaction.Date}</td>
                    <td>
                      <Badge
                        className={
                          "font-size-11 badge-soft-" + transaction.badgeClass
                        }
                        color={transaction.badgeClass}
                        pill
                      >
                        {transaction.paymentStatus}
                      </Badge>
                    </td>
                    <td>
                      {transaction.paymentMethod}
                    </td>
                    <td>
                      <Button
                        type="button"
                        size="sm"
                        className="btn-rounded waves-effect waves-light btn-view-detail"
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
      </CardBody>
      </div>
    </React.Fragment>
  )
}

uknowladgeTicket.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(uknowladgeTicket))