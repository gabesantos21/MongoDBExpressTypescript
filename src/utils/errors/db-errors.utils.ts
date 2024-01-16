interface DatabaseError {
  code: string;
  message: string;
}

export const DB_ERRORS: DatabaseError[] = [
  {
    code: 'DocumentNotFoundError',
    message: 'Received DocumentNotFoundError.',
  },
  {
    code: 'CastError',
    message: 'Received CastError.',
  },
  {
    code: 'ValidationError',
    message: 'Received ValidationError.',
  },
  {
    code: 'ValidatorError',
    message: 'Received ValidatorError.',
  },
  {
    code: 'VersionError',
    message: 'Received VersionError.',
  },
  {
    code: 'ParallelSaveError',
    message: 'Received ParallelSaveError.',
  },
  {
    code: 'OverwriteModelError',
    message: 'Received OverwriteModelError.',
  },
  {
    code: 'MissingSchemaError',
    message: 'Received MissingSchemaError.',
  },
  {
    code: 'MongooseServerSelectionError',
    message: 'Received MongooseServerSelectionError.',
  },
  {
    code: 'DivergentArrayError',
    message: 'Received DivergentArrayError.',
  },
  {
    code: 'StrictModeError',
    message: 'Received StrictModeError.',
  },
  {
    code: 'StrictPopulateError',
    message: 'Received StrictPopulateError.',
  },
];
