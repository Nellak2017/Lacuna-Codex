import { Button, Box, Tooltip, TextField, InputAdornment, IconButton, } from '@mui/material'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'
import { VscBell, VscBellDot } from 'react-icons/vsc'
import { CiSquarePlus } from 'react-icons/ci'
import { IoMdSearch } from 'react-icons/io'
import { AvatarLink } from '../../atoms/AvatarLink/AvatarLink'
import { Logo } from '../../atoms/AvatarLink/AvatarLink.slots'
import { TopNavContentConstants, ICON_SIZE } from '../../../Core/components/molecules/Nav/Nav.constants.js'
import { useNavSlots } from '../../../Application/hooks/organisms/NavSlots/useNavSlots.js'
import { useQueryParam } from '../../../Application/hooks/shared/useQueryParam.js'
import { QUERY_PARAM_KEYS } from '../../../Core/shared/global.constants.js'

// The below Components are the default components for Nav that can be customized
const IconWrapper = ({ children, ...rest }) => (<IconButton {...rest} sx={{ color: 'text.primary', '&:hover svg, &:hover svg path': { color: 'primary.main' } }}>{children}</IconButton>) // TODO: Extract this if it is used elsewhere later
const SearchBar = ({ value, onChange }) => <TextField variant='outlined' placeholder='Search...' fullWidth value={value} onChange={e => onChange(e.target.value)} slotProps={{ input: { endAdornment: (<InputAdornment position='end'><IconButton edge='end'><IoMdSearch size={ICON_SIZE} /></IconButton></InputAdornment>), } }} /> // TODO: Extract this if it is used elsewhere later
const TopNav = ({ state: { label = 'Home', href = '/Lacuna-Codex', tabIndex = 0, title = 'Go to Lacuna Codex App' } = {} }) => (
    <Tooltip title={title}>
        <Box aria-label='Site Title' component='h1' sx={theme => ({ fontSize: theme.typography.h2.fontSize, color: theme.palette.text.primary, })}>
            <Link href={href} tabIndex={tabIndex} aria-label={title}>{label}</Link>
        </Box>
    </Tooltip>
)
export const TopNavContent = ({ customHook = useNavSlots }) => {
    const { state } = customHook?.()
    const { open } = state
    const { label, href, tabIndex, title } = TopNavContentConstants
    return (open ? <TopNav state={{ label, href, tabIndex, title }} /> : <></>)
}
export const LeftNavContent = ({ customHook = useNavSlots }) => {
    const { state, services } = customHook?.()
    const { open, bellNotification } = state
    const { toggleSearchOpen } = services
    return (
        <Box display='flex' alignItems='center'>
            {!open && <Logo />}
            <IconWrapper onClick={() => console.warn('TODO: Add listener for plus button')}><CiSquarePlus size={ICON_SIZE} /></IconWrapper>
            {bellNotification ? <IconWrapper onClick={() => console.warn('TODO: Add listener for bell notify button')}><VscBellDot size={ICON_SIZE} /></IconWrapper> : <IconWrapper onClick={() => console.warn('TODO: Add listener for bell button')}><VscBell size={ICON_SIZE} /></IconWrapper>}
            {!open && <IconWrapper onClick={toggleSearchOpen}><IoMdSearch size={ICON_SIZE} /></IconWrapper>}
        </Box>
    )
}
export const MiddleNavContent = ({ customHook = useNavSlots }) => {
    const { state } = customHook?.()
    const { open, searchOpen } = state
    const [searchValue, setSearchValue] = useQueryParam(QUERY_PARAM_KEYS.SEARCH)
    const content = (open || searchOpen) ? <SearchBar value={searchValue} onChange={setSearchValue} /> : <TopNav />
    return (<Box sx={{ width: '33%', textAlign: 'center' }}>{content}</Box>)
}
export const RightNavContent = ({
    state: {
        prevComponent,
        linkData = [{ label: 'Log in', href: '/login', title: 'Log into Lacuna Codex', onClick: null },],
        lastButtonData = { label: 'Sign Up', href: '/signup', title: 'Sign up', onClick: null },
        postComponent = <AvatarLink />,
    } = {}
}) => (
    <Box aria-label='Login Container' component='div' display='flex' alignItems='center' height='100%' columnGap={3}>
        {prevComponent}
        {linkData?.map(({ label, href, title, onClick }) => <Tooltip key={label} title={title}><Box component={Link} href={href} onClick={e => onClick?.(e)} sx={theme => ({ color: theme.palette.text.primary, '&:hover': { color: theme.palette.primary.main, cursor: 'pointer', borderBottom: `2px solid ${theme.palette.primary.main}`, }, })}>{label}</Box></Tooltip>)}
        {lastButtonData &&
            <Tooltip title={lastButtonData.title}>
                <Button component={Link} href={lastButtonData.href} aria-label={lastButtonData.title} onClick={e => lastButtonData.onClick?.(e)} color='inherit' sx={theme => ({ color: theme.palette.primary.contrastText, fontSize: theme.typography.h4.fontSize, '& svg': { fontSize: theme.typography.h3.fontSize, }, '&:hover': { borderBottom: '0px solid transparent', color: theme.palette.primary.contrastText }, })}>
                    {lastButtonData.label}<BsArrowRightShort />
                </Button>
            </Tooltip>
        }
        {postComponent}
    </Box>
)