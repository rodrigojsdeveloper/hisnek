import { PropsWithChildren } from 'react'
import { Text } from 'react-native'

import { styles } from './style'

export const Description = ({ children }: PropsWithChildren) => {
  return (
    <Text style={styles.description}>{children}</Text>
  )
}
