import Image from "next/image";
import logoImage from "@/public/images/profile1.jpg";

export default function Home() {
  return (
    <div className="px-6 py-13">
      <div className="logo flex justify-center">
        <Image
          src={logoImage}
          alt="Person image"
          loading="eager"
          className="size-36 rounded-full object-cover"
        />
      </div>
      <div className="title text-charcoal mt-6 flex items-center flex-col">
        <h1 className="text-2xl font-bold">Shalva Rakviashvili</h1>
        <h2>Mountaineer</h2>
        <h2>Georgiass</h2>
      </div>

      <div className="info"></div>

    </div>
  );
}