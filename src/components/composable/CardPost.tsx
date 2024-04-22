import { normalizeDateWithYear } from '@/lib/utils'
import scrollSpell from "../../assets/spellscroll.png";
import { Separator } from '../ui/separator';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/core/routes';

type TCardPost = {
  title: string,
  createdAt: string,
  updatedAt: string,
  number: number,
}

export const CardPost = ({
  createdAt,
  number,
  title,
  updatedAt
}: TCardPost) => {
  const navigation = useNavigate();

  return (
    <button onClick={() => navigation(`${ROUTE.POST}/${number}`)} className="flex items-start justify-start border rounded-sm pt-5 w-full gap-2 hover:text-primary">
      <img className="w-14" src={scrollSpell} alt="Ilustração de pergaminho antigo" />
      <div className='flex flex-col items-start justify-start '>
        <h2 className='font-semibold underline text-left'>{title}</h2>
        <div className='flex items-start justify-start gap-2 text-xs pt-2 h-16 max-h-28 text-left'>
          <div className='flex flex-col items-start justify-start pr-2 py-2'>
            <p>Escrito em</p>
            <p>{normalizeDateWithYear(new Date(createdAt))}</p>
          </div>
          <Separator orientation="vertical" />
          <div className='flex flex-col items-start justify-start py-2'>
            <p>Atualizado em</p>
            <p>{normalizeDateWithYear(new Date(updatedAt))}</p>
          </div>
        </div>
      </div>
    </button>
  )
}
