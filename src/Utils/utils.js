export const formatDate = (date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-');
}

export const evalidateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)
}

export const getNextSevenDateNumbers = () => {
  const dateNumbers = []
  const today = new Date()

  let i = 1
  while (dateNumbers.length < 6) {   
    const nextDay = new Date(today)
    nextDay.setDate(today.getDate() + i)

    // Skip if it's Sunday (0 = Sunday)
    if (nextDay.getDay() !== 0) {
      dateNumbers.push(nextDay.getDate())
    }

    i++
  }

  return dateNumbers
}


export const getNextSevenDate = () => {
  const dates = []
  const today = new Date()

  let i = 1
  while (dates.length < 6) {    
    const nextDay = new Date(today)
    nextDay.setDate(today.getDate() + i)

    // 0 = Sunday
    if (nextDay.getDay() !== 0) {
      const date = formatDate(nextDay)
      dates.push(date)
    }

    i++
  }

  return dates
}


export const getNextSevenDatesShortMonthNames = () => {
  const monthNames = []
  const today = new Date()

  let i = 1
  while (monthNames.length < 6) {    
    const nextDay = new Date(today)
    nextDay.setDate(today.getDate() + i)

    // Skip the sunday, 0 = Sunday
    if (nextDay.getDay() !== 0) {
      const shortMonthName = nextDay.toLocaleDateString('en-US', { month: 'short' })
      monthNames.push(shortMonthName)
    }

    i++
  }


  return monthNames;
}

export const getDay = () =>  {
  const today = new Date()

  // The getDay() method returns the day of the week as a number (0-6)
  return today.getDay()
}

// getSorted and getDaysSpan will require future update
// If number of available days in schedule table change 
export const getSorted = (daysArr, startingIndex) => {
  let days = new Array(6)
  const length = daysArr.length - startingIndex
  for (let index = 0; index < length; index++) {
    days[startingIndex + index] = daysArr[index] 
  }
  for (let index = 0; index < startingIndex; index++) {
    days[index] = daysArr[index + length] 
  }
  return days
}

export const getDaysSpan = (startingIndex) => {
  const thisWeekSpan = 6 - startingIndex
  const nextWeekSpan = 6 - (6 - startingIndex)
  return ({thisWeekSpan, nextWeekSpan}) 
}

export const convertDateFormat = (dateString) => {
    // Append T00:00:00 to the date string to prevent time zone conversion issues,
    // ensuring the date object is created for the start of the day in UTC.
    const date = new Date(dateString + 'T00:00:00');

    // Define arrays for month and weekday abbreviations
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Extract and format components
    const month = monthNames[date.getMonth()];
    // Get the day and pad with a leading zero if necessary
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const weekday = dayNames[date.getDay()];

    // Assemble the final string using a template literal
    const convertedFormat = `${month}. ${day}, ${year} ${weekday}`;

    return convertedFormat;
}

export const formatDBTime = (timeString) => {
  const date = timeString.slice(0, 10)
  return date
}