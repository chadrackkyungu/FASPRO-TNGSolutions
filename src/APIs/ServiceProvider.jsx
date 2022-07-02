

const ServicePro_arr = [
    {
      name :"John",
      service_pro_name :"Water",
      email : 'john@gmail.com',
      clickEvent: () => handleClick(1)
    },
    {
      name :"Jewel",
      service_pro_name :"Water",
      email : 'jewel@gmail.com',
      clickEvent: () => handleClick(2)
    }
]

export function ServicePro_Obj() {
    return ServicePro_arr;
}
