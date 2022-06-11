import { config } from '@/utils/AppConfig';
import Image from 'next/image';

const Intro = () => (
  <section className="intro flex flex-col items-center justify-start max-w-2xl mx-auto mb-4 mt-auto sm:flex-row w-full">
    <Image
      src={`/img/${config.intro.img}`}
      alt={config.intro.alt}
      width={576}
      height={576}
      loading="lazy"
      objectPosition="center"
    />
    <div className="flex flex-col items-start justify-start w-full">
      <h2 className="md:text-4xl text-3xl">{config.intro.heading}</h2>
      <p className="text-xl">{config.intro.copy}</p>
    </div>
  </section>
);

export default Intro;
