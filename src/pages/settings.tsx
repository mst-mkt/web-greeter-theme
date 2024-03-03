import { Toggle } from '../components/common/Toggle'
import { useConfigStore } from '../stores/configStore'

const Settings = () => {
  const { skipFirstPage, setSkipFirstPage } = useConfigStore()

  return (
    <div style={{ maxWidth: '64vmin', margin: '0 auto' }}>
      <Toggle
        label="最初の画面をスキップする"
        checked={skipFirstPage}
        onChange={setSkipFirstPage}
      />
    </div>
  )
}

export default Settings
