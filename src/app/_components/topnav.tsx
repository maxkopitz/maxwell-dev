import Link from "next/link";

const navItems = {
    '/': {
        name: 'home',
    },
    'work': {
        name: 'work',
    },
    '/blog': {
        name: 'blog',
    },
    '/dashboard': {
        name: 'dashboard',
    },
};

const TopNav = (): React.ReactNode => {
    return (
        <nav className="flex w-full items-center justify-between text-l font-regular mb-4">
            <div className="flex flex-row items-center gap-4">
                {Object.entries(navItems).map(([path, { name }]) => {
                    return (
                        <Link
                            key={path}
                            href={path}
                            className="transition-all text-white flex align-middle relative"
                        >
                            {name}
                        </Link>
                    );
                })}
            </div>
        </nav>

    )
};

export default TopNav;
