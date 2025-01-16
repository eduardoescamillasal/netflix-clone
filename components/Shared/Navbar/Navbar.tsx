import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

import { NavbarProps } from "./Navbar.types";

export function Navbar(props: NavbarProps) {
  const { users } = props;
  return (
    <nav>
      <div className="mx-auto hidden md:block">
        <NavbarDesktop users={users} />
      </div>
      <div className="md:hidden">
        <NavbarMobile users={users} />
      </div>
    </nav>
  );
}
