import { getPost } from '@/services/graphql/queries'
import { useQuery } from '@tanstack/react-query'

export const queryGetPost = (number: number) => {
  return useQuery({
    queryKey: ['issue'],
    queryFn: async () => {
      const { data } = await getPost(number);

      const result = {
        title: data.repository.issue.title,
        body: data.repository.issue.body,
      }

      return result;
    },
    refetchOnWindowFocus: false,
  },)
}
