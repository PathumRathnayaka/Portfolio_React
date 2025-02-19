export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto text-center px-4">
                <div className="text-xl md:text-2xl font-bold mb-4">
                    <a href="#" className="text-white hover:text-teal-400">
                        Expand<span className="text-teal-400">.</span>
                    </a>
                </div>


                <ul className="flex flex-wrap justify-center gap-4 md:space-x-6 mb-4">
                    <li><a href="#" className="hover:text-teal-400 transition">Facebook</a></li>
                    <li><a href="#" className="hover:text-teal-400 transition">Twitter</a></li>
                    <li><a href="#" className="hover:text-teal-400 transition">Instagram</a></li>
                    <li><a href="#" className="hover:text-teal-400 transition">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-teal-400 transition">GitHub</a></li>
                </ul>

                <p className="text-gray-400 text-xs md:text-sm">
                    All rights reserved | This is made <span className="text-teal-400">by Pathum Rathnayaka</span>
                </p>
            </div>
        </footer>
    );
}
