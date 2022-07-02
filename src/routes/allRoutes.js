import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ContinueRegister from "../pages/Authentication/Choose-modules"
import PropertyManagement from "../pages/Authentication/Property-Management"
import EastateManagement from "../pages/Authentication/Estate-Manager"
import Loading from "../pages/Authentication/Loading"
import Modules from "../pages/Authentication/Modules"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import AddProperty from '../pages/Properties/Add-property'
import PropertyTable from '../pages/Properties/Property-table'
import PropertyDetail from '../pages/Properties/Property-details'
import AddTenant from '../pages/Tenants/Add-tenant'
import TenantTable from '../pages/Tenants/Tenant-table'
import AddLease from '../pages/Leases/Add-lease'
import TableLease from '../pages/Leases/Lease-table'
import AddUtility from '../pages/Utilities/Add-utility'
import UtilityTable from '../pages/Utilities/Utility-table'
import AllInvoice from '../pages/Invoices/all-invoice'
import AddPayment from '../pages/Payment/Add-payment'
import PaymentTable from '../pages/Payment/Payment-table'
import AllVacate from '../pages/Vocate Note/All-vacate'
import AddVacateNote from '../pages/Vocate Note/Add-vocate-note'
import AddNotice from '../pages/Notice/Add-Notice'
import AllNotice from '../pages/Notice/All-notice'
import AddBooking from '../pages/Bookings/add-booking'
import AllBooking from '../pages/Bookings/Booking-table'
import AddMaintenance from '../pages/Maintenance/add-maintenance'
import AddServiceProvider from '../pages/Service Provider/Add-service-provider'
import ServiceProviderTable from '../pages/Service Provider/Service-provide-table'
import AddDocument from '../pages/Share Document/Add-document'


import AllTickets from '../pages/Dashboard/components/All-tickets'
import UknowladgeTicket from '../pages/Dashboard/components/UknowledgeTicket'
import PendingTicket from '../pages/Dashboard/components/PendingTicket'
import AssignTicket from '../pages/Dashboard/components/AssignTicket'
import CloseTicket from '../pages/Dashboard/components/CloseTicket'

const userRoutes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/profile", component: UserProfile },
    { path: "/add-property", component: AddProperty },
    { path: "/property-table", component: PropertyTable },
    { path: "/property-details", component: PropertyDetail },
    { path: "/add-tenant", component: AddTenant },
    { path: "/tenant-table", component: TenantTable },
    { path: "/add-lease", component: AddLease },
    { path: "/table-lease", component: TableLease },
    { path: "/add-utility", component: AddUtility },
    { path: "/utility-table", component: UtilityTable },
    { path: "/all-invoice", component: AllInvoice },
    { path: "/add-payment", component: AddPayment },
    { path: "/payment-table", component: PaymentTable },
    { path: "/all-vacate", component: AllVacate },
    { path: "/add-vacate-note", component: AddVacateNote },
    { path: "/add-notice", component: AddNotice },
    { path: "/all-notice", component: AllNotice },
    { path: "/add-booking", component: AddBooking },
    { path: "/all-booking", component: AllBooking },
    { path: "/add-maintenance", component: AddMaintenance },
    { path: "/add-service-provider", component: AddServiceProvider },
    { path: "/service-provider-table", component: ServiceProviderTable },
    { path: "/share-document", component: AddDocument },


    { path: "/all-ticket", component: AllTickets },
    { path: "/uknowladge-ticket", component: UknowladgeTicket },
    { path: "/pending-ticket", component: PendingTicket },
    { path: "/assign-ticket", component: AssignTicket },
    { path: "/close-ticket", component: CloseTicket },

    { path: "/", exact: true, component: () => < Redirect to = "/dashboard" / > },
]

const authRoutes = [
    { path: "/logout", component: Logout },
    { path: "/login", component: Login },
    { path: "/forgot-password", component: ForgetPwd },
    { path: "/register", component: Register },
    { path: "/continue-signup", component: ContinueRegister },
    { path: "/property-registration", component: PropertyManagement },
    { path: "/Eastate-registration", component: EastateManagement },
    { path: "/loading", component: Loading },
    { path: "/modules", component: Modules },
]

export { userRoutes, authRoutes }