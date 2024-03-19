const getDayFromDate = (dateValue: string): string => {
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateValue);
    const dayIndex = date.getDay();
    
    if (dayIndex >= 0 && dayIndex < days.length) {
      return days[dayIndex];
    } else {
      return 'Invalid Day';
    }
  }

  export {
    getDayFromDate
  }