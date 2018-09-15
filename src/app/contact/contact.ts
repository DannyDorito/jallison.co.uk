export class Contact {
  email: string;
  subject: string;
  message: string;
  constructor (
    _email: string,
    _subject: string,
    _message: string
  ) {
    this.email = _email;
    this.subject = _subject;
    this.message = _message;
  }
}
