import { config } from '@/utils/AppConfig';
import { getYear } from 'date-fns';

const Footer = () => {
  const date = new Date();
  const year = getYear(date);
  const nav: { [key: string]: string } = config.nav.footer;
  const navItems = Object.keys(nav);
  const limit = navItems.length - 1;

  return (
    <footer className="grid w-full">
      <section className="col-start-2 flex flex-col items-center justify-center row-start-2 w-full">
        <nav className="w-auto">
          <ul className="auto-cols-min gap-x-1 grid grid-rows-1 items-center list-none my-2 p-0 xxs:gap-x-3">
            {navItems.map((item, index) => (
              <>
                <li className="m-0 row-start-1" data-item={index}>
                  <a
                    className="hover:underline no-underline"
                    href={nav[item]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item}
                  </a>
                </li>
                {index !== limit && (
                  <li className="m-0 row-start-1">
                    <p className="m-0 text-meta text-base" aria-hidden="true">
                      &#8226;
                    </p>
                  </li>
                )}
              </>
            ))}
          </ul>
        </nav>
        <ul className="auto-cols-auto gap-x-1 grid grid-rows-1 items-center list-none my-2 p-0 xxs:gap-x-3">
          <li className="m-0 row-start-1">
            <p className="m-0 text-sm">
              &copy;{`2017-${year} ${config.title}`}
            </p>
          </li>
          <li className="m-0 row-start-1">
            <p className="m-0 text-meta text-sm" aria-hidden="true">
              ~
            </p>
          </li>
          <li className="m-0 row-start-1">
            <a
              className="no-underline text-sm"
              href={`https://github.com/${config.social}/data`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
