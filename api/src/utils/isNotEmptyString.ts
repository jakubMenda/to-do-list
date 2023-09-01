import {
    ValidationOptions,
    registerDecorator,
    isString,
    isNotEmpty,
    ValidationArguments,
  } from 'class-validator'
  
  export function IsNotEmptyString(validationOptions?: ValidationOptions) {
    return (object: unknown, propertyName: string) => {
      registerDecorator({
        name: 'isNotEmptyString',
        target: object.constructor,
        options: validationOptions,
        validator: {
          validate: (value: unknown): boolean =>
            isString(value) && isNotEmpty(value.trim()),
  
          defaultMessage: (validationArguments?: ValidationArguments): string =>
            `${validationArguments.property} should not be an empty string`,
        },
        propertyName,
      })
    }
  }