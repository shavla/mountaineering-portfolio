import { Route } from "../types/ascent";

export default function RouteTimeline({ route }: { route: Route }) {
    const { points } = route;

    return (
        <div>
            {(route.distance || route.elevationGain) && (
                <div className="mb-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500">
                    {route.distance && <span><span className="font-semibold text-charcoal">{route.distance} km</span> distance</span>}
                    {route.elevationGain && <span><span className="font-semibold text-charcoal">+{route.elevationGain.toLocaleString()} m</span> elevation gain</span>}
                </div>
            )}

            <ol>
                {points.map((point, index) => {
                    const isStart = index === 0;
                    const isFinish = index === points.length - 1;

                    return (
                        <li key={`${point.name}-${index}`} className="relative flex gap-4 pb-8 last:pb-0">
                            {!isFinish && <span className="absolute left-[7px] top-5 h-full w-0.5 bg-zinc-200" />}

                            <span
                                className={`relative mt-1 size-4 shrink-0 rounded-full border-2 ${isFinish
                                    ? "border-charcoal bg-charcoal"
                                    : isStart
                                        ? "border-zinc-400 bg-white"
                                        : "border-zinc-400 bg-zinc-400"
                                    }`}
                            />

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                    {isStart ? "Start" : isFinish ? "Finish" : "Stop"}
                                </p>
                                <p className={`mt-0.5 font-semibold ${isFinish ? "text-lg" : ""}`}>
                                    {point.name}
                                </p>
                                <p className="text-sm text-zinc-500">{point.elevation.toLocaleString()} m</p>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
