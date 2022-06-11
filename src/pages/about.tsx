import Image from 'next/image';

import { Main } from '@/templates/Main';

const About = () => (
  <Main tile="About This Site">
    <article className="w-full">
      <h1 className="post-title md:text-6xl mr-auto text-4xl">
        About This Site
      </h1>
      <p>
        Hi, I&apos;m{' '}
        <a
          href="https://www.juanvillela.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Juan Villela
        </a>{' '}
        and I like websites. Most of my time is spent making them for strangers
        online. When I&apos;m not working, I&apos;m probably still coding.
      </p>
      <p>
        In a never-end attempt at cataloging everything I find interesting
        online, I&apos;ve amassed a collection of links to my favorite articles,
        comics, podcasts, and other things. This app is where that data comes
        together in an organized way.
      </p>
      <p>
        If you wish to learn more about how I collect this data, you can{' '}
        <a
          href="https://cleverlaziness.com/tags/bookmarking/"
          target="_blank"
          rel="noopener noreferrer"
        >
          read about it here
        </a>
        .
      </p>
    </article>
    <section className="footer flex items-center justify-center mb-4 mt-auto w-full">
      <Image
        src="/img/about.png"
        alt="Illustration of Juan laying on a sofa, coding on a laptop."
        width={576}
        height={576}
        loading="lazy"
        objectPosition="center"
      />
    </section>
  </Main>
);

export default About;
