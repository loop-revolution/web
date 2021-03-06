import { Box, Flex, Image } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { Suspense } from "react"
import Link from "next/link"
import { userAtom } from "../user/userAtom"
import { WithUserNav } from "./WithUserNav"
import { NoUserNav } from "./NoUserNav"
import { GlobalSearchComponent } from "../search/SearchComponent"

export const Nav: React.FC = () => {
	return (
		<Box>
			<Flex
				alignItems='center'
				as='nav'
				position='fixed'
				top='0'
				left='0'
				right='0'
				height={12}
				bg='#2B2A30'
				justifyContent='space-between'
				pl={2}
				pr={5}
				zIndex='100'
			>
				<Box zIndex={10}>
					<Link href='/'>
						<Image cursor='pointer' src='/light-logo.svg' height={10} alt='Loop Logo' />
					</Link>
				</Box>
				<GlobalSearchComponent />
				<Suspense fallback={<Box></Box>}>
					<NavDistributor />
				</Suspense>
			</Flex>
		</Box>
	)
}

const NavDistributor: React.FC = () => {
	const [user] = useAtom(userAtom)
	if (user) {
		return <WithUserNav user={user} />
	}
	return <NoUserNav />
}
