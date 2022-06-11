import Head from 'next/head';

import { config } from '@/utils/AppConfig';

const HeadComponent = () => {
  const fontLoading = `
    if ('fonts' in document) {
      const mdNichromeBlack = new FontFace(
        'MD Nichrome',
        'url(/fonts/MD-Nichrome-Black.woff2) format("woff2"), url(/fonts/MD-Nichrome-Black.woff) format("woff")',
        { weight: '900' }
      );
      const mdNichromeBlackOblique = new FontFace(
        'MD Nichrome',
        'url(/fonts/MD-Nichrome-Black-Oblique.woff2) format("woff2"), url(/fonts/MD-Nichrome-Black-Oblique.woff) format("woff")',
        { style: 'oblique', weight: '900' }
      );
      const mdNichromeDark = new FontFace(
        'MD Nichrome',
        'url(/fonts/MD-Nichrome-Dark.woff2) format("woff2"), url(/fonts/MD-Nichrome-Dark.woff) format("woff")',
        { weight: '500' }
      );
      const nunitoRegular = new FontFace(
        'Nunito',
        'url(/fonts/Nunito-Regular.woff2) format("woff2"), url(/fonts/Nunito-Regular.woff) format("woff")'
      );
      const nunitoBold = new FontFace(
        'Nunito',
        'url(/fonts/Nunito-Bold.woff2) format("woff2"), url(/fonts/Nunito-Bold.woff) format("woff")',
        { weight: '700' }
      );

      Promise.all([
        mdNichromeBlack.load(),
        mdNichromeBlackOblique.load(),
        mdNichromeDark.load(),
        nunitoBold.load(),
        nunitoRegular.load(),
      ]).then(fonts => {
        fonts.forEach(font => {
          document.fonts.add(font);
        });
      });
    }
  `;

  return (
    <Head>
      <base href={config.baseURL} />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1.0,initial-scale=1.0,maximum-scale=5.0,viewport-fit=cover"
      />
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="{{ .Site.Title }}" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/icons/icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/icons/icon-167x167.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/icon-180x180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/icons/icon-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/icons/icon-512x512.png"
      />
      <link
        rel="mask-icon"
        color={config.theme}
        href="/icons/safari-pinned-tab.svg"
      />
      <link rel="manifest" href={`${config.baseURL}/manifest.json`} />
      <meta name="theme-color" content={config.theme} />
      <link
        rel="preload"
        href="/fonts/MD-Nichrome-Black-sub.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/MD-Nichrome-Black-sub.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/MD-Nichrome-Black-Oblique-sub.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/MD-Nichrome-Black-Oblique-sub.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/MD-Nichrome-Dark-sub.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/MD-Nichrome-Dark-sub.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Nunito-Regular-sub.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Nunito-Regular-sub.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Nunito-Bold-sub.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Nunito-Bold-sub.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: fontLoading,
        }}
      />
    </Head>
  );
};

export default HeadComponent;
