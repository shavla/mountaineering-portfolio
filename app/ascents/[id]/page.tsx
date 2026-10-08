import { notFound } from "next/navigation";
import { ascents } from "../../data/ascents";

export default async function AscentInfo({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const ascent = ascents.find((ascent) => ascent.id === Number(id));
    if (!ascent) notFound();

    return (<div>
        <h1>{ascent.title}</h1>
    </div>)
}
