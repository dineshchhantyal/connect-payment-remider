interface User {
  id: number;
  email: string;
  name?: string;
  payments?: Payment[];
  profile?: Profile;
}
