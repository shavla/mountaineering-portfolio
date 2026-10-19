import { Ascent } from "../types/ascent";

export const ascents: Ascent[] = [
    {
        id: 1,
        mountain: "Mt. Kazbegi",
        country: "Georgia",
        status: "attempted",
        type: "independent",
        date: "2023-07-28",
        elevation: 5054,
        difficulty: "2A",
        thumbnail: "mt-kazbeg.jpg",
        route: {
            points: [
                { name: "Gergeti Trinity Church Parking", elevation: 2160 },
                { name: "Betlemi Hut", elevation: 3670 },
                { name: "Mt. Kazbegi", elevation: 5054 },
            ],
            distance: 15.5,
            elevationGain: 2894,
            description: "Our journey began in Tbilisi. Once we arrived at the parking area near Gergeti Trinity Church, we started our trek toward Betlemi Hut, where we planned to camp for the night.\n\nOn the second day, we went to Betlemi Chapel for acclimatization, preparing our bodies for the higher altitude and the summit attempt ahead.\n\nAt 2 a.m. on the third day, we left our camp and began our ascent in the darkness. We made our way toward the summit, eventually reaching the saddle at 4,900 meters. Unfortunately, the weather conditions deteriorated, and we had to make the difficult decision to turn back and descend to camp.\n\nLater that day, we began our journey back to Tbilisi. Although we didn't reach the summit, the experience was still an important part of our mountaineering journey"
        },
        team: ["Gagi Nartyoshvili", "Ilia Ubiria", "Solomon Shaqarashvili", "Teona Dzuliashvili", "Medea Kenkebashvili", "Giorgi Sanaia", "Giorgi Xucishvili"],
        images: ["mt-kazbeg-route.png", "kazbegi1-1.jpg", "kazbegi1-2.jpg", "kazbegi1-3.jpg", "kazbegi1-4.jpg", "profile.jpg"],
        duration: "3 days",
        distance: 15.5
    },
    {
        id: 2,
        mountain: "Mt. Rcheulishvili",
        country: "Georgia",
        status: "successful",
        type: "independent",
        date: "2023-07-16",
        elevation: 3642,
        difficulty: "1B",
        thumbnail: "rcheulishvili.jpg",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Rcheulishvili", elevation: 3642 },
            ],
            distance: 3.5,
            elevationGain: 1042,
            description: "This is the classic route to Rcheulishvili. The route starts from Chaukhi Camp, where we arrived the day before the ascent.\n\nWe started walking through dense mist. It was very cold, and a few of our friends decided to return to camp and rest. The remaining eight members of the team continued the ascent.\n\nWe missed the pass and, due to a miscalculation, ended up in the wrong couloir. The terrain was harsh, but we pushed on and successfully completed the ascent."
        },
        team: ["Solomon Shaqarashvili", "Giorgi Sanaia", "Nini Datunaishvili", "Medea Kenkebashvili", "Teona Dzuliashvili", "Mziko Badzagua", "Temo Pashalishvili"],
        images: ["chaukhi-route.png", "rcheulishvili1-1.jpg", "rcheulishvili1-2.jpg", "rcheulishvili1-3.jpg", "rcheulishvili1-4.jpg"],
        duration: "1 day",
        distance: 3.5
    },
    {
        id: 3,
        mountain: "Mt. Tikanadze",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2024-07-03",
        elevation: 3436,
        difficulty: "1B",
        thumbnail: "tikanadze.jpg",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Tikanadze", elevation: 3436 },
            ],
            distance: 3.6,
            elevationGain: 836,
            description: "This is the classic route to Tikanadze. I climbed it with students from Alpine School, under the guidance of instructor Gezi.\n\nWe left Chaukhi Camp at 6:30 a.m. The weather was great, and everyone successfully reached the summit.\n\nThis was my first ascent with the school, and the beginning of a beautiful journey.",
        },
        team: ["Alpine school students include my friends: Medea Kenkebashvili", "Teona Dzuliashvili", "Giorgi Sanaia"],
        instructors: ["Giorgi Kaxabrishvili"],
        images: ["chaukhi-route.png", "tikanadze1-1.jpg", "tikanadze1-2.jpg", "tikanadze1-3.jpg", "tikanadze1-4.jpg"],
        duration: "1 day",
        distance: 3.6
    },
    {
        id: 4,
        mountain: "Mt. Takaishvili",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2024-07-04",
        elevation: 3422,
        difficulty: "1B",
        thumbnail: "takaishvili.jpg",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Takaishvili", elevation: 3422 },
            ],
            distance: 3,
            elevationGain: 822,
            description: "This is the classic route to Takaishvili. I climbed it with students from Alpine School, under the guidance of instructor Gezi.\n\nWe left Chaukhi Camp at 6:45 a.m. The weather was great, and everyone successfully reached the summit.\n\nThis was my second ascent with the school, and it was a wonderful experience. We were in camp 12:30 p.m."
        },
        team: ["Alpine school students include my friends: Medea Kenkebashvili", "Teona Dzuliashvili", "Giorgi Sanaia"],
        instructors: ["Giorgi Kaxabrishvili"],
        images: ["chaukhi-route.png", "takaishvili1-1.jpg", "takaishvili1-2.jpg", "takaishvili1-3.jpg", "takaishvili1-4.jpg", "takaishvili1-5.jpg"],
        duration: "1 day",
        distance: 3
    },
    {
        id: 5,
        mountain: "Mt. Rcheulishvili",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2024-07-06",
        elevation: 3642,
        difficulty: "1B",
        thumbnail: "rcheulishvili.jpg",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Rcheulishvili", elevation: 3642 },
            ],
            distance: 3.5,
            elevationGain: 1042,
            description: "This is second time me on Rcheulishvili. We went in 06:40 a.m. and we were in camp 12:30 p.m.\n\nUnlike during my first ascent, we could clearly see the couloir and followed the classic route. We climbed along the ridge to reach the summit.",
        },
        team: ["Alpine school students include my friends: Medea Kenkebashvili", "Teona Dzuliashvili", "Giorgi Sanaia"],
        images: ["chaukhi-route.png", "rcheulishvili2-1.jpg", "rcheulishvili2-2.jpg"],
        instructors: ["Giorgi Kaxabrishvili"],
        duration: "1 day",
        distance: 3.5
    }
]