import { dark, light } from '../theme'

const isDark = true

export const useColors = () => {
  return isDark ? dark : light
}
