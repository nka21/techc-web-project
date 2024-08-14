import Link from "next/link";

const NavItem = ({ item }: { item: string }) => (
  <li key={item}>
    <Link href={`#${item}`} className="hover:underline" aria-label={item}>
      <p className="font-semibold text-2xl tracking-[8%]">{item}</p>
    </Link>
  </li>
);

export const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="w-[260px] h-[100px] bg-white rounded-full" />
        <ul className="flex space-x-[50px]">
          {["ABOUT", "MAP", "FOOD", "RENTAL", "EVENT", "OTHER"].map((item) => (
            <NavItem key={item} item={item} />
          ))}
        </ul>
      </nav>
    </>
  );
};
