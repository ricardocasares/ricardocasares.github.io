import Link from "@app/components/Link";
import HorizontalScroll from "@app/components/Scroller";
import { NavList } from "@app/components/Typography/List";
import Logo from "@app/components/Logo";

export const Navigation = () => (
  <HorizontalScroll>
    <nav>
      <NavList>
        <li>
          <Link href="/" prefetch>
            <a>
              <Logo />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/changelog" partial prefetch>
            <a>Changelog</a>
          </Link>
        </li>
        <li>
          <Link href="/projects" prefetch>
            <a>Projects</a>
          </Link>
        </li>
      </NavList>
    </nav>
  </HorizontalScroll>
);

export default Navigation;