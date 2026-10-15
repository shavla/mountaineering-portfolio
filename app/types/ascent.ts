import { AscentStatus } from "./ascent-status";
import { AscentType } from "./ascent-type";

export interface Ascent {
    id: number;
    mountain: string;
    country: string;
    region?: string;

    status: AscentStatus;
    type: AscentType;

    date: string;

    elevation: number;
    difficulty: string;

    thumbnail: string;

    route: Route;
    instructors?: string[];
    team: string[];

    images: string[];

    duration: string;
    distance: number;
    notes?: string;
}

export interface Route {
    points: RoutePoint[];
    description: string;
    distance?: number;
    elevationGain?: number;
}

export interface RoutePoint {
    name: string;
    elevation: number;
}