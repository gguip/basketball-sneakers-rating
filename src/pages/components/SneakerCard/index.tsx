import { SneakerProps } from '@/interfaces/sneaker.interface';
import Star from '../Star';
import Badge from '../Badge';
import Button from '../Button';
import Progress from '../Progress';

interface SneakerCardProps {
  sneaker: SneakerProps;
}

const SneakerCard = ({ sneaker }: SneakerCardProps) => {
  return (
    <div className='card card-side bg-base-100 shadow-xl'>
      <figure className='max-h-[1000px] max-w-[200px] px-3'>
        <img className='rounded-md' src={sneaker.image} alt='Sneaker image' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{sneaker.name}</h2>
        <div className='divider mb-0 mt-0'></div>
        <p>{sneaker.description}</p>
        <div className='rating'>
          <Star rating={sneaker.starRating} />
        </div>
        <div className='flex flex-row justify-start gap-2'>
          {sneaker.sneakerType.map((sneakerType, index) => (
            <Badge sneakerType={sneakerType} key={index} />
          ))}
        </div>

        <div className='divider mb-0 mt-0' />
        <div>
          <Progress stats={sneaker.stats} />
        </div>
        <div className='card-actions mt-2 justify-center'>
          <Button url={sneaker.url} text='Comprar' />
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;
