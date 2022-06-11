import { useUser } from '@auth0/nextjs-auth0';

import { config } from '@/utils/AppConfig';

const Header = () => {
  const { user } = useUser();

  const nav: { [key: string]: string } = config.nav.header;
  const navItems = Object.keys(nav);

  return (
    <header className="bg-background-dark border-0 border-b border-solid border-tertiary grid w-full">
      <section className="col-start-2 flex items-center justify-between row-start-2 w-full">
        <a
          href={config.baseURL}
          className="site-name focus:no-underline focus:text-secondary font-mdNichrome hover:no-underline hover:text-secondary leading-5 no-underline text-primary text-xl xxs:leading-none xxs:text-2xl whitespace-nowrap"
        >
          {config.title}
        </a>
        <nav className="overflow-x-auto overflow-y-auto w-full xxxs:overflow-hidden">
          <ul
            className="auto-cols-min gap-x-2 grid grid-rows-1 items-center list-none m-0 p-0 xxs:gap-x-3"
            style={{ justifyContent: 'end' }}
          >
            {navItems.map((item, index) => (
              <li key={item} className="m-0 row-start-1">
                <a className="hover:underline no-underline" href={nav[item]}>
                  {item}
                </a>
              </li>
            ))}
            <li className="ml-2 my-0 row-start-1">
              <a
                className="
                    bg-secondary
                    duration-300
                    ease-in-out
                    hover:bg-primary
                    hover:no-underline
                    hover:text-background
                    no-underline
                    px-2
                    py-0
                    rounded
                    text-background
                    transition-colors
                  "
                href={`/api/auth/${user ? 'logout' : 'login'}`}
              >
                {user ? 'Logout' : 'Login'}
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
