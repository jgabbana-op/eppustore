import Image from 'next/image';

export default function Home() {
  return (
    <div className="m-auto w-11/12 max-w-screen-xl">
      <div className="m-auto mb-10 flex w-full flex-col space-y-8 uppercase lg:flex-row lg:justify-around lg:space-x-16 lg:space-y-0">
        <div className="relative mt-10 h-96 w-full rounded bg-eppus-yellow px-4 py-8 text-center lg:mt-0">
          <div className="absolute left-2/4 top-2/4 z-0 h-52 w-52 -translate-x-2/4 -translate-y-2/4">
            <Image
              src="/philhide.png"
              alt="picture of phil the mascot"
              fill
              style={{
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          <a
            href="https://www.google.com/maps/place/60%C2%B010'46.7%22N+24%C2%B056'57.5%22E/@60.1796417,24.9486593,19z/data=!3m1!4b1!4m13!1m8!3m7!1s0x46920bd4a7023691:0x8b7f7ce88371cbf4!2zU8Okw6RzdMO2cGFua2lucmFudGEsIDAwNTMwIEhlbHNpbmtp!3b1!8m2!3d60.1789898!4d24.9467736!16s%2Fg%2F1hhh7299w!3m3!8m2!3d60.179641!4d24.949303?entry=ttu"
            target="_blank"
          >
            <h3 className="absolute left-2/4 top-2/4 m-auto w-3/4 -translate-x-2/4 -translate-y-2/4 rounded bg-eppus-brown py-8">
              Säästöpankinranta
            </h3>
          </a>
        </div>
        <div className="relative h-96 w-full rounded bg-eppus-yellow px-4 py-8 text-center">
          <div className="absolute left-2/4 top-2/4 z-0 h-52 w-52 -translate-x-2/4 -translate-y-2/4">
            <Image
              src="/philhide.png"
              alt="picture of phil the mascot"
              fill
              style={{
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          <a
            href="https://www.google.com/maps/place/Eppu's+cheesesteaks/@60.1675455,24.9307949,19z/data=!4m6!3m5!1s0x46920b3920688e77:0x639a710dc3b0644!8m2!3d60.1675455!4d24.9316961!16s%2Fg%2F11stwmvrcb?entry=ttu"
            target="_blank"
          >
            <h3 className="absolute left-2/4 top-2/4 m-auto w-3/4 -translate-x-2/4 -translate-y-2/4 rounded bg-eppus-brown py-8">
              Kampintori
            </h3>
          </a>
        </div>
        <div className="relative h-96 w-full rounded bg-eppus-yellow px-4 py-8 text-center">
          <div className="absolute left-2/4 top-2/4 z-0 h-52 w-52 -translate-x-2/4 -translate-y-2/4">
            <Image
              src="/philhide.png"
              alt="picture of phil the mascot"
              fill
              style={{
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          <a
            href="https://www.google.com/maps/place/Dallap%C3%A9npuisto/@60.189384,24.957443,17.35z/data=!4m6!3m5!1s0x46920978ba2a662f:0x70b44e936c7e583b!8m2!3d60.1900846!4d24.9575794!16s%2Fg%2F11h1td2wt?entry=ttu"
            target="_blank"
          >
            <h3 className="absolute left-2/4 top-2/4 m-auto w-3/4 -translate-x-2/4 -translate-y-2/4 rounded bg-eppus-brown py-8">
              Dallapenpuisto
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}