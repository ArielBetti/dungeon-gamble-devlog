import { queryGetPost } from '@/queries/queryGetPost';
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button';
import { ROUTE } from '@/core/routes';

const Post = () => {
  const navigate = useNavigate();
  const { number } = useParams();
  const { data } = queryGetPost(Number(number ?? 0));

  return (
    <div className='container px-4 max-w-2xl pb-20'>
      <Button className='p-0 mb-5' variant="link" onClick={() => navigate(ROUTE.HOME)}>
        Voltar para o inicio
      </Button>
      <h1 className='text-sm pb-5'>{data?.title}</h1>
      <div className='prose dark:prose-invert'>
        <ReactMarkdown
          children={data?.body}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  )
}

export default Post