import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/dashboard" className="waves-effect">
              <i class="ti-view-grid"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="/property-table" className=" waves-effect">
                <i className="ti-map-alt"></i>
                <span>{props.t("Properties")}</span>
              </Link>
            </li>

            <li>
              <Link to="/tenant-table" className="waves-effect">
                <i className="ti-id-badge"></i>
                <span>{props.t("Tenants")}</span>
              </Link>
            </li>

            {/* <li className="menu-title">{props.t("Components")}</li> */}

            <li>
              <Link to="/add-lease" className="waves-effect">
                <i className="ti-package"></i>
                <span>{props.t("Leases")}</span>
              </Link>
            </li>

            <li>
              <Link to="/utility-table" className="waves-effect">
                <i className="ti-bookmark-alt"></i>
                <span>{props.t("Utilities")}</span>
              </Link>
            </li>

            <li>
              <Link to="/all-invoice" className="waves-effect">
                <i className="ti-comments"></i>
                <span>{props.t("Invoices")}</span>
              </Link>
            </li>

            <li>
              <Link to="/payment-table" className="waves-effect">
                <i className="ti-gift"></i>
                <span>{props.t("Payment")}</span>
              </Link>
            </li>

            <li>
              <Link to="/all-vacate" className="waves-effect">
                <i className=" ti-ruler-pencil"></i>
                <span>{props.t("Vacate Note")}</span>
              </Link>
            </li>

            <li>
              <Link to="/all-notice">
                {/* <span className="badge rounded-pill bg-danger float-end">2</span> */}
                <i className="ti-pencil-alt"></i>
                <span>{props.t("Notice")}</span>
              </Link>
            </li>

            {/* <li className="menu-title">Extras</li> */}

            <li>
              <Link to="/add-booking" className="waves-effect">
                <i className="ti-ticket"></i>
                <span>{props.t("Bookings")}</span>
              </Link>
            </li>

            <li>
              <Link to="/add-maintenance" className="waves-effect">
                <i className="ti-hummer"></i>
                <span>{props.t("Maintenance Request")}</span>
              </Link>
            </li>

            <li>
              <Link to="/add-service-provider" className="waves-effect">
                <i className="ti-settings"></i>
                <span> {props.t("Service Provider")} </span>
              </Link>
            </li>

            <li>
              <Link to="/share-document" className="waves-effect">
                <i className="ti-import"></i>
                <span>{props.t("Share Document")}</span>
              </Link>
            </li>

          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
