import Image from 'next/image';
import React from 'react'
import { LogoProps } from 'sanity'

const Logo = (props: LogoProps) => {
  const {renderDefault, title } = props;
  return (
    <div>
      <Image src="" alt="" className="roounded-full" />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo