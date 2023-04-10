import React, { PropsWithChildren } from 'react';
import { H1, H2 } from './header.styled';

interface HeaderProps {
  type: 'header' | 'subheader';
}

function Header({ type, children }: PropsWithChildren<HeaderProps>) {
  switch (type) {
    case 'header':
      return (
        <H1>{children}</H1>
      );
    case 'subheader':
      return (
        <H2>{children}</H2>
      );
    default:
      throw new Error("Unknown header's type");
  }
}

export default Header;
