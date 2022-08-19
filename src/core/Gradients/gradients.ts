import { Colors } from '../Colors/colors'
export type GradientTypes = keyof typeof Gradients

export const Gradients = {
  blue: 'radial-gradient(100% 3600% at 0% 50%, #0D2C81 0%, #28D0ED 100%)',
  red_deep: `radial-gradient(100% 3600% at 0% 50%, ${Colors.purple} 0%, #EF3340 100%)`
}
