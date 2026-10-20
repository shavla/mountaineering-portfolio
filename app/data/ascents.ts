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
        thumbnail: "rcheulishvili.png",
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
            distance: 3.2,
            elevationGain: 822,
            description: "This is the classic route to Takaishvili. I climbed it with students from Alpine School, under the guidance of instructor Gezi.\n\nWe left Chaukhi Camp at 6:45 a.m. The weather was great, and everyone successfully reached the summit.\n\nThis was my second ascent with the school, and it was a wonderful experience. We were in camp 12:30 p.m."
        },
        team: ["Alpine school students include my friends: Medea Kenkebashvili", "Teona Dzuliashvili", "Giorgi Sanaia"],
        instructors: ["Giorgi Kaxabrishvili"],
        images: ["chaukhi-route.png", "takaishvili1-1.jpg", "takaishvili1-2.jpg", "takaishvili1-3.jpg", "takaishvili1-4.jpg", "takaishvili1-5.jpg"],
        duration: "1 day",
        distance: 3.2
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
        thumbnail: "rcheulishvili.png",
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
    },
    {
        id: 6,
        mountain: "Mt. Tikanadze",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2024-07-08",
        elevation: 3436,
        difficulty: "2A",
        thumbnail: "tikanadze2.png",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Tikanadze", elevation: 3436 },
            ],
            distance: 3.2,
            elevationGain: 836,
            description: "This is a more difficult route to Tikanadze. As soon as you reach the saddle between Mt. Muxadze and Mt. Tikanadze, you should head to the right.\n\nThe entire route is shown in Picture 1. Moving along the ridge is trickier, but placing protection in the middle section is key to overcoming the difficulties."
        },
        team: ["Alpine school students include my friends: Medea Kenkebashvili", "Teona Dzuliashvili", "Giorgi Sanaia"],
        instructors: ["Giorgi Kaxabrishvili"],
        images: ["chaukhi-route.png", "tikanadze2-1.jpg", "tikanadze2-2.jpg", "tikanadze2-3.jpg", "tikanadze2-4.jpg"],
        duration: "1 day",
        distance: 3.2
    },
    {
        id: 7,
        mountain: "Mt. Asatiani",
        country: "Georgia",
        status: "attempted",
        type: "guided",
        date: "2024-07-09",
        elevation: 3842,
        difficulty: "2A",
        thumbnail: "asatiani.jpg",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Asatiani", elevation: 3842 },
            ],
            distance: 5,
            elevationGain: 1242,
            description: "This is the classic route to Asatiani, one of the longest routes in the Chaukhi Massif.\n\nWe left camp at 5:00 a.m. because we knew the weather was going to change, and we had to move quickly if we wanted to reach the summit.\n\nThere were quite a lot of people on the route, so progress was slower than expected. Time passed quickly, and the weather deteriorated faster than we anticipated. Unfortunately, we couldn't make it to the summit and reached only the first anchor.\n\nAfter that, we had to descend and return to camp."
        },
        team: ["Alpine school students include my friends: Medea Kenkebashvili", "Teona Dzuliashvili", "Giorgi Sanaia"],
        instructors: ["Vakhtang Blagidze", "Giorgi Kaxabrishvili"],
        images: ["chaukhi-route.png", "asatiani1-1.jpg", "asatiani1-2.jpg", "asatiani1-3.jpg", "asatiani1-4.jpg", "asatiani1-5.jpg"],
        duration: "1 day",
        distance: 5
    },
    {
        id: 8,
        mountain: "Mt. Kazbegi",
        country: "Georgia",
        status: "attempted",
        type: "independent",
        date: "2024-08-30",
        elevation: 5054,
        difficulty: "2A",
        thumbnail: "mt-kazbeg.jpg",
        route: {
            points: [
                { name: "Gergeti Trinity Church Parking", elevation: 2160 },
                { name: "Sabertse Camp", elevation: 3015 },
                { name: "White Cross", elevation: 3840 },
                { name: "Mt. Kazbegi", elevation: 5054 },
            ],
            distance: 15.5,
            elevationGain: 2894,
            description: "This was my second attempt to climb Mt. Kazbek. We were a group of seven people.\n\nOn the first day, we drove from Tbilisi to the parking area near Gergeti Trinity Church. From there, we started walking and eventually reached Sabertse Camp.\n\nOn the second day, we continued to the higher camp near Betlemi Hut, also known as the White Cross camp. Since we were already at a high altitude, we didn't need to do a separate acclimatization hike.\n\nAt 3:00 a.m. on the third day, we left camp and started our summit attempt. The weather was poor, with strong winds and harsh conditions. At around 4,300 meters, one of our team members began experiencing severe symptoms of altitude sickness and couldn't continue.\n\nI decided to return to camp with her, while the rest of the team continued toward the summit. Unfortunately, neither of us made it to the top, but the other five members of our team successfully reached the summit.\n\nAfter they returned to camp, we began our journey back to Tbilisi."
        },
        team: ["Solomon Shaqarashvili", "Ilia Ubiria", "Saba Darsavelidze", "Nini Datunaishvili", "Medea Kenkebashvili", "Davit Gogilashvili"],
        images: ["mt-kazbeg-route.png", "kazbegi2-1.jpg", "kazbegi2-2.jpg", "kazbegi2-3.jpg", "kazbegi2-4.jpg", "kazbegi2-5.jpg", "kazbegi2-6.jpg"],
        duration: "3 days",
        distance: 15.5
    },
    {
        id: 9,
        mountain: "Mt. Kazbegi",
        country: "Georgia",
        status: "successful",
        type: "independent",
        date: "2024-09-13",
        elevation: 5054,
        difficulty: "2A",
        thumbnail: "mt-kazbeg.jpg",
        route: {
            points: [
                { name: "Gergeti Trinity Church Parking", elevation: 2160 },
                { name: "Sabertse Camp", elevation: 3015 },
                { name: "White Cross", elevation: 3840 },
                { name: "Mt. Kazbegi", elevation: 5054 },
            ],
            distance: 15.5,
            elevationGain: 2894,
            description:"This was my third attempt to climb Mt. Kazbek, and this time, I made it!\n\nWe left Tbilisi around midday and continued walking until we reached our first camp at night.\n\nOn the second day, we continued to the higher camp near Betlemi Hut, also known as the White Cross camp. Since we were already at a high altitude, we didn't need a separate acclimatization hike.\n\nOn the third day, heavy snowfall prevented us from making a summit attempt.\n\nOn the fourth day, we left camp at 3:00 a.m. and headed for the summit. The weather and conditions were excellent, and everything was beautiful. We didn't descend to camp that day.\n\nOn the fifth day, we returned to Tbilisi."
        },
        team: ["Medea Kenkebashvili", "Teona Dzuliashvili", "Giorgi Sanaia"],
        images: ["mt-kazbeg-route.png", "kazbegi3-1.jpg", "kazbegi3-2.jpg", "kazbegi3-3.jpg", "kazbegi3-4.jpg", "kazbegi3-5.jpg", "kazbegi3-6.jpg", "kazbegi3-7.jpg", "kazbegi3-8.jpg"],
        duration: "5 days",
        distance: 15.5
    }
]