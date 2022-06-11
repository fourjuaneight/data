import Footer from '@/components/Footer';
import Head from '@/components/Head';
import Header from '@/components/Header';

import type { ReactNode } from 'react';

type IMainProps = {
  children: ReactNode;
};

export const Main = (props: IMainProps) => (
  <>
    <Head />
    <Header />
    <main className="grid w-full">
      <div className="col-start-2 flex flex-col items-start justify-start row-start-2 w-full">
        {props.children}
      </div>
    </main>
    <Footer />
  </>
);
