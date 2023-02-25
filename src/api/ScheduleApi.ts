import { ScheduleEvent } from "../models/ScheduleEvent";
import { ApiBase } from "./ApiBase";
import { IScheduleApi } from "./interfaces/IScheduleApi";

export class ScheduleApi extends ApiBase implements IScheduleApi {
    async getDay(day: Date): Promise<ScheduleEvent[]> {
        return await this.get<ScheduleEvent[]>(
            this.options.apiHost + '/schedule/day',
            'schedule',
            { date: day.toISOString() });
    }
    async getWeek(day: Date): Promise<ScheduleEvent[]> {
        return await this.get<ScheduleEvent[]>(
            this.options.apiHost + '/schedule',
            'schedule',
            { date: day.toISOString() });
    }
}