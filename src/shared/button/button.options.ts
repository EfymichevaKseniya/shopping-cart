import { ProductItem } from '@/store/store.options'
import { HTMLAttributes, PropsWithChildren } from 'react'

export type ButtonP = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    title?: string
    textClassname?: string
    onClick?: () => void
  }
>
