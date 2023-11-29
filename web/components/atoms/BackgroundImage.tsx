import { memo } from 'react'

interface IBackgroundImagePropTypes {
  path: string,
  repeat?: boolean,
  cover?: true,
  center?: true,
}

const BackgroundImage = ({
  path,
  repeat,
  cover,
  center
}: IBackgroundImagePropTypes) => {
  return (
    <div className='w-full h-full absolute z-10 top-0 left-0' style={{
      backgroundImage: `url(${path})`,
      backgroundRepeat: repeat ? 'repeat' : 'no-repeat',
      backgroundSize: cover ? 'cover' : 'auto',
      backgroundPosition: center ? 'center' : 'auto',
    }}/>
  )
}

export default memo(BackgroundImage);
