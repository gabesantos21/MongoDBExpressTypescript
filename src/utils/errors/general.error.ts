export abstract class GeneralError extends Error {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  supportingError: any;

  constructor(message: string, supportingError: any) {
    super();
    Object.setPrototypeOf(this, GeneralError.prototype);
    this.message = message;
    this.supportingError = supportingError;
  }

  abstract getCode(): number;
}
