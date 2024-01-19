var dateDiffInDays = function (date1, date2) {
  //   write your code here
  const firstDate = Date.UTC(date1);
  const secondDate = Date.UTC(date2);

  // Calculate the time difference in milliseconds
  const timeDiff = Math.abs(secondDate - firstDate);

  // Calculate the difference in days
  const daysDiff = Math.ceil(timeDiff / (86400));

  return daysDiff;

	

	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
