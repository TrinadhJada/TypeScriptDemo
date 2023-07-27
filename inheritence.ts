// Base class for Calendar
class Calendar {
    year: number;
  
    constructor(year: number) {
      this.year = year;
    }
  
    showYear() {
      console.log(`Calendar for Year ${this.year}`);
    }
  }
  
  // Class for Holidays
  class Holiday {
    name: string;
    date: string;
  
    constructor(name: string, date: string) {
      this.name = name;
      this.date = date;
    }
  
    showHoliday() {
      console.log(`${this.name} on ${this.date}`);
    }
  }
  
  // Class for National Holidays (subclass of Holiday)
  class NationalHoliday extends Holiday {
    country: string;
  
    constructor(name: string, date: string, country: string) {
      super(name, date);
      this.country = country;
    }
  
    showHoliday() {
      console.log(`${this.name} on ${this.date} (National holiday in ${this.country})`);
    }
  }
  
  // Class for Party
  class Party {
    title: string;
    date: string;
    location: string;
  
    constructor(title: string, date: string, location: string) {
      this.title = title;
      this.date = date;
      this.location = location;
    }
  
    showEvent() {
      console.log(`Event: ${this.title} on ${this.date} at ${this.location}`);
    }
  }
  
  // Usage of the classes
  const myCalendar = new Calendar(2023);
  myCalendar.showYear(); // Output: "Calendar for Year 2023"
  
  const newYear = new NationalHoliday("New Year's Day", "2023-01-01", "United States");
  const independenceDay = new NationalHoliday("Independence Day", "2023-07-04", "United States");
  
  const personalParty = new Party("Family Gathering", "2023-06-15", "My House");
  
  newYear.showHoliday(); // Output: "New Year's Day on 2023-01-01 (National holiday in United States)"
  independenceDay.showHoliday(); // Output: "Independence Day on 2023-07-04 (National holiday in United States)"
  
  personalParty.showEvent(); // Output: "Event: Family Gathering on 2023-06-15 at My House"
  