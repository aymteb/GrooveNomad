import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants/device'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { View as RNView, StyleSheet, ViewProps } from 'react-native'
import Animated, { SharedValue } from 'react-native-reanimated'
import { Edges, SafeAreaView } from 'react-native-safe-area-context'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

interface Props extends ViewProps {
  children?: React.ReactNode
  linearBackground?: boolean
  linearBackgroundColors?: string[] | SharedValue<string[]>
  edges?: Edges
  safeAreaDisabled?: boolean
}

export const View: FC<Props> = ({
  children,
  linearBackground,
  linearBackgroundColors,
  edges = ['top', 'left', 'right', 'bottom'],
  safeAreaDisabled,
  style,
  ...props
}) => {
  const Wrapper = safeAreaDisabled ? RNView : SafeAreaView

  return (
    <RNView {...props} style={styles.container}>
      {linearBackground && (
        <AnimatedLinearGradient
          // @ts-ignore
          colors={linearBackgroundColors ?? ['#000000', '#000000']}
          locations={[0, 0.2, 0.5]}
          style={styles.background}
        />
      )}
      <Wrapper edges={edges} style={[styles.container, style]}>
        {children}
      </Wrapper>
    </RNView>
  )
}

const styles = StyleSheet.create({
  background: {
    height: DEVICE_HEIGHT,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: DEVICE_WIDTH,
  },
  container: {
    flex: 1,
  },
})
