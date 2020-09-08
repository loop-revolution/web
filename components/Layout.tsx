import Head from 'next/head'
import { Box, Icon, IconButton, Center, VStack, Text, HStack } from '@chakra-ui/core'
import { GitHub } from 'react-feather'
import { Link } from './basic/Link'
import { ThemeSwitcher } from './util/ThemeSwitcher'
import { LogoImage } from './LogoImage'

type Props = {
  title?: string
  noLogo?: boolean
}

export const Layout: React.FC<Props> = ({ children, title = 'Loop', noLogo = false }) => (
  <Box>
    <Head>
      <title>{title}</title>
    </Head>
    <Center as='header'>
      {noLogo || (
        <Link href='/'>
          <HStack
            _hover={{
              opacity: 0.7,
            }}
          >
            <LogoImage height='1.5rem' />
            <Text fontWeight='800' fontSize='2rem'>
              Loop
            </Text>
          </HStack>
        </Link>
      )}
    </Center>
    {children}
    <Box as='footer' mt={10}>
      <Center color='gray.500'>
        <VStack>
          <Box>
            <Link href='https://github.com/loop-revolution'>
              <IconButton icon={<Icon as={GitHub} color='gray.500' />} aria-label='GitHub Repository' />
            </Link>
            <ThemeSwitcher />
          </Box>
          <Text>© Loop Revolution • 2020</Text>
        </VStack>
      </Center>
    </Box>
  </Box>
)
