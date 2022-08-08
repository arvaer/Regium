import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {  PhotoGrid } from '../components/grid-item'

import guyonele from '../public/images/photos/guyonele.jpg'
import oldguy from '../public/images/photos/oldguy.jpg'
import elephant1 from '../public/images/photos/Elephant.JPG'
import elephant2 from '../public/images/photos/Elephanto.JPG'
import monk from '../public/images/photos/Monk.jpg'
import rock from '../public/images/photos/brokenrock.jpg'
import tuaggi from '../public/images/photos/Tuaggi.jpeg'
import bridge from '../public/images/photos/bridge.JPG'
import coolcolors from '../public/images/photos/colors.png'
import poolp from '../public/images/photos/poolp.jpg'

const Photos = () => (
  <Layout title="Photos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Some Photos
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PhotoGrid
            title="Old Guy"
            thumbnail={oldguy}
            caption="An older Thai gentleman and the time gone by"
          />
          <PhotoGrid
            title="Guy on Elephant"
            thumbnail={guyonele}
            caption="Old guy on an elephant"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PhotoGrid
            title="Elephant 1"
            thumbnail={elephant1}
            caption="An elephant I met in Thailand"
          />
          <PhotoGrid
            title="Elephant 2"
            thumbnail={elephant2}
            caption="A second elephant I met in Thailand"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PhotoGrid
            title="Monk"
            thumbnail={monk}
            caption="a Picture tells a thousand words"
          />
          <PhotoGrid
            title="Rock"
            thumbnail={rock}
            caption="a Rock lives a thousand lifetimes"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PhotoGrid
            title="Tuaggi"
            thumbnail={tuaggi}
            caption="my dog Tuaggi"
          />
          <PhotoGrid
            title="Bridge"
            thumbnail={bridge}
            caption="the Rickenbacker Causeway at night"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PhotoGrid
            title="Cool Colors"
            thumbnail={coolcolors}
            caption="some very cool colors"
          />
          <PhotoGrid
            title="Poolside Synthesia"
            thumbnail={poolp}
            caption="a Miami sunset"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Photos
export { getServerSideProps } from '../components/chakra'
