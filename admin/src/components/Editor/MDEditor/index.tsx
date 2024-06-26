import { Editor as BytemdEditor } from '@bytemd/react'
import 'bytemd/dist/index.min.css'
import zh_Hans from 'bytemd/locales/zh_Hans.json'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import styles from './style.less'

export default ({ value, onChange }) => {
  const modifyViewContent = () => {
    return {
      viewerEffect({ markdownBody }) {},
    }
  }
  return (
    <div className={styles.editor}>
      <BytemdEditor
        mode="split"
        locale={zh_Hans}
        value={value}
        plugins={[gfm(), highlight(), modifyViewContent()]}
        onChange={onChange}
      />
    </div>
  )
}
