import { AnyAction } from 'redux'
import { createActionType } from '@reducers/utils'

const PREFIX = '@USER/'

export const GetUserActionType = createActionType(PREFIX + 'GET_USER')

export const getUser = (): AnyAction => ({
  type: GetUserActionType.start,
})

export const getUserSuccess = (name: string) => ({
  type: GetUserActionType.success,
  name,
})

export const getUserFailed = (error: any) => ({
  type: GetUserActionType.failed,
  error,
})
