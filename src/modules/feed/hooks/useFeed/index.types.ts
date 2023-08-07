export type PostData = {
  id: number;
  content: string;
  createdTime: number;
  likes: number[];

  authorID: number;
  authorName: string;
  authorUsername: string;
  isNew?: boolean;
}