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
      <nav className="flex items-center justify-between">
        <div className="h-[100px] w-[260px] rounded-full bg-white" />
        <ul className="flex space-x-[50px] uppercase">
          {["about", "map", "food", "rental", "event", "other"].map((item) => (
            <NavItem key={item} item={item} />
          ))}
        </ul>
      </nav>
    </>
  );
};
