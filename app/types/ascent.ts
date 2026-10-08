import { AscentStatus } from "./ascent-status";
import { AscentType } from "./ascent-type";

export interface Ascent {
    id: number;

    // Basic information
    title: string;
    mountain: string;
    country: string;
    region?: string;

    // Classification
    status: AscentStatus;
    type: AscentType;

    // When
    date: string;

    // Mountain information
    elevation: number;
    difficulty: string;

    // Short information for cards
    description: string;
    thumbnail: string;

    // Full information
    route: Route;
    instructors?: string[];
    team?: string[];

    // Media
    images: string[];

    // Optional
    duration?: string;
    distance?: number;
    notes?: string;
}

export interface Route {
    startPoint: string;
    summit: string;
    distance?: number;
    elevationGain?: number;
    description: string;
}