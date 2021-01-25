import { Layout } from "../components/Layout"
import { Heading, VStack, Button, Link as ChakraLink } from "@chakra-ui/core"
import { LogoImage } from "../components/LogoImage"
import { Link } from "../components/basic/Link"
import { Paragraph } from "../components/static/Paragraph"
import { SectionHeading } from "../components/static/SectionHeading"
import { Section } from "../components/static/Section"
import { Box, Users } from "react-feather"
import { Image } from "../components/static/Image"
import { LinkStyling } from "../components/styling/LinkStyling"

const IndexPage = () => {
	return (
		<Layout title='Loop' noLogo>
			<VStack>
				<LogoImage width={100} mt={10} />
				<Heading as='h1' fontSize='5rem' fontWeight='800'>
					Loop
				</Heading>
				<Section>
					<Paragraph>
						There are 2.2 million apps available on the App Store, and 2.8 million on the Google Play Store. There’s no
						way to try out all of them, and less than 2% of the apps integrate with each other at all. Not to mention
						there are hundreds of alternatives for every app you use already, and some might even be life-changers you
						can’t switch to because all of your data is already in another app.
					</Paragraph>
					<Paragraph>
						Loop completely changes this scenario. On Loop, all apps use a common data source, so integration is
						built-in to every single app. Not to mention you can easily switch apps because your data is the same. And
						unlike an app store that you need to download all these apps for, you can pick and choose how much of an app
						you’d like.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeading>What Loop Solves</SectionHeading>
					<Paragraph b>Proliferation of discrete apps in your life (or devices)</Paragraph>
					<Paragraph>
						It’s rare that people can get what they want, when it comes to software. That’s because nowadays the
						features you get are the features that an app gives you, no more and no less. That’s there are so many
						different apps that do slightly different things, just for a different environment. If someone who can’t
						program wanted to put together some features and make an app specialized for their needs, that would be
						impossible.
					</Paragraph>
					<Paragraph>
						This fact is what sets Loop apart from other apps. The ability to combine features that you want without
						needing the bloat of an entire app means that you can piece together your own app, similar to how you order
						what you want and put it together at a Tapas bar.
					</Paragraph>
					<Paragraph b>The difficulty of switching to new apps due to legacy data</Paragraph>
					<Paragraph>
						Nowadays there are new products launching left and right. Sometimes, these products would be completely
						life-changing for your workflow, but the problem is that you can’t leave what you already use.
					</Paragraph>
					<Paragraph>
						Blocks change that. Apps on our platform all use the same data source, so your data won’t be a casualty when
						swapping to new services.
					</Paragraph>
					<Paragraph b>The lack of integration between apps</Paragraph>
					<Paragraph>
						Or let’s say that you have the latest and greatest “to-do” tracker, that packs so many more features than
						the one you used to use. However it doesn’t integrate with Slack, which you use for messaging.
					</Paragraph>
					<Paragraph>
						On the Block platform, integration isn’t something that an app needs to add. It’s already baked into the app
						as soon as it’s created.
					</Paragraph>
					<Paragraph b>The inefficiencies (and annoyances) of using multiple apps of the same kind</Paragraph>
					<Paragraph>
						Maybe you and your friends recently switched to an amazing new messaging app; but now you need to juggle
						between yet another messaging app to talk to people who haven’t switched.
					</Paragraph>
					<Paragraph>
						On the Block Platform you don’t need ALL of an app, you can just choose what features you want. That way if
						you only stayed with an app because of a small group of people, you wouldn’t have any of the excess bulk.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeading>A Lego Analogy</SectionHeading>
					<Paragraph>
						Think of Blocks as similar to Lego blocks. Each Lego block comes as a small piece that anyone can use to
						create the shape they want to create (however big or small). Except that these Blocks are not programmer
						functions but apps that have been created using the Block Platform. Blocks behave just like Lego blocks
						where shapes, fitments, colors come standard and inherently usable with other Lego blocks.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeading>What Loop Is</SectionHeading>
					<Paragraph>
						Loop is an online platform of individual nodes called Blocks. Blocks all have the same fundamental
						properties, such as permissions and types. The power of Block Technology comes from the fact that Blocks
						have other Blocks as properties, which creates an extremely modular structure, which in turn provides many
						advantages over how things work today in the online content sharing world.
					</Paragraph>
					<Paragraph>
						Each Block has a type associated with it. Simple types include Text and Numbers. Complex types are so
						feature-rich that they can replace the apps you use today. The types that Loop will produce first are Chats,
						Tasks, and Documents. Blocks are like micro-apps within Loop, that have the bonus of being built up of
						Blocks.
					</Paragraph>
					<Image
						src='https://lucid.app/publicSegments/view/3d93066e-dab2-4986-93e1-d69a069779d1/image.png'
						alt={`Diagram illustrating the differences between how apps work vs how Blocks work.
            There are many apps in the app model, while the Block model has the functions individually.`}
					/>
					<Paragraph>
						In addition, using this modular architecture, complex apps can be broken down into simple transportable
						pieces. Take embedding a quote from a document for example. Today, one option is to link to the document, so
						that readers can find the original document. Another option is to copy and paste the quote itself, which
						creates redundancy and requires extra work to keep the quote updated. With Loop however, one can embed a
						Quote Block (quote1) directly into one’s Document Block (document1). Each time a user changes quote1,
						document1 will automatically inherit the change!
					</Paragraph>
					<Image
						src='https://lucid.app/publicSegments/view/9c37b043-4c66-4437-b692-7330d100045e/image.png'
						alt={`Diagram illustrating the differences between a traditional messaging app and a chat block.
            The chat block is composed of many other blocks, while the messaging app is full of links and bad functionality.`}
					/>
					<Paragraph>
						Loop will be available as iOS, Android, and web applications, powered by an Open API (located at{" "}
						<LinkStyling>
							<ChakraLink href='https://api.loop.page' isExternal>
								api.loop.page
							</ChakraLink>
						</LinkStyling>
						).
					</Paragraph>
				</Section>
				<Link href='/block-technology'>
					<Button leftIcon={<Box size={15} />} colorScheme='red' variant='solid'>
						Block Technology
					</Button>
				</Link>
				<Link href='/user-journeys'>
					<Button leftIcon={<Users size={15} />} colorScheme='blue' variant='solid'>
						User Journeys
					</Button>
				</Link>
			</VStack>
		</Layout>
	)
}

export default IndexPage
