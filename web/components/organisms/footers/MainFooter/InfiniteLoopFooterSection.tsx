import { memo } from 'react'
import InfiniteLoopAnimation from '../../../atoms/animations/InfiniteLoopAnimation.component';

interface IInfiniteLoopFooterSectionPropTypes {
  
}

const imgPath = "/images/lets-remote-since.svg";
const imgAlt = 'We are working since 2017';

const InfiniteLoopFooterSection = ({
  
}: IInfiniteLoopFooterSectionPropTypes) => {
  return (
    <div className='pt-32'>
      <InfiniteLoopAnimation>
        <img key={imgPath} src={imgPath} alt={imgAlt} />
      </InfiniteLoopAnimation>
    </div>
  )
}

export default memo(InfiniteLoopFooterSection);
