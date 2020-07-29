import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import { SectionAboutUsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map(({ photo, name, role, description, socialLinks }) => (
        <ProfileCard
          key={name}
          name={name}
          role={role}
          image={getImageUrl(photo.url)}
          socialLinks={[...socialLinks]}
          description={description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
