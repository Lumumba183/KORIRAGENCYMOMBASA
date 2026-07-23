import { Link } from "react-router";
import { Compass, ArrowRight } from "lucide-react";
import { useSeo } from "@/components/Seo";

export default function NotFound() {
  useSeo("Page Not Found | Korir Agency");
  return (
    <main className="flex min-h-[70vh] items-center bg-navy-950">
      <div className="container-lux py-20 text-center">
        <Compass className="mx-auto h-16 w-16 text-gold-400" />
        <h1 className="mt-6 font-display text-5xl font-bold text-white sm:text-6xl">4<span className="text-gold-400">0</span>4</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          Looks like this tide went out. The page you're looking for doesn't exist — but the coast is still right here.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-gold">Back to Home <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/properties" className="btn-outline-light">Browse Properties</Link>
        </div>
      </div>
    </main>
  );
}
