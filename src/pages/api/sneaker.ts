// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '@/lib/mongodb';
import Sneaker from '@/models/Sneaker';
import { SneakerProps } from '@/interfaces/sneaker.interface';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SneakerProps[]>
) {
  const data: SneakerProps[] = [
    {
      name: 'Nike LeBron NXXT',
      description: 'SKU: DR8784-101',
      rating: 5,
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4f262c8a-5347-4de3-a65f-1264f0464249/lebron-nxxt-gen-basketball-shoes-VShP8m.png',
      sneakerType: 'Outdoor',
      traction: 55,
      cushion: 15,
      material: 99,
      support: 70,
      fit: 40,
      url: 'https://www.nike.com.br/lebron-nxxt-gen-025487.html',
    },
    {
      name: 'Air Jordan 37 Low',
      description: 'DQ4122-007',
      rating: 5,
      image:
        'https://d2r9epyceweg5n.cloudfront.net/stores/001/038/770/rte/ipad_air-jordan-37-low-white-black-siren-red.jpeg',
      sneakerType: 'Indoor',
      traction: 80,
      cushion: 50,
      material: 100,
      support: 90,
      fit: 80,
      url: 'https://www.nike.com.br/air-jordan-37-low-025978.html#pid7',
    },
    {
      name: 'Nike Cosmic Unity 2',
      description: 'DH1537-102',
      rating: 5,
      image:
        'https://ess-oss.xyz/ossimg/sh1111111111/20221219/64675543848d4a5cb8233e8f4172e539.jpg',
      sneakerType: 'Indoor',
      traction: 50,
      cushion: 30,
      material: 55,
      support: 85,
      fit: 40,
      url: 'https://www.nike.com.br/tenis-cosmic-unity-2-023091.html',
    },
  ];
  res.status(200).json(data);
}
