import Image from "next/image";
import notFoundImage from "@/public/images/404.png";

export default function NotFoundPage() {
    return (
        <div className="flex min-h-screen items-center justify-center text-center">
            <Image
                src={notFoundImage}
                alt="Mountain not found"
                loading="eager"
                className="w-[80%] max-w-[1000px] h-auto"
            />
        </div>
    )
}
