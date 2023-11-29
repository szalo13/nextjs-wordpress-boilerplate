import { ReactNode, memo } from 'react'

interface IInfiniteLoopPropTypes {
  children: ReactNode
}

const InfiniteLoopAnimation = ({
  children,
}: IInfiniteLoopPropTypes) => {
  return (
    <ul className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      {Array.from(new Array(2)).map((key, idx) => (
        <li key={idx} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <div>{children}</div>
        </li>
      ))}
    </ul>
  )
}

export default memo(InfiniteLoopAnimation);
