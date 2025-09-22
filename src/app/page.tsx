import { headers } from 'next/headers';
import AddCompanyButton from './components/AddCompanyButton';
import MagicButton from './components/MagicButton';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
