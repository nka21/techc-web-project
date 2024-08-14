import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="w-[260px] h-[100px] bg-white rounded-full" />
        <ul className="flex space-x-[50px]">
          {["ABOUT", "MAP", "FOOD", "RENTAL", "EVENT", "OTHER"].map((item) => (
            <li key={item}>
              <Link href={`#${item}`} className="hover:underline">
                <p className="font-semibold text-2xl tracking-[8%]">{item}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
