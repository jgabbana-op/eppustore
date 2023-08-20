'use client';

import clsx from 'clsx';
import { ProductVariant } from 'lib/shopify/types';
import { useState } from 'react';
import { AddToCart } from './cart/add-to-cart';

type Props = {
  variants: ProductVariant[];
};

export const AddWithVariants = ({ variants }: Props) => {
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>();

  console.log(variants);

  if (variants.length === 1)
    return (
      <AddToCart
        className="mt-4"
        availableForSale={variants[0]?.availableForSale || false}
        merchandiseId={variants[0]?.id || ''}
      />
    );
  else
    return (
      <>
        <div className="mt-4 flex w-full flex-row justify-between space-x-2">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => {
                if (variant.availableForSale) {
                  setSelectedVariantId(variant.id);
                }
              }}
              className={clsx(
                'flex-1 rounded-md border-2 border-eppus-yellow-font p-2 transition-all',
                {
                  'bg-eppus-yellow text-black': variant.id === selectedVariantId,
                  'cursor-not-allowed bg-eppus-red': !variant.availableForSale
                }
              )}
            >
              {variant.title}
            </button>
          ))}
        </div>
        <AddToCart className="mt-4" availableForSale merchandiseId={selectedVariantId || ''} />
      </>
    );
};
