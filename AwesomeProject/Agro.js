export const formatPrice = (input) => {
  var price = input.toString();
  var array = [];
  for (i = price.length; i >= 0; i -= 3) {
    if (i >= 3)
      array.push(price.substring(i, i - 3));
    else {
      if (i == 2)
        array.push(price.substring(i, i - 2));
      if (i == 1)
        array.push(price.substring(i, i - 1));
    }
  }
  const string = array.reverse().join(",");
  return string;
}

export const calculateTimeDifference = (startTimestamp, oldTimestamp, newTimestamp) => {
  const timeDifference = newTimestamp - oldTimestamp;
  let secondsSale = Math.floor((timeDifference / 1000) % 60);
  let minutesSale = Math.floor((timeDifference / (1000 * 60)) % 60);
  let hoursSale = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  let daysSale = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


  const timeRemaining = startTimestamp - oldTimestamp;
  let secondsRemaining = Math.floor((timeRemaining / 1000) % 60);
  let minutesRemaining = Math.floor((timeRemaining / (1000 * 60)) % 60);
  let hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  let daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  if (secondsRemaining < 10) {
    secondsRemaining = `0${secondsRemaining}`
  }
  if (minutesRemaining < 10) {
    minutesRemaining = `0${minutesRemaining}`
  }
  if (hoursRemaining < 10) {
    hoursRemaining = `0${hoursRemaining}`
  }
  if (secondsSale < 10) {
    secondsSale = `0${secondsSale}`
  }
  if (minutesSale < 10) {
    minutesSale = `0${minutesSale}`
  }
  if (hoursSale < 10) {
    hoursSale = `0${hoursSale}`
  }
  const formattedTimeDifference = `Kết thúc trong \n ${daysSale} ngày ${hoursSale}:${minutesSale}:${secondsSale}`;
  const formattedTimeReamaining = `Bắt đầu sau \n ${daysRemaining} ngày ${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`;

  if (timeDifference >= 0 && timeRemaining < 0)
    return formattedTimeDifference;
  if (timeRemaining >= 0)
    return formattedTimeReamaining;
}

export const checkTimetampRemaining = (oldTimestamp, newTimestamp) => {
  const time1 = Math.floor((oldTimestamp / (1000 * 60)));
  const time2 = Math.floor((newTimestamp / (1000 * 60)));
  const timeDifference = time2 - time1;
  if (timeDifference > 0)
    return true;
  return false;
}

export const formatDateFormSaleUsing = (startTimestamp, endTimestamp) => {
  const startTime = startTimestamp
  const day = startTime.getDate().toString().padStart(2, '0');
  const month = (startTime.getMonth() + 1).toString().padStart(2, '0');
  const hour = startTime.getHours().toString().padStart(2, '0');
  const minute = startTime.getMinutes().toString().padStart(2, '0');
  const startDateFormatted = `${day}/${month} ${hour}:${minute}`
  const ess = 123;
  return startDateFormatted;
}