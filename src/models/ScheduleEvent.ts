import { Science } from "./Science";

export interface ScheduleEvent {
    readonly science: Science;
    readonly start: Date,
    readonly end: Date,
    readonly room?: string,
    readonly unitechIndividualNote?: string;
}