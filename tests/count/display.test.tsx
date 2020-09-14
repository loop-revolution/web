import { render, findFirstText } from '../testUtils'
import { CountDisplay } from '../../components/count/CountDisplay'

describe('count display', () => {
  test('display should show number', async () => {
    render(<CountDisplay count={10} />)
    expect(await findFirstText('10')).toBeInTheDocument()
  })
  test('display should show loading', async () => {
    render(<CountDisplay />)
    expect(await findFirstText('Loading', { exact: false })).toBeInTheDocument()
  })
})
