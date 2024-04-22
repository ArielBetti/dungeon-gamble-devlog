import { queryGetPost } from '@/queries/queryGetPost';
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button';
import { ROUTE } from '@/core/routes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { normalizeDateWithYear } from '@/lib/utils';
import Loading from '@/components/composable/Loading';

const Post = () => {
  const navigate = useNavigate();
  const { number } = useParams();
  const { data, isLoading, isFetching } = queryGetPost(Number(number ?? 0));

  if (isLoading || isFetching || !data) {
    return <Loading />
  }

  if (data) {
    return (
      <div className='container px-4 max-w-2xl pb-20'>
        <Button className='p-0 mb-5' variant="link" onClick={() => navigate(ROUTE.HOME)}>
          Voltar para o inicio
        </Button>
        <div className='prose dark:prose-invert'>
          <ReactMarkdown
            children={data?.body}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <Separator className="my-10" />
        <div className='flex items-center justify-start gap-2 pb-4'>
          <Avatar className="w-14 h-14">
            <AvatarImage src={data?.author.img} />
            <AvatarFallback>DGG</AvatarFallback>
          </Avatar>
          <div className='flex flex-col items-start justify-center'>
            <p className='text-xs'>Escrito por</p>
            <p>{data?.author.name}</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start text-xs gap-2">
          <div className="bg-hero-pattern bg-center bg-contain w-full overflow-hidden rounded-sm">
            <div className="flex flex-col justify-start items-start border w-full p-2 bg-background/90">
              <h1 className='text-sm py-2'>{data?.title}</h1>
              <Separator />
              <div className='flex items-end justify-start gap-2 min-h-10'>
                <span>Escrito em: <p>{normalizeDateWithYear(data.createdAt)}</p></span>
                <Separator orientation="vertical" className='h-12' />
                <span>Atualizado em: <p>{normalizeDateWithYear(data.updatedAt)}</p></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <div>404</div>
}

export default Post