

const Invoices_arr = [
    {
      invoice_number :"INV00",
      invoice_date :"27-06-2022",
      lease :"LS0067",
      period :"Juin, 20022",
      amount :7500,
      paid : "00",
      balance : 80000,
      due :"28-06-2022",
      status :"Paid",
      clickEvent: () => handleClick(1)
    },
    {
      invoice_number :"INV00",
      invoice_date :"27-06-2022",
      lease :"LS0067",
      period :"Juin, 20022",
      amount :"000",
      paid : "00",
      balance : 80000,
      due :"28-06-2022",
      status :"Over Due",
      clickEvent: () => handleClick(1)
      },
]

export function Invoice_Obj() {
    return Invoices_arr;
}
