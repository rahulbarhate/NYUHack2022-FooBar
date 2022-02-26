import { prescription } from './schemas'

export const getPrescriptions = async (): Promise<prescription[]> => {
  return [
    {
      name: 'Amoxicilllin 250 mg tablets',
      instruction: '2 each day',
      price: 23,
    },
    {
      name: 'Amoxicilllin 250 mg tablets x2',
      instruction: '2 each day',
      price: 23,
    },
    {
      name: 'Amoxicilllin 250 mg tablets x3',
      instruction: '2 each day',
      price: 23,
    },
  ]
}