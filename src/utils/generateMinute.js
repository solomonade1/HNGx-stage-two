export function formatMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    const formattedTime = `${hours}h ${remainingMinutes}min`;
  
    return formattedTime;
  }