export interface IGetPost {
  repository: PostRepository
}

export interface PostRepository {
  __typename: string
  issue: PostIssue
}

export interface PostIssue {
  __typename: string
  author: PostAuthor
  title: string
  body: string
  id: string
  createdAt: string
  updatedAt: string
}

export interface PostAuthor {
  __typename: string
  login: string
  avatarUrl: string
}


export interface IGetPosts {
  repository: Posts
}

export interface Posts {
  __typename: string
  issues: Issues
}

export interface Issues {
  __typename: string
  edges: PostsEdge[]
}

export interface PostsEdge {
  __typename: string
  node: PostsNode
}

export interface PostsNode {
  __typename: string
  number: number
  title: string
  id: string
  createdAt: string
  updatedAt: string
}
