import { RequiredKeys, isFalsy } from 'utility-types'
import { SignupFormModel, Form } from '../models/signup-form'

const form = {} as Form;

type RequiredFormFields = RequiredKeys<SignupFormModel>

const isFormValid = (fields: RequiredFormFields[]) => fields.some(field => !isFalsy(form[field].value))

isFormValid(['name', 'email'])