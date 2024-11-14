import { useState, useEffect, useMemo } from 'react';
import { FirmnessSlider } from './components/FirmnessSlider';
import { BerryCard } from './components/BerryCard';
import { Search } from './components/Search';
import { FIRMNESS, FIRMNESS_ORDER, FIRMNESS_IDS } from './constants';
import { useDebounce } from './hooks';
import { IBerry } from './types';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [berries, setBerries] = useState<IBerry[]>([]);
  const [firmness, setFirmness] = useState<FIRMNESS>(FIRMNESS.ALL);
  const [search, setSearch] = useState<string | undefined>();
  const debouncedSearch = useDebounce(search, 500);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleFirmnessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const firmnessId = Number(event.target.value);
    const firmness = FIRMNESS_IDS[firmnessId];
    setFirmness(firmness);
  }

  useEffect(() => {
    const getBerries = async () => {
      try {
        setLoading(true);
        const berriesListResponse = await fetch('https://pokeapi.co/api/v2/berry?limit=100');
        if (!berriesListResponse.ok) {
          throw new Error('Network response error');
        }
        const { results: berriesIds } = await berriesListResponse.json();
        const berries = berriesIds.map(async (id: { name: string }) => {
          const berryResponse = await fetch(`https://pokeapi.co/api/v2/berry/${id.name}`);
          if (!berryResponse.ok) {
            throw new Error('Network response error');
          }
          const response = await berryResponse.json();
          return response;
        })
        const berriesResponse = await Promise.all(berries);
        setBerries(berriesResponse);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false)
      }
    };

    getBerries();
  }, []);

  const sortedBerries = useMemo(() => {
    let processedBerries = berries;
    if (firmness !== FIRMNESS.ALL) {
      processedBerries = processedBerries.filter((berry: IBerry) =>
        berry.firmness.name === firmness
      );
    }
    if (debouncedSearch) {
      processedBerries = processedBerries.filter((berry: IBerry) => 
        berry.name.match(debouncedSearch)
      )
    }
    processedBerries = processedBerries.sort((a: IBerry, b: IBerry) => {
      const firmnessComparison = FIRMNESS_ORDER[a.firmness.name] - FIRMNESS_ORDER[b.firmness.name];
      if (firmnessComparison !== 0) return firmnessComparison;
      return a.name.localeCompare(b.name);
    });

    return processedBerries;
  }, [berries, firmness, debouncedSearch]);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <header className="p-8">
        <h1 className="text-2xl text-center">Berries</h1>
      </header>
      <section className="grid grid-cols-4">
        <div className="col-span-1 p-4">
          <Search value={search} onChange={handleSearchChange}/>
          <FirmnessSlider value={firmness} onChange={handleFirmnessChange} />
        </div>
        <div className="col-span-2 flex flex-col p-4 mb-4">
          {loading 
            ? <div>Loading ...</div>
            : (
              <>
                {sortedBerries.map(berry =>
                  <BerryCard berry={berry}/>
                )}
              </>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
