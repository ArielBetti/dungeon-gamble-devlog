import { getPost } from '@/services/graphql/queries'
import { useQuery } from '@tanstack/react-query'

export const queryGetPost = (number: number) => {
  return useQuery({
    queryKey: ['issue'],
    queryFn: async () => {
      const { data } = await getPost(number);

      const result = {
        createdAt: data.repository.issue.createdAt,
        updatedAt: data.repository.issue.updatedAt,
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
