import { AnyAction } from 'redux'
import { ofType } from 'redux-observable'
import { Observable, from, of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'

import ajax from '@utils/ajax'
import { GetUserResponse } from '@models/userModel'
import { GetUserActionType, getUserFailed, getUserSuccess } from '@reducers/user/userActions'

const getUser = () => ajax.get<GetUserResponse>('getUser')

const getUserEpic = (action$: Observable<AnyAction>) =>
  action$.pipe(
    ofType(GetUserActionType.start),
    exhaustMap(() =>
      from(getUser()).pipe(
        map(res => getUserSuccess(res.data.name)),
        catchError(error => of(getUserFailed(error))),
      ),
    ),
  )

const userEpics = [getUserEpic]

export default userEpics
