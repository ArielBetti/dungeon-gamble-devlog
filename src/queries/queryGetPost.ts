import { getPost } from '@/services/graphql/queries'
import { useQuery } from '@tanstack/react-query'

export const queryGetPost = (number: number) => {
  return useQuery({
    queryKey: ['issue'],
    queryFn: async () => {
      const { data } = await getPost(number);

      const result = {
        createdAt: data?.repository?.issue?.createdAt ? new Date(data.repository.issue.createdAt) : new Date(),
        updatedAt: data?.repository?.issue?.updatedAt ? new Date(data.repository.issue.updatedAt) : new Date(),
        author: {
          img: data.repository.issue.author.avatarUrl,
          name: data.repository.issue.author.login,
        },
        title: data.repository.issue.title,
        body: data.repository.issue.body,
      }

      return result;
    },
    refetchOnWindowFocus: false,
  },)
}
