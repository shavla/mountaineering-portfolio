import React from "react";

export default function AscentLayout({ children }: { children: React.ReactNode }) {
    return <div>
        <h1 className="text-red-500">this is layout </h1>
        {children}
    </div>
}