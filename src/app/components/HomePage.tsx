import Footer from './HomePage/Footer';
import Hero from './HomePage/Hero';
import PrimaryFeatures from './HomePage/PrimaryFeatures';
import SecondaryFeatures from './HomePage/SecondaryFeatures';
import StatsSection from './HomePage/StatsSection';

export default function HomePage() {
    return (
        <div>
            <Hero />
            <PrimaryFeatures />
            <SecondaryFeatures />
            <StatsSection />
            <Footer />
        </div>
    );
}
