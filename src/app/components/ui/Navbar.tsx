// src/app/components/ui/Navbar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { Avatar } from './Avatar';

interface NavbarProps {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  } | null;
  onSignIn?: () => void;
  onSignOut?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onSignIn,
  onSignOut,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary-600">Just Like Me</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/marketplace"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
              >
                Marketplace
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <div className="relative">
                  <button
                    type="button"
                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <Avatar
                      src={user.image}
                      alt={user.name || 'User'}
                      size="sm"
                      fallback={user.name}
                    />
                  </button>
                  {isMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <div className="px-4 py-2 border-b border-neutral-200">
                        <p className="text-sm font-medium text-neutral-900">{user.name}</p>
                        <p className="text-xs text-neutral-500 truncate">{user.email}</p>
                      </div>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        Your Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={onSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" onClick={onSignIn}>
                  Sign in
                </Button>
                <Link href="/register">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/marketplace"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-800"
            >
              Marketplace
            </Link>
            <Link
              href="/how-it-works"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-800"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-800"
            >
              Pricing
            </Link>
          </div>
          {user ? (
            <div className="pt-4 pb-3 border-t border-neutral-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Avatar
                    src={user.image}
                    alt={user.name || 'User'}
                    size="md"
                    fallback={user.name}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-neutral-800">{user.name}</div>
                  <div className="text-sm font-medium text-neutral-500">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800"
                >
                  Your Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800"
                >
                  Settings
                </Link>
                <button
                  onClick={onSignOut}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-neutral-200">
              <div className="flex items-center justify-between px-4">
                <Button variant="ghost" size="sm" onClick={onSignIn} className="w-full mr-2">
                  Sign in
                </Button>
                <Link href="/register" className="w-full ml-2">
                  <Button variant="primary" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
