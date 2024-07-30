import Link from "next/link";

const item = [
  {
    img: "/telegram.svg",
    link: "https://t.me/GuraOnSol",
  },
  {
    img: "/x.svg",
    link: "",
  },
  {
    img: "/owl.svg",
    link: "",
  },
];

export default function Navbar() {
  return (
    <div className=" flex items-center border-4 px-4 border-black rounded-lg shadow-lg justify-between gap-4 absolute top-10 max-w-screen-xl mx-auto left-0 right-0 w-full">
      <div className="py-1">
        <img src="/girl.svg" alt="" className="w-7 h-7" />
      </div>
      <div className="flex gap-2 items-center">
        {item.map((item, index) => (
          <Link href={item.link} target="_blank" key={index}>
            <img src={item.img} alt="" className="w-7 h-7 object-cover" />
          </Link>
        ))}

        <button className="ml-4 px-4 py-2 border-2 rounded-md bg-[#5bb2ff] text-white flex items-center gap-0.5">
          BUY $GG <img src="/buy.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
