export default class CalendarDayData {
  public day: number;
  public member: string[][];
  constructor(day: number, member: string[][]) {
    this.day = day;
    this.member = member;
  }
}