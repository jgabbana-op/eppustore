import { PageWrapper } from 'components/page-wrapper';
import Image from 'next/image';

export default function Home() {
  return (
    <PageWrapper className="flex flex-1 flex-col overflow-hidden">
      <div className="m-auto my-16 hidden w-10/12 max-w-screen-xl text-center uppercase md:block">
        <h2 className="text-5xl">Juicy. Sensational. Piping hot.</h2>
      </div>
      <div className="m-auto mb-14 mt-10 flex w-11/12 max-w-screen-xl flex-1 flex-col md:mt-0">
        {/* Real content */}
        <div className="m-10 mx-auto flex w-10/12 flex-1 flex-row justify-center">
          <div className="relative flex max-w-[600px] flex-1 flex-col justify-center rounded bg-eppus-yellow px-4 py-8 text-center align-middle">
            <div className="absolute -left-16 -top-4 h-32 w-32 lg:-left-20 lg:h-44 lg:w-44">
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
            <h3 className="fontborder text-2xl uppercase">Eppu&apos;s philly</h3>
            <p className="mt-8 uppercase">
              Chopped Chuckroll steak <br />
              (Finnish beef)
              <br /> fried onion <br /> aged cheddar sauce <br /> white chedder slices
            </p>
            <p className="mt-8">10€</p>
          </div>
          {/* <div className="relative flex max-h-[600px] flex-1 flex-col justify-center rounded bg-eppus-yellow px-4 py-8 text-center align-middle">
            <div className="absolute -bottom-8 -right-12 h-32 w-32 lg:-right-20 lg:h-44 lg:w-44">
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
            <h3 className="fontborder text-2xl uppercase">Not your cheesesteak</h3>
            <p className="mt-8 uppercase">
              Nachos
              <br /> Finnish beef chuck roll steak <br /> Chopped onion <br /> Aged cheddar sauce{' '}
              <br /> White cheddar
            </p>
            <p className="mt-8">8€</p>
          </div> */}
        </div>
      </div>
    </PageWrapper>
  );
}
