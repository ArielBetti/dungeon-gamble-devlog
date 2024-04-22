import { getPosts } from '@/services/graphql/queries'
import { useQuery } from '@tanstack/react-query'

export const queryGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const result = await getPosts;

      const posts = result.data.repository.issues.edges.map((issue) => ({
        title: issue.node.title,
        number: issue.node.number,
        createdAt: issue.node.createdAt,
        updatedAt: issue.node.updatedAt,
      }));

      return { posts: posts };
    },
    refetchOnWindowFocus: false,
  },)
}
