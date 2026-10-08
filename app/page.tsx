import Image from "next/image";
import logoImage from "@/public/images/profile1.jpg";
import { ascents } from "./data/ascents";
import AscentCard from "./ui/ascent-card";

export default function Home() {
  const independentAscents = ascents.filter((ascent) => ascent.type === "independent").sort((a, b) => b.date.localeCompare(a.date));
  const guidedAscents = ascents.filter((ascent) => ascent.type === "guided").sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="profile px-6 py-16 max-w-4xl mx-auto">
      <div className="logo flex justify-center">
        <Image
          src={logoImage}
          alt="Person image"
          loading="eager"
          className="size-48 rounded-full object-cover"
        />
      </div>
      <div className="flex items-center flex-col">
        {/* <h1 className="name mt-8 text-3xl font-bold text-center text-charcoal">Shalva Rakviashvili</h1> */}
        <h1 className="name mt-8 text-3xl font-bold text-center text-charcoal">SSKO</h1>
        <p className="job mt-6 text-lg text-zinc-500">Mountaineer</p>
        <p className="nation text-base leading-none text-zinc-400">Georgia</p>
      </div>

      <div className="info mt-8 text-lg text-charcoal flex flex-col justify-center">
        <p>I've been mountaineering and training for over 3 years, with a strong passion for mountains, outdoor adventures, and exploring new places.</p>
        <p className="mt-3">Every ascent is a new experience - a chance to learn, challenge myself, and become a better mountaineer.</p>
      </div>

      <div className="ascents independent mt-16">
        <h2 className="flex items-center gap-1 text-xl font-bold">
          ASCENTS
          <span className="text-sm font-semibold">- INDEPENDENT</span>
        </h2>

        <div className="mt-6 flex flex-col gap-6">
          {independentAscents.map((ascent) => (
            <AscentCard key={ascent.id} ascent={ascent} />
          ))}
        </div>
      </div>

      <div className="ascents guided mt-10">
        <h2 className="flex items-center gap-1 text-xl font-bold">
          ASCENTS
          <span className="text-sm font-semibold">- GUIDED</span>
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {guidedAscents.map((ascent) => (
            <AscentCard key={ascent.id} ascent={ascent} />
          ))}
        </div>
      </div>

    </div>
  );
}