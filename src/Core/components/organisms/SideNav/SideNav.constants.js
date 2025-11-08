import { Inbox as InboxIcon } from '@mui/icons-material'

export const SIDE_NAV_DEFAULT_TOGGLE_STATE = true
export const DRAWER_WIDTH = 240
export const COLLAPSED_WIDTH = 60
export const LOGO_TITLE = 'TODO: Update title for Lacuna Codex app in the nav'
export const LOGO_SOURCE = '/Lacuna-Codex-Logo.png'
export const LOGO_ALT = 'Lacuna Codex Logo'
export const SAMPLE_NAV = [{
    title: 'Pages',
    items: [
        {
            icon: <InboxIcon />,
            text: 'page one', // description: 'sub title 1',
            subItems: [
                { text: 'Sub page 1',  },
                { text: 'Sub page 2',  },
            ],
        },
        {
            icon: <InboxIcon />,
            text: 'page two',
            subItems: [{ text: 'Sub page 1', },],
        },
        {
            icon: <InboxIcon />,
            text: 'page three', 
            subItems: [],
        },
    ],
},
{ title: 'Settings', items: [{ icon: <InboxIcon />, text: 'Settings', },], },]