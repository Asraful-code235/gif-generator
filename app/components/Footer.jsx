export default function Footer() {
  return (
    <footer
      className="absolute bottom-0 w-full bg-center bg-no-repeat bg-cover h-[200px] lg:h-[556px] "
      style={{ backgroundImage: "url(/banner3.png)" }}
    >
      <div className="flex items-end justify-center h-full pb-4 mb-4 md:pl-40 lg:pl-80">
        <button className="px-4 py-2 border-2 rounded-md bg-[#5bb2ff] text-white flex items-center gap-0.5 border-black border-b-4">
          BUY $GG <img src="/buy.svg" alt="" />
        </button>
      </div>
    </footer>
  );
}
