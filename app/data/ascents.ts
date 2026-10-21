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
            description: `Our journey began in Tbilisi. Once we arrived at the parking area near Gergeti Trinity Church, we started our trek toward Betlemi Hut, where we planned to camp for the night.

On the second day, we went to Betlemi Chapel for acclimatization, preparing our bodies for the higher altitude and the summit attempt ahead.

At 2 a.m. on the third day, we left our camp and began our ascent in the darkness. We made our way toward the summit, eventually reaching the saddle at 4,900 meters. Unfortunately, the weather conditions deteriorated, and we had to make the difficult decision to turn back and descend to camp.

Later that day, we began our journey back to Tbilisi. Although we didn't reach the summit, the experience was still an important part of our mountaineering journey`
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
            description: `This is the classic route to Rcheulishvili. The route starts from Chaukhi Camp, where we arrived the day before the ascent.

We started walking through dense mist. It was very cold, and a few of our friends decided to return to camp and rest. The remaining eight members of the team continued the ascent.

We missed the pass and, due to a miscalculation, ended up in the wrong couloir. The terrain was harsh, but we pushed on and successfully completed the ascent.`
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
            description: `This is the classic route to Tikanadze. I climbed it with students from Alpine School, under the guidance of instructor Gezi.

We left Chaukhi Camp at 6:30 a.m. The weather was great, and everyone successfully reached the summit.

This was my first ascent with the school, and the beginning of a beautiful journey.`,
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
            description: `This is the classic route to Takaishvili. I climbed it with students from Alpine School, under the guidance of instructor Gezi.

We left Chaukhi Camp at 6:45 a.m. The weather was great, and everyone successfully reached the summit.

This was my second ascent with the school, and it was a wonderful experience. We were in camp 12:30 p.m.`
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
            description: `This is second time me on Rcheulishvili. We went in 06:40 a.m. and we were in camp 12:30 p.m.

Unlike during my first ascent, we could clearly see the couloir and followed the classic route. We climbed along the ridge to reach the summit.`,
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
            description: `This is a more difficult route to Tikanadze. As soon as you reach the saddle between Mt. Muxadze and Mt. Tikanadze, you should head to the right.

The entire route is shown in Picture 1. Moving along the ridge is trickier, but placing protection in the middle section is key to overcoming the difficulties.`
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
        difficulty: "2B",
        thumbnail: "asatiani.png",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Asatiani", elevation: 3842 },
            ],
            distance: 5.5,
            elevationGain: 1242,
            description: `This is the classic route to Asatiani, one of the longest routes in the Chaukhi Massif.

We left camp at 5:00 a.m. because we knew the weather was going to change, and we had to move quickly if we wanted to reach the summit.

There were quite a lot of people on the route, so progress was slower than expected. Time passed quickly, and the weather deteriorated faster than we anticipated. Unfortunately, we couldn't make it to the summit and reached only the first anchor.

After that, we had to descend and return to camp.`
        },
        team: ["Alpine school students include my friends: Medea Kenkebashvili", "Teona Dzuliashvili", "Giorgi Sanaia"],
        instructors: ["Vakhtang Blagidze", "Giorgi Kaxabrishvili"],
        images: ["chaukhi-route.png", "asatiani-route.png", "asatiani1-1.jpg", "asatiani1-2.jpg", "asatiani1-3.jpg", "asatiani1-4.jpg", "asatiani1-5.jpg"],
        duration: "1 day",
        distance: 5.5
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
            description: `This was my second attempt to climb Mt. Kazbek. We were a group of seven people.

On the first day, we drove from Tbilisi to the parking area near Gergeti Trinity Church. From there, we started walking and eventually reached Sabertse Camp.

On the second day, we continued to the higher camp near Betlemi Hut, also known as the White Cross camp. Since we were already at a high altitude, we didn't need to do a separate acclimatization hike.

At 3:00 a.m. on the third day, we left camp and started our summit attempt. The weather was poor, with strong winds and harsh conditions. At around 4,300 meters, one of our team members began experiencing severe symptoms of altitude sickness and couldn't continue.

I decided to return to camp with her, while the rest of the team continued toward the summit. Unfortunately, neither of us made it to the top, but the other five members of our team successfully reached the summit.

After they returned to camp, we began our journey back to Tbilisi.`
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
            description: `This was my third attempt to climb Mt. Kazbek, and this time, I made it!

We left Tbilisi around midday and continued walking until we reached our first camp at night.

On the second day, we continued to the higher camp near Betlemi Hut, also known as the White Cross camp. Since we were already at a high altitude, we didn't need a separate acclimatization hike.

On the third day, heavy snowfall prevented us from making a summit attempt.

On the fourth day, we left camp at 3:00 a.m. and headed for the summit. The weather and conditions were excellent, and everything was beautiful. We didn't descend to camp that day.

On the fifth day, we returned to Tbilisi.`
        },
        team: ["Medea Kenkebashvili", "Teona Dzuliashvili", "Giorgi Sanaia"],
        images: ["mt-kazbeg-route.png", "kazbegi3-1.jpg", "kazbegi3-2.jpg", "kazbegi3-3.jpg", "kazbegi3-4.jpg", "kazbegi3-5.jpg", "kazbegi3-6.jpg", "kazbegi3-7.jpg", "kazbegi3-8.jpg"],
        duration: "5 days",
        distance: 15.5
    },
    {
        id: 10,
        mountain: "Mt. TSU",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2025-06-26",
        elevation: 3690,
        difficulty: "2B",
        thumbnail: "tsu.jpg",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. TSU", elevation: 3690 },
            ],
            distance: 3.8,
            elevationGain: 1090,
            description: `We started walking from Chaukhi Camp at 6:00 a.m. We headed to the Javakhishvili Cirque and then turned right into a steep couloir.

This is one of the most difficult couloirs I have ever seen. One wrong step, and it would be almost impossible to stop a fall.

After the couloir, we climbed a relatively easy section on the right, which led us to the summit.

For the descent, we used T-shaped anchors, and the last person had to climb backward.`
        },
        team: ["Lasha Mamaladze", "Lery Paksadze"],
        instructors: ["Vakhtang Blagidze"],
        images: ["tsu1-1.jpg", "tsu1-2.jpg", "tsu1-3.jpg", "tsu1-4.jpg", "tsu1-5.jpg", "tsu1-6.jpg"],
        duration: "1 day",
        distance: 3.8
    },
    {
        id: 11,
        mountain: "Mt. Asatiani",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2025-06-27",
        elevation: 3842,
        difficulty: "2B",
        thumbnail: "asatiani.png",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Asatiani", elevation: 3842 },
            ],
            distance: 5.5,
            elevationGain: 1242,
            description: `This is the classic route to Asatiani, one of the longest routes in the Chaukhi Massif.

We left camp at 5:00 a.m. The weather was excellent, and the route was in great condition.

After experiencing bad weather on previous climbs, it was amazing to see how much easier everything felt in good conditions.

We successfully completed the ascent and descent without any incidents.`
        },
        team: ["Lasha Mamaladze", "Lery Paksadze"],
        instructors: ["Vakhtang Blagidze"],
        images: ["chaukhi-route.png", "asatiani-route.png", "asatiani2-1.jpg", "asatiani2-2.jpg", "asatiani2-3.jpg", "asatiani2-4.jpg", "asatiani2-5.jpg"],
        duration: "1 day",
        distance: 5.5
    },
    {
        id: 12,
        mountain: "Mt. Javakhishvili",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2025-06-28",
        elevation: 3733,
        difficulty: "3A",
        thumbnail: "javakhishvili.png",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Javakhishvili", elevation: 3733 },
            ],
            distance: 4,
            elevationGain: 1133,
            description: `This is the classic route to Javakhishvili. We were a team of four and left camp at 6:00 a.m.

We moved quickly and reached the couloir in no time. The couloir wasn't too steep, and the climbing sections were also of moderate difficulty.`
        },
        team: ["Pavle Tabagari", "Teona Dzuliashvili"],
        instructors: ["Vakhtang Blagidze"],
        images: ["chaukhi-route.png", "javakhishvili-route.png", "javakhishvili1-1.jpg", "javakhishvili1-2.jpg", "javakhishvili1-3.jpg", "javakhishvili1-4.jpg", "javakhishvili1-5.jpg", "javakhishvili1-6.jpg", "javakhishvili1-7.jpg"],
        duration: "1 day",
        distance: 4
    },
    {
        id: 13,
        mountain: "Mt. Javakhishvili's Teeth",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2025-07-01",
        elevation: 3533,
        difficulty: "3A",
        thumbnail: "javakhishvili-teeth.png",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Javakhishvili", elevation: 3533 },
            ],
            distance: 4,
            elevationGain: 933,
            description: `This is a very tricky and interesting route. We started climbing toward the ridge before reaching the Javakhishvili Cirque.

The route has many interesting climbing sections. In some places, we had to climb up and then descend again to continue along the route.`
        },
        team: ["Teona Dzuliashvili", "Nika Xubulashvili"],
        instructors: ["Georgi Tefnadze"],
        images: ["chaukhi-route.png", "teeth1-1.jpg", "teeth1-2.jpg", "teeth1-3.jpg", "teeth1-4.jpg"],
        duration: "1 day",
        distance: 4
    },
    {
        id: 14,
        mountain: "Traverse of Mt. Takaishvili and Mt. Rcheulishvili",
        country: "Georgia",
        status: "successful",
        type: "guided",
        date: "2025-07-02",
        elevation: 3642,
        difficulty: "3B",
        thumbnail: "chaukhi-route.png",
        route: {
            points: [
                { name: "Chaukhi Camp", elevation: 2600 },
                { name: "Mt. Takaishvili", elevation: 3422 },
                { name: "Mt. Rcheulishvili", elevation: 3642 },
            ],
            distance: 5,
            elevationGain: 1042,
            description: `This isn't a very popular route, but it's one of the most interesting ones I've ever done.

We left camp at 6:00 a.m. The weather wasn't great, and during the middle sections of the route, we encountered rain and hail.

We were a team of three. We started climbing from the Takaishvili Ridge rather than taking the classic route. After reaching the first summit, we continued toward Mt. Rcheulishvili.

We followed the ridge, climbing and downclimbing along the way. On both sides, there were sections with steep drops, so we had to move carefully and avoid making mistakes.

As we continued, the rain and hail returned, leaving everything wet and slippery. Mist rolled in, making the conditions even worse.

At around 6:00 p.m., we reached what we thought was the final pitch. It turned out there was still more climbing ahead. I climbed the pitch, and at times I worried about falling because the footholds were slippery and the climbing was tricky. Despite the difficult conditions, I managed to climb it without falling.

I trusted my partners, and we kept going even as darkness approached. By then, we had already spent more than 12 hours on the route.

Our instructor started climbing the final section, and we finally reached the summit of Mt. Rcheulishvili at 10:00 p.m., 16 hours after leaving camp.

As soon as we reached the summit, we began our descent. Two hours later, we were back at camp.

Our total time on the route was 18 hours.

This was one of the most interesting and challenging ascents I've ever done.`
        },
        team: ["Teona Dzuliashvili"],
        instructors: ["Vakhtang Blagidze"],
        images: ["takaishvili-rcheulishvili1-1.jpg", "takaishvili-rcheulishvili1-2.jpg", "takaishvili-rcheulishvili1-3.jpg", "takaishvili-rcheulishvili1-4.jpg", "takaishvili-rcheulishvili1-5.jpg"],
        duration: "1 day",
        distance: 5
    },
    {
        id: 15,
        mountain: "Mt. Tetnuldi",
        country: "Georgia",
        status: "successful",
        type: "independent",
        date: "2025-10-04",
        elevation: 4858,
        difficulty: "2B",
        thumbnail: "tetnuldi.jpg",
        route: {
            points: [
                { name: "The Last Lift at Tetnuldi", elevation: 3050 },
                { name: "Near Tetnuldi pillow", elevation: 4100 },
                { name: "Mt. Tetnuldi", elevation: 4858 },
            ],
            distance: 9,
            elevationGain: 1808,
            description: `We started our journey from Mestia at 5:00 a.m. and drove to the last lift at Tetnuldi Ski Resort. The weather was excellent, and the conditions looked promising.

On the first day, we climbed almost to Tetnuldi's summit pyramid and camped on the snow near our friends' camp. Camping on snow is always an interesting and enjoyable experience.

The next day, we left camp at 6:00 a.m. We started walking and had to navigate carefully around the crevasses. After reaching the summit pyramid, we continued toward the ridge.

Since it was the end of the season, the snow conditions were poor, making progress difficult. We had to place intermediate anchors and belay each other along the way.

As we continued, the weather began to change. At the final rope section, we considered turning back if the difficult terrain continued. Fortunately, the terrain became easier just as we reached the end of the section, allowing us to continue moving together on a short rope.

We reached the summit and immediately began our descent.

At around 4,400 meters, the weather settled down, and we were able to descend safely to camp. We arrived at 6:00 p.m., completing a 12-hour day on the mountain.

On the third day, we descended to Mestia and then continued our journey back to Tbilisi.`
        },
        team: ["Solomon Shaqarashvili"],
        images: ["tetnuldi1-1.jpg", "tetnuldi1-2.jpg", "tetnuldi1-3.jpg", "tetnuldi1-4.jpg", "tetnuldi1-5.jpg", "tetnuldi1-6.jpg", "tetnuldi1-7.jpg", "tetnuldi1-8.jpg"],
        duration: "3 days",
        distance: 9
    }
]