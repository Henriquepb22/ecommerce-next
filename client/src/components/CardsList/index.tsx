import { PaymentCard } from 'components/PaymentOptions'
import Heading from 'components/Heading'

import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
