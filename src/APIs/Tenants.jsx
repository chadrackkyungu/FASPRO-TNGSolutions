

const Tenant_arr = [
    {
      name :"Gallagher",
      id_num :"234",
      phone_num :"floor 5",
      monthly_rental :10,
      pament_method :"Cash",
      lastName :"Penalty",
      email : 400,
      select_tenant_property :"Monthly",
      on_and_of: 'yes',
    //   clickEvent: () => handleClick(doc.id)
      clickEvent: () => handleClick(1)
    },
    {
        name :"Gallagher",
        id_num :"234",
        phone_num :"floor 5",
        monthly_rental :10,
        pament_method :"Cash",
        lastName :"Penalty",
        email : 400,
        select_tenant_property :"Monthly",
        on_and_of: 'false',
    //   clickEvent: () => handleClick(doc.id)
      clickEvent: () => handleClick(2)
    }
]

export function Tenant_Obj() {
    return Tenant_arr;
}
