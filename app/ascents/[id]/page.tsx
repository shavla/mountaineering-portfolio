import { notFound } from "next/navigation";
import { ascents } from "../../data/ascents";
import Image from "next/image";
import RouteTimeline from "../../ui/route-timeline";
import StatCard from "../../ui/stat-card";

export default async function AscentInfo({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const ascent = ascents.find((ascent) => ascent.id === Number(id));
    if (!ascent) notFound();

    return (<div className="mx-auto max-w-6xl px-5 pb-20 pt-20 text-charcoal">
        <section className="main-info flex flex-col items-center">
            <Image
                src={ascent.thumbnail}
                alt={ascent.mountain}
                width={680}
                height={580}
                className="px-5"
                loading="eager"
            />
            <h1 className="mt-10 text-3xl font-semibold text-charcoal">{ascent.mountain}</h1>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
                <span className={`rounded-full px-3 py-1 text-sm text-white ${ascent.status === "successful" ? "bg-green-500" : "bg-red-500"
                    }`}>
                    {ascent.status === "successful"
                        ? "✓ Successful ascent"
                        : "Attempted"}
                </span>
                <span className="rounded-full bg-gray-300 px-3 py-1 text-sm">
                    {ascent.type === "independent"
                        ? "Independent"
                        : "With instructor"}
                </span>
            </div>
        </section>

        <section className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="Elevation" value={`${ascent.elevation.toLocaleString()} m`} />
            <StatCard label="Duration" value={ascent.duration ?? "—"} />
            <StatCard label="Distance" value={`${ascent.distance ?? ascent.route.distance ?? "—"} km`} />
            <StatCard label="Difficulty" value={ascent.difficulty ?? "—"} />
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                The journey
            </p>

            <div className="mt-8 grid gap-10 md:grid-cols-[3fr_4fr]">
                <RouteTimeline route={ascent.route} />
                <div>
                    <h3 className="text-lg font-semibold">
                        About the route
                    </h3>

                    <p className="mt-4 whitespace-pre-line leading-5 text-zinc-600">
                        {ascent.route.description}
                    </p>
                </div>
            </div>
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Expedition details
            </h2>

            <div className="mt-6 grid gap-10 md:grid-cols-[3fr_4fr]">
                <div>
                    <p className="text-sm text-zinc-500">
                        Ascent type
                    </p>
                    <p className="mt-1 font-semibold">
                        {ascent.type === "independent"
                            ? "Independent ascent"
                            : "Ascent with instructor"}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-zinc-500">
                        Team
                    </p>
                    <p className="mt-1 font-semibold leading-5">
                        {ascent.team?.length
                            ? ascent.team.join(", ")
                            : "Solo / not specified"}
                    </p>
                </div>
            </div>
        </section>
        {ascent.images.length > 0 && (
            <section className="mt-16 border-t border-zinc-200 pt-10">
                <h2 className="text-2xl font-bold">Moments from the mountain</h2>

                <div className="mt-6 columns-1 gap-6 md:columns-2">
                    {ascent.images.map((filename, index) => (
                        <Image
                            key={filename}
                            src={`/images/${filename}`}
                            alt={`${ascent.mountain} ascent photo ${index + 1}`}
                            width={1000}
                            height={1000}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="mb-6 h-auto w-full break-inside-avoid rounded-xl"
                        />
                    ))}
                </div>
            </section>
        )}
    </div>)
}