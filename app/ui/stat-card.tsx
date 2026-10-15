export default function StatCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-xl border border-zinc-200 p-4 sm:p-5">
            <p className="text-sm text-zinc-500">{label}</p>
            <p className="mt-2 text-xl font-bold sm:text-2xl">
                {value}
            </p>
        </div>
    );
}
