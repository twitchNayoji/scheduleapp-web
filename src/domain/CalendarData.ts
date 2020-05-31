import CalendarDayData from "@/domain/CalendarDayData";

export default class Calendardata {
  public year: number | null;
  public month: number | null;
  public numday: number | null;
  public dayMembers: CalendarDayData[];
  constructor(year?: number, month?: number, numday?: number, dayMembers?: CalendarDayData[]) {
    this.year = year ? year : null;
    this.month = month ? month : null;
    this.numday = numday ? numday : null;
    this.dayMembers = dayMembers ? dayMembers : Array<CalendarDayData>();
  }
}