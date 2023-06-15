import Image from "next/image";

export default function NotFound() {
  return (
    <section className="w-full h-screen flex items-center justify-center relative">
      <figure className="w-full h-full absolute top-0 left-0">
        <Image src={"/img/intro.jpg"} alt={""} width={2000} height={2000} className="w-full h-full object-cover" />
        <figcaption className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-gray-950 text-white">
          <h2 className="text-3xl font-semibold">Not Found</h2>
          <p>Could not find requested resource</p>
        </figcaption>
      </figure>
    </section>
  );
}