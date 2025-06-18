// model user {
//   user_id       String @id @db.Uuid
//   pseudonym     String @unique
//   email         String @unique
//   password_hash String
//   avatar_url    String ?
//   created_at    DateTime ? @default (now()) @db.Timestamp(6)
//   updated_at    DateTime ? @default (now()) @db.Timestamp(6)
// }

export interface IUser {
  role: any;
  user_id: string;
  pseudonym: string;
  email: string;
  password_hash: string;
  avatar_url?: string;
  role_id: number;
}
