import { Ascent } from "../types/ascent";

export const ascents: Ascent[] = [
    {
        id: 1,
        mountain: "Mt. Kazbegi",
        country: "Georgia",
        status: "attempted",
        type: "independent",
        date: "2023-08-15",
        elevation: 5054,
        difficulty: "2A",
        thumbnail: "/images/mt-kazbeg.jpg",
        route: {
            points: [
                { name: "Gergeti Trinity Church Parking", elevation: 2160 },
                { name: "Betlemi Hut", elevation: 3650 },
                { name: "Mt. Kazbegi", elevation: 5054 },
            ],
            distance: 15.5,
            elevationGain: 2894,
            description: "Our journey began in Tbilisi. Once we arrived at the parking area near Gergeti Trinity Church, we started our trek toward Betlemi Hut, where we planned to camp for the night.\n\nOn the second day, we went to Betlemi Chapel for acclimatization, preparing our bodies for the higher altitude and the summit attempt ahead.\n\nAt 2 a.m. on the third day, we left our camp and began our ascent in the darkness. We made our way toward the summit, eventually reaching the saddle at 4,900 meters. Unfortunately, the weather conditions deteriorated, and we had to make the difficult decision to turn back and descend to camp.\n\nLater that day, we began our journey back to Tbilisi. Although we didn't reach the summit, the experience was still an important part of our mountaineering journey"
        },
        team: ["Gagi Nartyoshvili", "Ilia Ubiria", "Solomon Shaqarashvili", "Teona Dzuliashvili", "Medea Kenkebashvili", "Giorgi Sanaia", "Giorgi Xucishvili"],
        images: ["mt-kazbeg-route.png", "mt-kazbeg-route.png", "mt-kazbeg-route.png"],
        duration: "3 days",
        distance: 15.5
    },
    {
        id: 2,
        mountain: "Mkinvarwveri",
        country: "Georgia",
        status: "successful",
        type: "independent",
        date: "2023-08-16",
        elevation: 5047,
        difficulty: "D",
        thumbnail: "/images/mkinvarwveri.jpg",
        route: {
            points: [
                { name: "Gergeti", elevation: 2170 },
                { name: "Mkinvarwveri", elevation: 5047 },
            ],
            distance: 15,
            elevationGain: 3000,
            description: "The route to the summit of Mkinvarwveri typically starts from the village of Gergeti, which is located at an altitude of around 2,170 meters (7,119 feet). From Gergeti, climbers usually follow a trail that leads to the Gergeti Trinity Church, a famous landmark in the area. The trail continues through alpine meadows and rocky terrain, gradually ascending towards the summit."
        },
        team: ["MK"],
        images: [],
        duration: "3 days",
        distance: 15
    },
    {
        id: 3,
        mountain: "Mkinvarwveri",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2023-08-16",
        elevation: 5047,
        difficulty: "D",
        thumbnail: "/images/mkinvarwveri.jpg",
        route: {
            points: [
                { name: "Gergeti", elevation: 2170 },
                { name: "Mkinvarwveri", elevation: 5047 },
            ],
            distance: 15,
            elevationGain: 3000,
            description: "The route to the summit of Mkinvarwveri typically starts from the village of Gergeti, which is located at an altitude of around 2,170 meters (7,119 feet). From Gergeti, climbers usually follow a trail that leads to the Gergeti Trinity Church, a famous landmark in the area. The trail continues through alpine meadows and rocky terrain, gradually ascending towards the summit."
        },
        team: ["MK"],
        images: [],
        duration: "3 days",
        distance: 15
    }
]