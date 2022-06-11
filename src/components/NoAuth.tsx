import Image from 'next/image';

interface NoAuthProps {
  error: Error | undefined;
  isLoading: boolean;
}

const NoAuth = (props: NoAuthProps) => {
  const { error, isLoading } = props;
  const heading = error
    ? 'Error'
    : isLoading
    ? 'Loading...'
    : 'You are not logged in';
  const msg = error
    ? error.message
    : 'Hit the login button on the header to view some sweet sweet data.';

  return (
    <>
      <article className="w-full">
        <h1 className="md:text-6xl mb-6 mr-auto text-4xl text-center w-full">
          {heading}
        </h1>
        <p className="text-xl text-center">{msg}</p>
      </article>
      <section className="no-auth flex items-center justify-center mt-auto w-full">
        <Image
          src="/img/beltalowda.png"
          alt="Illustration of Juan wearing a belter space suite from the show The Expanse."
          width={576}
          height={576}
          loading="lazy"
          objectPosition="center"
        />
      </section>
    </>
  );
};

export default NoAuth;
