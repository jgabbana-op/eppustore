import { Insta } from 'components/icons/insta';
import { Tiktok } from 'components/icons/tiktok';
import Image from 'next/image';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default function Home() {
  return (
    <main className="">
      <div className="m-auto w-11/12 max-w-screen-xl bg-background">
        <div className="flex justify-center lg:hidden">
          <a
            href="https://wolt.com/en/fin/helsinki/restaurant/eppus-cheesesteaks-kamppi"
            target="_blank"
          >
            <div className="flex flex-row justify-end align-bottom uppercase text-eppus-yellow-font">
              <div className="relative h-20 w-20">
                <Image
                  src="/foodtruck.png"
                  priority={true}
                  alt="logo"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className=" mb-4 ml-1 self-end">Order</div>
            </div>
          </a>
        </div>
        <div className="gradientBrown mt-4 flex h-60 w-full justify-between rounded-lg bg-eppus-brown text-eppus-yellow-font md:h-96 lg:mt-12">
          <div className="relative h-full flex-1">
            <h2 className="absolute left-6 top-8 text-2xl uppercase md:left-1/4 md:top-20 md:text-4xl">
              Made with <br />
              <span className="ml-8">diligence</span>
            </h2>
            <h2 className="absolute bottom-8 left-6 whitespace-nowrap text-2xl uppercase md:bottom-1/4 md:left-1/3 md:text-4xl lg:left-2/4">
              Served <br />{' '}
              <span className="ml-8">
                piping <span className="text-eppus-red">hot</span>
              </span>
            </h2>
          </div>
          <div className="relative h-full flex-1 xl:mr-20 xl:scale-125">
            <Image
              src="/cheesesteak.png"
              alt="Picture of the author"
              priority={true}
              quality={100}
              fill
              sizes="100vw"
              style={{
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
        <div className="m-auto mt-20 flex w-10/12 flex-col content-stretch space-y-16 lg:w-full lg:flex-row lg:justify-between lg:space-x-16 lg:space-y-0">
          <div className="relative grow rounded bg-eppus-yellow px-4 pb-20 pt-8 text-center">
            <div className="absolute -left-16 -top-4 h-32 w-32 lg:-left-20 lg:h-44 lg:w-44">
              <Image
                src="/philpoint.png"
                alt="picture of phil the mascot"
                priority={true}
                fill={true}
                style={{
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <h3 className="fontborder text-2xl uppercase">Eppu&apos;s philly</h3>
            <p className="mt-8 uppercase">
              Finnish beef chuck roll steak <br /> chopped onion <br /> aged cheddar sauce <br />{' '}
              white cheddar
            </p>
            <p className="mt-8">10€</p>
          </div>
          <div className="relative grow">
            <div className="absolute -top-9 left-2/4 h-32 w-32 -translate-x-2/4 lg:-top-12 lg:h-44 lg:w-44">
              <Image
                src="/philhide.png"
                alt="picture of phil the mascot"
                priority={true}
                fill
                style={{
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div className="relative grow rounded bg-eppus-yellow px-4 pb-20 pt-8 text-center">
              <h3 className="fontborder text-2xl uppercase">Not your cheesesteak</h3>
              <p className="mt-8 uppercase">
                Nachos
                <br /> Finnish beef chuck roll steak <br /> Chopped onion <br /> Aged cheddar sauce{' '}
                <br /> White cheddar
              </p>
              <p className="mt-8">8€</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative m-auto my-36 h-28 bg-background">
        <div className="h-full bg-eppus-red py-2"></div>
        <div className="absolute left-1/2 top-1/2 h-60 w-full -translate-x-1/2 -translate-y-1/2 transform">
          <Image
            src="/philpoint.png"
            alt="picture of phil the mascot"
            fill
            style={{
              maxWidth: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
      <div className="m-auto w-11/12 max-w-xl">
        <div className="m-auto mt-12 w-full text-center">
          <p className="my-8">
            Eppu&apos;s Cheesesteaks serves a classic look of the iconic Philly Cheesesteak
            sandwich.
          </p>
          <p className="my-8">
            A soft bun filled with juicy, tender, and flavourful steak, is coated with a hot cheddar
            cheese sauce, and topped with soft and sweet grill fried onions.
          </p>
          <p className="my-8">
            These elements combine into a mouth-watering and piping-hot Eppu&apos;s Philly sandwich.
          </p>
          <div className="my-8 flex flex-row justify-center space-x-4">
            <a href="https://www.instagram.com/eppuscheesesteaks/" target="_blank">
              <Insta />
            </a>
            <a href="https://www.tiktok.com/@eppuscheesesteaks" target="_blank">
              <Tiktok />
            </a>
          </div>
          <p className="my-10">©EPPU’S. PIPING HOT FOREVER. 2023.</p>
        </div>
      </div>
    </main>
  );
}
