import Link from "next/link";
import { Ascent } from "../types/ascent";

export default function AscentCard({ ascent }: { ascent: Ascent }) {
    return (
        <div className="ml-5">
            <Link href={`/ascents/${ascent.id}`} className="text-base font-semibold text-charcoal">_{ascent.title}</Link>
            <p className="text-sm text-zinc-500">{ascent.elevation} m </p>
            <p className="mt-1 text-sm text-zinc-400">{ascent.date.replaceAll("-", ". ")}</p>
        </div>
    );
}
