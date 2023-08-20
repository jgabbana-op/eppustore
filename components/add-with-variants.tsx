'use client';

import { ProductVariant } from 'lib/shopify/types';
import { useState } from 'react';
import { AddToCart } from './cart/add-to-cart';

type Props = {
  variants: ProductVariant[];
};

export const AddWithVariants = ({ variants }: Props) => {
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>();

  if (variants.length === 1)
    return <AddToCart className="mt-4" availableForSale merchandiseId={variants[0]?.id || ''} />;
  else
    return (
      <>
        <div className="mt-4 flex w-full flex-row justify-between space-x-2">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariantId(variant.id)}
              className={`flex-1 rounded-md border-2 border-eppus-yellow-font p-2 ${
                variant.id === selectedVariantId ? 'bg-eppus-yellow text-black' : ''
              }`}
            >
              {variant.title}
            </button>
          ))}
        </div>
        <AddToCart className="mt-4" availableForSale merchandiseId={selectedVariantId || ''} />
      </>
    );
};
