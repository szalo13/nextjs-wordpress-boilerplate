import { memo } from 'react'
import classNames from 'classnames';
import styles from './NoiseOverlay.module.css'

interface IGlitchOverlayPropTypes {
  
}

/**
 * Necessary to use set correct glitch overlay images in styles
 */
const NoiseOverlay = ({
  
}: IGlitchOverlayPropTypes) => {
  return (
    <div className={classNames(styles['glitch-overlay-wrapper'])}>
      <div className={classNames(styles['noise-1'])} />
      <div className={classNames(styles['noise-2'])} />
    </div>
  )
}

export default memo(NoiseOverlay);
