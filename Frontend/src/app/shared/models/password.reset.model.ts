export interface PasswordReset {
  id: number,
  email: string,
  token: string,
  createdAt: Date,
  updatedAt: Date
}