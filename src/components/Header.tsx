'use client';

import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';
import Link from 'next/link';
import Form from 'next/form';

const Header = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <header className="flex justify-between items-center px-5 py-3">
      <div>
        <Link href="/" className="font-bold">
          Shopper
        </Link>
      </div>

      <Form action="/search">
        <input
          type="text"
          placeholder="search..."
          name="query"
          className="border"
        />
      </Form>

      <nav role="navigation">
        <ul className="flex gap-3 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center gap-5">
            {user ? (
              <span>
                <UserButton />
              </span>
            ) : (
              <SignInButton mode="modal" />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
