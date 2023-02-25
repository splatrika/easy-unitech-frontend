import { ScheduleEvent } from "../../models/ScheduleEvent";

export interface IScheduleApi {
    getDay(day: Date): Promise<ScheduleEvent[]>;
    getWeek(day: Date): Promise<ScheduleEvent[]>;
}