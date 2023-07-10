import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Inter } from 'next/font/google';

import { api } from '@/services/api';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SneakerCard from './components/SneakerCard';
import { SneakerProps } from '@/interfaces/sneaker.interface';
import SelectInput from './components/SelectInput';
import Pagination from './components/Pagination';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [sneakersData, setSneakersData] = useState<SneakerProps[]>([]);

  useEffect(() => {
    api
      .get('api/sneaker')
      .then((response) => {
        setSneakersData(response.data);
      })
      .catch((error) => {
        toast.error('Não foi possível exibir os tênis');
      });
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className} bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%`}
    >
      <Navbar />
      <div className='flex w-full justify-end'>
        <SelectInput />
      </div>
      <div className='flex flex-row gap-5'>
        {sneakersData.map((sneaker, index) => (
          <SneakerCard sneaker={sneaker} key={index} />
        ))}
      </div>
      <div>
        <Pagination />
      </div>
      <Footer />
    </main>
  );
}
