import { object, string } from 'zod';

export const signInSchema = object({
  email: string().email('Email is invalid'),
  password: string()
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});


export const signUpSchema = object({
  firstName: string()
    .max(32, 'First name must be less than 100 characters'),
  lastName: string().max(32, 'Last name must be less than 100 characters'),
  email: string().email('Email is invalid'),
  password: string()
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  role: string().nonempty('Please confirm your password'),
})
