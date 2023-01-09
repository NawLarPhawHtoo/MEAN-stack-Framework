export interface Post {
    id: number,
    category_id: number,
    created_user_id: string,
    title: string,
    content: string,
    description: string,
    author: string,
    references: string,
    image: string,
    createdAt: Date,
    updatedAt: Date
  }