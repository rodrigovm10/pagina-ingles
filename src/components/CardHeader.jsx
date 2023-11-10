import { CardHeader as CardHeaderCard, Text } from '@chakra-ui/react'

export function CardHeader() {
  return (
    <CardHeaderCard>
      <Text opacity={0.7}>
        The passive voice is used when we want to give more importance to the action and not to the one who performed it;
        <span style={{ fontWeight: 700 }}> we use the passive voice when we want to give more importance to the action and not to the one who performed it, we use the passive voice.</span>
      </Text>
    </CardHeaderCard>
  )
}
