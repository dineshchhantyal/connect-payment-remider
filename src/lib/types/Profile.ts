interface Profile {
  id: number;
  bio: string;
  user: User;
  image?: string;
  createdAt: Date;
}
