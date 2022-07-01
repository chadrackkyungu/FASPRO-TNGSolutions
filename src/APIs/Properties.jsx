

const Properties_arr = [
    {
      property_name :"Gallagher",
      property_code :"234",
      unit_name :"floor 5",
      total_rooms :10,
      pament_method :"Cash",
      late_fee :"Penalty",
      late_fee_cost : 400,
      Frequency :"Monthly",
    //   clickEvent: () => handleClick(doc.id)
      clickEvent: () => handleClick(1)
    },
    {
      property_name :"Gallagher",
      property_code :"234",
      unit_name :"floor 5",
      total_rooms :10,
      pament_method :"Cash",
      late_fee :"Penalty",
      late_fee_cost : 400,
      Frequency :"Monthly",
    //   clickEvent: () => handleClick(doc.id)
      clickEvent: () => handleClick(2)
    }
]

export function properties_Obj() {
    return Properties_arr;
}
