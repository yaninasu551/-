function formatDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    let daySuffix;
  
    // Add suffix to day of the month
    if (dayOfMonth >= 11 && dayOfMonth <= 13) {
      daySuffix = "th";
    } else {
      switch (dayOfMonth % 10) {
        case 1: daySuffix = "st"; break;
        case 2: daySuffix = "nd"; break;
        case 3: daySuffix = "rd"; break;
        default: daySuffix = "th";
      }
    }
  
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${dayOfWeek}, ${dayOfMonth}${daySuffix} ${month} ${year}`;
  }
  
  let date = new Date();
  let formattedDate = formatDate(date);
  
  let dateContainer = document.querySelector('.date-day');
  dateContainer.textContent = formattedDate;
  