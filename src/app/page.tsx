import { headers } from 'next/headers';
import AddCompanyButton from './components/AddCompanyModal';

export default function Home() {
  console.log(headers());

  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
    </main>
  );
}
