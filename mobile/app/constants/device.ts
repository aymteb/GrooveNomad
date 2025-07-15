import { Dimensions, Platform } from 'react-native'

export const IS_ANDROID = Platform.OS === 'android'
export const IS_IOS = Platform.OS === 'ios'

export const IS_LITTLE_DEVICE = Dimensions.get('screen').height <= 667

export const DEVICE_HEIGHT = Dimensions.get('screen').height
export const DEVICE_WIDTH = Dimensions.get('screen').width
