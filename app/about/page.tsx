import image1 from "@/public/about-1.png";
import image2 from "@/public/about-2.png";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "about",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to SepTel Hotel
        </h1>

        <div className="space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            rooms. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <Image
          src={image1}
          alt="Place of Septel"
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className="col-span-2 relative aspect-video">
        <Image
          src={image2}
          alt="Rooms of Septel"
          placeholder="blur"
          quality={80}
        />
      </div>

      {/* <div className="col-span-2 relative aspect-video">
      //alternative
        <Image
          src="/about-2.png"
          alt="Family that manages The Wild Oasis"
          fill
          className="object-cover"
        />
      </div> */}
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Septel has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>

          <div>
            <Link
              href="/rooms"
              className="inline-block mt-4 border-2 border-dashed border-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury rooms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
