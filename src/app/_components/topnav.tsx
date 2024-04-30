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
        name: 'Dashboard',
    },
};

const TopNav = (): React.ReactNode => {
    return (
        <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
            <div className="flex flex-row items-center gap-4">
                {Object.entries(navItems).map(([path, { name }]) => {
                    return (
                        <Link
                            key={path}
                            href={path}
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
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
