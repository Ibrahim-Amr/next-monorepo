const navItems = [
  { href: '/airport-transfers', label: 'Airport Transfers' },
  { href: '/flights', label: 'Flights' },
  { href: '/car-rental', label: 'Car Rental' },
  { href: '/e-visa', label: 'E-visa' },
];

export function MainNav() {
  return (
    <nav className='flex items-center space-x-6'>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-primary`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
