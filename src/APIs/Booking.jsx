

const Booking_arr = [
    {
      startTime : " 12:00",
      endTime : "02:00",
      date : "28-06-2022",
      message : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
      clickEvent: () => handleClick(1)
    },
    {
        startTime :" 12:00",
        endTime :"02:00",
        date :"28-06-2022",
        message :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
       clickEvent: () => handleClick(2)
      },
]

export function Booking_Obj() {
    return Booking_arr;
}
