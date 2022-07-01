

const Payment_arr = [
    {
      tenant_name :"John Doe",
      lease :"234",
      unit_name :"floor 5",
      amount :1000,
      payment_method :"Cash",
      payment_date : "27-06-2022",
      paid_by : "paid",
      reference :"456",
      extra_note :"lorem ipsum",
      clickEvent: () => handleClick(1)
    },
    {
        tenant_name :"John Doe",
        lease :"234",
        unit_name :"floor 5",
        amount :1000,
        payment_method :"Cash",
        payment_date :"27-06-2022",
        paid_by : "paid",
        reference :"456",
        extra_note :"lorem ipsum",
        clickEvent: () => handleClick(1)
      },
]

export function Payment_Obj() {
    return Payment_arr;
}
