import { PropsWithChildren } from 'react';
import { ProductContextProvider } from './product.context';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ProductContextProvider>{children}</ProductContextProvider>
  );
};
