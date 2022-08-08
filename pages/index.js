import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software engineer based in Miami!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Almeida
          </Heading>
          <p>Digital Nomad ( Mathematician / Developer / Musician )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Mikey.png"
              alt="Profile image"
              borderRadius="half"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Im a full-stack developer based in North Cqrolina, with a passion for
          solving problems with code. From a young age, Ive spent most of my
          time using a computer... probably on World of Warcraft. In college I
          ended up studying Math and Physics-- but through my mentors I
          discovered the bridge between what I studied and computer science,
          which is what I am working in now. When not on my computer, I can be
          found either playing guitar, hiking, or traveling as documented by my
          <NextLink href="/photos" scroll={false}>
            <Link> Photos</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Hello World!
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Was a research assitant at University of Miami Miller School of
          Medicine
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Was a research assistant University of Miami under Dr. Mohammed
          Hashemi in the Laboratory of Quantum Optics
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Started working part time as a web developer for Medquest Media in
          Brickell, Florida
        </BioSection>
        <BioSection>
          <BioYear>2019-2020</BioYear>
          Was a research assistant at the University of Miami under Dr. Mason
          Klien in the Biophysics Laboratory
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Awarded a Bachelor of Science in Applied Mathematics and Pure physics
          at Univerty of Miami
        </BioSection>
        <BioSection>
          <BioYear>2020-2021</BioYear>
          Started work as a junior engineer at Radiance Commerce (formerly
          Radiance Laboratories)
        </BioSection>
        <BioSection>
          <BioYear>2021-Today!</BioYear>
          Started work as a full stack developer at Cymantix
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Started work as a free lance developer on Upwork.com
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
           Music,{' '}
          <Link href="https://soundcloud.com/arven-the-violinist" target="_blank">
            Drawing, 
          </Link>
            and Photography
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/arvaer" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @arvaer
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/mjalmeidah" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @mjalmeidah
              </Button>
            </Link>
          </ListItem>
        </List>


        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
