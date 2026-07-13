import { validateFileSize } from '@/utils/validations/file'
import { mixed, object, ref, string } from 'yup'

export const profileValidations = object({
  email: string().email().required().label('Email'),
  name: string().required().label('Name'),
  role: string().required().label('Role'),
})

export const accountValidations = object({
  avatarImg: mixed().test(
    'fileSize',
    'File too big, can\'t exceed 800KB',
    validateFileSize(800),
  ).label('Avatar Image'),
  email: string().email().required().label('Email'),
  name: string().required().label('Name'),
  role: string().required().label('Role'),
})

export const createAccountValidations = object({
  avatarImg: mixed().test(
    'fileSize',
    'File too big, can\'t exceed 800KB',
    validateFileSize(800),
  ).label('Avatar Image'),
  email: string().email().required().label('Email'),
  name: string().required().label('Name'),
  role: string().required().label('Role'),
  password: string().required().label('Password'),
  passwordConfirmation: string().required().label('Confirm Password').oneOf(
    [ref('password'), ''], 'Passwords must match',
  ),
})

export const changePasswordValidations = object({
  currentPassword: string().required().label('Current Password'),
  newPassword: string().required().label('New Password'),
  confirmPassword: string()
    .required()
    .oneOf([ref('newPassword'), ''], 'Passwords must match')
    .label('Confirm Password'),
})
