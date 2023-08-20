'use client';

import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
// import LoadingDots from 'components/loading-dots';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export function AddToCart({
  merchandiseId,
  availableForSale,
  className
}: {
  merchandiseId: string;
  availableForSale: boolean;
  className?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label="Add item to cart"
      disabled={isPending || !availableForSale || !merchandiseId}
      onClick={() => {
        // Safeguard in case someone messes with `disabled` in devtools.
        if (!availableForSale || !merchandiseId) return;

        startTransition(async () => {
          const error = await addItem(merchandiseId);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      className={clsx(
        'relative flex w-full items-center justify-center rounded bg-eppus-yellow p-4 tracking-wide text-white hover:opacity-90',
        {
          'cursor-not-allowed opacity-60 hover:opacity-60': !availableForSale || !merchandiseId,
          'cursor-not-allowed': isPending
        },
        className
      )}
    >
      <span>{availableForSale ? 'Add To Cart' : 'Out Of Stock'}</span>
    </button>
  );
}
