import Link from "next/link";
import { Ascent } from "../types/ascent";

export default function AscentCard({ ascent }: { ascent: Ascent }) {
    return (
        <div className="ml-5">
            <div className="flex items-center gap-2">
                <span
                    title={ascent.status === "successful" ? "Successful" : "Attempted"}
                    className={`size-2 rounded-full ${ascent.status === "successful" ? "bg-green-500" : "bg-red-500"}`}
                />
                <Link href={`/ascents/${ascent.id}`} className="text-base font-semibold text-charcoal">
                    {ascent.mountain} ({ascent.difficulty})
                </Link>
            </div>
            <p className="pl-4 text-sm text-zinc-500">{ascent.elevation} m </p>
            <p className="mt-1 pl-4 text-sm text-zinc-400">
                {new Date(`${ascent.date}T12:00:00`).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            </p>
        </div>
    );
}
