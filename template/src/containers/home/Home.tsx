import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StoreState } from '@reducers/index'
import { getUser } from '@reducers/user/userActions'
import Hello from './components/Hello'

function HomeContainer() {
  const dispatch = useDispatch()
  const name = useSelector((state: StoreState) => state.user.name)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  return <Hello name={name} />
}

export default HomeContainer
