
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiFamilyHouse, GiHumanPyramid } from 'react-icons/gi';
import { GrDocumentText } from 'react-icons/gr';
import { RiToolsFill } from 'react-icons/ri';


const AdminJSON = [
    {
      id:1,
      size:35,
      icon: GiFamilyHouse,
      title: "Properties",
      number: 150
    },
    {
      id:2,
      size:35,
      icon: GiHumanPyramid,
      title: "Tenants",
      number: 55
    },
    {
      id:3,
      size:35,
      icon: GrDocumentText,
      title: "Leases",
      number: 90
    },
    {
      id:4,
      size:35,
      icon: RiToolsFill,
      title: "Maintenance Request",
      number: 53
    },
];


export function admin_json_Obj() {
    return AdminJSON;
}