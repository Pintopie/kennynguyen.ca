import Link from "next/link";

const NAV_LINKS = [
    { href: "#projects", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
];

export default function NavBar() {
    return (
        <header className="site-nav" aria-label="Primary navigation">
            <div className="site-nav__inner">
                <Link href="/" className="site-nav__brand" aria-label="Kenny Nguyen, home">
                    <span>KN</span>
                    <span>Kenny Nguyen</span>
                </Link>

                <ul className="site-nav__links">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

                <Link className="nav-contact" href="#contact">
                    Contact
                </Link>
            </div>
        </header>
    );
}
