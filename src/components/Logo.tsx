import Image from 'next/image';
import React from 'react'
import { LogoProps } from 'sanity'

const Logo = (props: LogoProps) => {
  const {renderDefault, title } = props;
  return (
    <div>
      <Image src="" height={50} width={50} alt="zultan logo" className="roounded-full" />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo