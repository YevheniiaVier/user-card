import { LogoImg, LogoWrapper } from './Logo.styled'

const Logo = ({imgPath, text}) => {
  return (
    <LogoWrapper>
      <LogoImg src={imgPath} alt={text}/>
    </LogoWrapper>
  )
}

export default Logo
