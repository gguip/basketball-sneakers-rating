// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { SneakerProps } from '@/interfaces/sneaker.interface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: SneakerProps[] = [
    {
      name: 'Nike LeBron NXXT',
      description: 'SKU: DR8784-101',
      starRating: 5,
      image:
        'https://image.goat.com/transform/v1/attachments/product_template_pictures/images/084/466/413/original/DR8788_900.png.png?action=crop&width=750',
      sneakerType: ['Outdoor'],
      stats: [
        {
          name: 'traction',
          value: 55,
        },
        {
          name: 'cushion',
          value: 15,
        },
        {
          name: 'material',
          value: 99,
        },
        {
          name: 'support',
          value: 70,
        },
        {
          name: 'fit',
          value: 40,
        },
      ],
      url: 'https://www.nike.com.br/lebron-nxxt-gen-025487.html',
    },
    {
      name: 'Air Jordan 37 Low',
      description: 'DQ4122-007',
      starRating: 5,
      image:
        'https://www.thehoopsgeek.com/IMG/018124-air-jordan-37-low-dq4122-100_1170x1170.png',
      sneakerType: ['Indoor'],
      stats: [
        {
          name: 'traction',
          value: 80,
        },
        {
          name: 'cushion',
          value: 50,
        },
        {
          name: 'material',
          value: 100,
        },
        {
          name: 'support',
          value: 90,
        },
        {
          name: 'fit',
          value: 80,
        },
      ],
      url: 'https://www.nike.com.br/air-jordan-37-low-025978.html#pid7',
    },
    {
      name: 'Nike Cosmic Unity 2',
      description: 'DH1537-102',
      starRating: 5,
      image:
        'https://ess-oss.xyz/ossimg/sh1111111111/20221219/64675543848d4a5cb8233e8f4172e539.jpg',
      sneakerType: ['Indoor', 'Outdoor'],
      stats: [
        {
          name: 'traction',
          value: 50,
        },
        {
          name: 'cushion',
          value: 30,
        },
        {
          name: 'material',
          value: 55,
        },
        {
          name: 'support',
          value: 85,
        },
        {
          name: 'fit',
          value: 40,
        },
      ],
      url: 'https://www.nike.com.br/tenis-cosmic-unity-2-023091.html',
    },
  ];

  switch (req.method) {
    case 'GET':
      try {
        res.status(201).json({ success: true, data: data });
      } catch (error) {
        console.log('🚀 ~ file: sneaker.ts:113 ~ error:', error);
      }

    case 'POST':
      try {
        // const { data } = req.body;

        console.log('🚀 ~ file: sneaker.ts:120 ~ res:', res);
        res.status(201).json({ success: true, data: 1 });
      } catch (error) {
        console.log('🚀 ~ file: sneaker.ts:22 ~ handler ~ error:', error);
        res.status(400).json({ success: false });
      }
      break;
  }

  res.status(200).json(data);
}
