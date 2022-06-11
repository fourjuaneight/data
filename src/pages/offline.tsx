import Image from 'next/image';

import { Main } from '@/templates/Main';

const Offline = () => (
  <Main tile="Looks like you're offline.">
    <article className="w-full">
      <h1 className="post-title md:text-6xl mr-auto text-4xl">
        Looks like you&apos;re offline.
      </h1>
      <p>
        Head back to the pages you&apos;ve already visiting, which should work
        offline.
      </p>
    </article>
    <section className="footer flex items-center justify-center mb-4 mt-auto w-full">
      <Image
        src="/img/mage-cat.png"
        alt="Illustration of a British Shorthair cat with a wizard hat."
        width={576}
        height={576}
        loading="lazy"
        objectPosition="center"
      />
    </section>
  </Main>
);

export default Offline;
