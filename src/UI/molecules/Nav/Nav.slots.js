import { Button, Box, Tooltip, TextField, InputAdornment, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'
import { VscBell, VscBellDot } from 'react-icons/vsc'
import { CiSquarePlus } from 'react-icons/ci'
import { IoMdSearch } from 'react-icons/io'

// The below Components are the default components for Nav that can be customized
export const TopNavContent = ({ state: { label = 'Home', href = '/Lacuna-Codex', tabIndex = 0, title = 'Go to Lacuna Codex App' } = {}}) => (
    <Tooltip title={title}>
        <Box aria-label='Site Title' component='h1' sx={theme => ({ fontSize: theme.typography.h2.fontSize, color: theme.palette.text.primary, })}>
            <Link href={href} tabIndex={tabIndex} aria-label={title}>{label}</Link>
        </Box>
    </Tooltip>
)

const TitleContent = ({ state: { label = 'Lacuna Codex', href = '/Lacuna-Codex', tabIndex = 0, title = 'Go to Lacuna Codex App' } = {} }) => (
    <Tooltip title={title}>
        <Box aria-label='Site Title' component='h1' sx={theme => ({ fontSize: theme.typography.h2.fontSize, color: theme.palette.text.primary, })}>
            <Link href={href} tabIndex={tabIndex} aria-label={title}>{label}</Link>
        </Box>
    </Tooltip>
)
export const LeftNavContent = ({ state: { tabIndex = 0, title = 'TODO: Update title for Lacuna Codex app in the nav', } = {} }) => (
    <Box display='flex' alignItems='center'>
        {/* 
        <IoMdSearch size={32} />
        <CiSquarePlus size={32} />
        <VscBell size={32} />
        <VscBellDot size={32} />
        <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton edge='end'>
                                <IoMdSearch size={32} />
                            </IconButton>
                        </InputAdornment>
                    ),
                }
            }}
        />
        */}
        <Tooltip title={title}>
            <Box component={Link} href='/' tabIndex={tabIndex} aria-label='Go to homepage' sx={theme => ({ cursor: 'pointer', background: 'transparent', filter: theme.logoFilter, '&:active': { filter: theme.logoFilterActive }, })}>
                <Image src='/Lacuna-Codex-Logo.png' alt='Lacuna Codex Logo' width={64} height={64} aria-label={title} priority />
            </Box>
        </Tooltip>
        <TitleContent />
    </Box>
)
export const RightNavContent = ({
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