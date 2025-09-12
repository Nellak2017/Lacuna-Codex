import { Button, Box } from "@mui/material"
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'
import { Logo, SiteTitle, LoginContainer, StyledNav, ContentContainer } from './Nav.elements'

// The below Components are the default components for Nav that can be customized
const TitleContent = ({ state: { label = 'Lacuna Codex', href = '/Lacuna-Codex', tabIndex = 0, title = 'Go to Lacuna Codex App' } = {} }) => (
    <SiteTitle><Link href={href} tabIndex={tabIndex} title={title} aria-label={title}>{label}</Link></SiteTitle>
)
export const LeftContent = ({ state: { tabIndex = 0, title = 'TODO: Update title for Lacuna Codex app in the nav', } = {} }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Logo className='logo' tabIndex={tabIndex}>
            <Link href={'/'} tabIndex={tabIndex}><Image src={'/Lacuna-Codex-Logo.png'} alt={'Lacuna Codex Logo'} width={64} height={64} title={title} aria-label={title} /></Link>
        </Logo>
        <TitleContent />
    </Box>
)
export const RightContent = ({
    state: {
        prevComponent,
        linkData = [
            { label: 'Data Hub', href: '/Lacuna-Codex', title: 'Go to Data Hub', onClick: null },
            { label: 'Log in', href: '/login', title: 'Log into Lacuna Codex', onClick: null },
        ],
        lastButtonData = { label: 'Sign Up', href: '/signup', title: 'Sign up', onClick: null },
        postComponent,
    } = {}
}) => (
    <LoginContainer>
        {prevComponent}
        {linkData?.map(({ label, href, title, onClick }) => <Link key={label} href={href} title={title} onClick={e => { if (onClick) { onClick(e) } }}>{label}</Link>)}
        {lastButtonData &&
            <Link href={lastButtonData.href} className={'sign-up'} onClick={e => { if (lastButtonData?.onClick) { lastButtonData.onClick(e) } }}>
                <Button title={lastButtonData.title} aria-label={lastButtonData.title}>
                    {lastButtonData.label}<BsArrowRightShort />
                </Button>
            </Link>}
        {postComponent}
    </LoginContainer>
)
export const DefaultContainer = ({ left, middle, right }) => (<StyledNav><ContentContainer>{left}{middle}{right}</ContentContainer></StyledNav>)