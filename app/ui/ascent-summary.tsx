import { Ascent } from "../types/ascent";

export default function AscentSummary({ ascents }: { ascents: Ascent[] }) {
    const successful = ascents.filter((ascent) => ascent.status === "successful").length;
    const attempted = ascents.length - successful;

    return (
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-green-500" />
                {successful} Successful
            </span>
            <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-red-500" />
                {attempted} Attempted
            </span>
        </p>
    );
}
