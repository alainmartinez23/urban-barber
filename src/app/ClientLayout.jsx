'use client';

import { usePathname } from 'next/navigation';
import Menu from './components/Menu';

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const is404 = children?.type?.name === 'NotFound';

  return (
    <>
      {!is404 && <Menu />}
      {children}
    </>
  );
}