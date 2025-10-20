import { historyData } from "@/lib/mock-history-data";
import TimelineSection from "@/components/history/TimelineSection";
import PopulationChart from "@/components/history/PopulationChart";
import DiasporaMap from "@/components/history/DiasporaMap";
import TraditionsSection from "@/components/history/TraditionsSection";
import HistoricalGallery from "@/components/history/HistoricalGallery";
import KeyFigures from "@/components/history/KeyFigures";

export default function HistoryPage() {
  return (
    <div className="container py-6 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
        {/* Hero */}
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {historyData.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-primary font-medium">
            {historyData.hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4 md:px-0">
            {historyData.hero.description}
          </p>
        </div>

        {/* Timeline */}
        <TimelineSection timeline={historyData.timeline} />

        {/* Population Chart */}
        <PopulationChart
          title={historyData.population.title}
          description={historyData.population.description}
          data={historyData.population.data}
        />

        {/* Diaspora Map */}
        <DiasporaMap
          title={historyData.locations.title}
          description={historyData.locations.description}
          data={historyData.locations.data}
        />

        {/* Cultural Heritage */}
        <TraditionsSection
          title={historyData.traditions.title}
          description={historyData.traditions.description}
          items={historyData.traditions.items}
        />

        {/* Key Figures */}
        <KeyFigures
          title={historyData.keyFigures.title}
          description={historyData.keyFigures.description}
          people={historyData.keyFigures.people}
        />

        {/* Historical Gallery */}
        <HistoricalGallery
          title={historyData.gallery.title}
          images={historyData.gallery.images}
        />
      </div>
    </div>
  );
}
