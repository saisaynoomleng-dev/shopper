'use client';

import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Form from 'next/form';
import { Button } from './ui/button';
import {
  FaBasketShopping,
  FaCartArrowDown,
  FaMagnifyingGlass,
} from 'react-icons/fa6';

const Header = () => {
  const { user } = useUser();
  return (
    <header className="flex justify-between items-center px-5 py-3">
      <div>
        <Link href="/" className="font-bold">
          Shopper
        </Link>
      </div>

      <Form action="/search" className="flex gap-3">
        <input
          type="text"
          placeholder="search..."
          name="query"
          className="border indent-3"
        />
        <Button type="submit">
          <FaMagnifyingGlass />
        </Button>
      </Form>

      <nav role="navigation">
        <ul className="flex gap-3 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href="/basket"
              className="flex gap-1 rounded-sm items-center bg-blue-600 text-white p-2"
            >
              <FaBasketShopping /> My Basket
            </Link>
          </li>
          <li>
            {user && (
              <Link
                href="/order"
                className="flex gap-1 rounded-sm items-center bg-blue-600 text-white p-2"
              >
                <FaCartArrowDown /> My Order
              </Link>
            )}
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
