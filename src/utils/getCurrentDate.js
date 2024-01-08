export function showCurrentDateTime() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();

  const month = months[currentDate.getMonth()];
  const day = days[currentDate.getDay()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return ` ${day}, ${month} ${date}, ${year}`;
}
