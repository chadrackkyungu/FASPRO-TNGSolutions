
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiFamilyHouse, GiHumanPyramid } from 'react-icons/gi';
import { GrDocumentText } from 'react-icons/gr';
import { RiToolsFill } from 'react-icons/ri';


const Service_pro_JSON = [
    {
      id:1,
      size:35,
      title: "All Tickets",
      number: 150,
      link: "/all-ticket",
    },
    {
      id:2,
      size:35,
      title: "Uknowledge",
      number: 55,
      link: "/uknowladge-ticket",
    },
    {
      id:3,
      size:35,
      title: "Pending",
      number: 90,
      link: "/pending-ticket",
    },
    {
      id:4,
      size:35,
      title: "Assign",
      number: 53,
      link: "/assign-ticket",
    },
    {
      id:5,
      size:35,
      title: "Close",
      number: 53,
      link: "/close-ticket",
    },
    {
      id:6,
      size:35,
      title: "All Services",
      number: 53,
      link: "/service-provider-table",
    },
];


export function service_pro_json_Obj() {
    return Service_pro_JSON;
}