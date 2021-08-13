import { useIntl } from 'react-intl'

import useStyles from '../styles'
import messages from '../messages'

interface Props {
  name: string
}

function Hello({ name }: Props) {
  const classes = useStyles()
  const { formatMessage } = useIntl()

  return (
    <div className={classes.home}>
      <div>{name}</div>
      <div>{formatMessage(messages.welcome)}</div>
    </div>
  )
}

export default Hello
