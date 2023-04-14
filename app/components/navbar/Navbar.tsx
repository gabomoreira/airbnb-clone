'use client';

import { SafeUser } from '@/app/types/SafeUser';
import { User } from '@prisma/client';

import Container from '../Container';
import Categories from './Categories';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

interface Props {
  currentUser?: SafeUser | null;
}

export default function Navbar({ currentUser }: Props) {
  console.log({ currentUser }, 'navbar');

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
                    flex
                    flex-row
                    justify-between
                    items-center
                    gap-3
                    md:gap-0
                "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>

      <Categories />
    </div>
  );
}
