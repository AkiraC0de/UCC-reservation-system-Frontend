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

export const  getNextSevenDateNumbers = () => {
  const dateNumbers = []
  const today = new Date()

  for (let i = 1; i < 7; i++) {
    // Create a new Date object for the current iteration's day
    const nextDay = new Date(today)
    
    // Add 'i' days to the date. JavaScript handles month rollovers automatically.
    nextDay.setDate(today.getDate() + i)
    
    // Get the date number (day of the month, 1-31)
    const dateNumber = nextDay.getDate()
    
    dateNumbers.push(dateNumber)
  }

  return dateNumbers
}

export const getNextSevenDatesShortMonthNames = () => {
  const monthNames = [];
  const today = new Date();

  for (let i = 1; i < 7; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    
    // Use 'short' for the month name
    const shortMonthName = nextDay.toLocaleDateString('en-US', { month: 'short' });
    
    monthNames.push(shortMonthName);
  }

  return monthNames;
}

export const getDay = () =>  {
  const today = new Date()

  // The getDay() method returns the day of the week as a number (0-6)
  return today.getDay()
}
