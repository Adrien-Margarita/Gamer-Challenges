export interface IEmailTemplate {
  subject: string;
  html: string;
  headers: Record<string, string>;
}