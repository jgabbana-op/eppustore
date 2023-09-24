'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const EppusGradient = () => {
  return (
    <div className="gradientBrown mt-4 flex h-52 w-full justify-between overflow-hidden rounded-lg bg-eppus-brown text-eppus-yellow-font md:h-96 lg:mt-12">
      <div className="relative h-full w-1/2">
        <h2 className="absolute left-4 top-8 whitespace-nowrap text-lg uppercase md:left-1/4 md:top-20 md:text-4xl">
          Made with <br />
          <span className="ml-2 md:ml-8">diligence</span>
        </h2>
        <h2 className="absolute bottom-8 left-4 whitespace-nowrap text-lg uppercase md:bottom-1/4 md:left-1/3 md:text-4xl lg:left-2/4">
          Served <br />{' '}
          <span className="ml-2 md:ml-8">
            piping <span className="text-eppus-red">hot</span>
          </span>
        </h2>
      </div>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 10 }}
        transition={{ duration: 0.5, delay: 0.3, type: 'spring', bounce: 0.25 }}
        className="relative -mr-5 w-80 overflow-hidden sm:mr-20 md:mr-0 md:w-1/2 lg:mr-0 lg:w-1/2"
      >
        <Image
          src="/handsteak2.png"
          alt="Picture of the author"
          priority={true}
          quality={100}
          fill
          objectPosition="bottom"
          sizes="100vw"
          style={{
            maxWidth: '100%',
            objectFit: 'contain',
            backgroundPosition: 'bottom'
          }}
        />
      </motion.div>
    </div>
  );
};
