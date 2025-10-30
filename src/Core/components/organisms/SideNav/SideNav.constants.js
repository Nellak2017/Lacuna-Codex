import { Inbox as InboxIcon } from '@mui/icons-material'

export const drawerWidth = 240
export const collapsedWidth = 60
export const imgTitle = 'TODO: Update title for Lacuna Codex app in the nav'
export const imgSource = '/Lacuna-Codex-Logo.png'
export const imgAlt = 'Lacuna Codex Logo'
export const sampleNav = [{
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