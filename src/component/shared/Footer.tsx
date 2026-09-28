const Footer = () => {
    return (
        <footer className="border-t border-gray-800 bg-[#08090b] px-6 py-5">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-lime-400">
                        ◆
                    </span>

                    <span className="text-xs font-bold tracking-wide text-white">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-[8px] text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;