import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import { getImageUrl } from 'utils/getImageUrl'
import { Author } from 'types/api'

import * as S from './styles'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}

const ProfileCard: React.FC<Author> = ({
  name,
  role,
  photo,
  description,
  socialLinks
}) => (
  <S.Card key={name}>
    <S.Image
      src={getImageUrl(photo.url)}
      loading="lazy"
      alt={photo.alternativeText}
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.title}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
