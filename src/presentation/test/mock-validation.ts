import { type Validation } from '../protocols/validation'

export class ValidationSpy implements Validation {
  errorMessage: string = ''
  fieldName: string = ''
  fieldValue: string = ''

  validate(fieldName: string, fieldValue: string) {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}
