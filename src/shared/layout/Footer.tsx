import { CURRENT_YEAR } from "@/constants";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <p><strong>Kenny Nguyen</strong> </p>
                <p>&copy; {CURRENT_YEAR}. Built with Next.js & Deployed on Cloudflare.</p>
            </div>
        </footer>
    );
}
