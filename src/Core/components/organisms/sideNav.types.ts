import { ReactNode } from 'react'
import { NavItem as DomainNavItem } from '../../domain/SideNav/navItem.types'
export type NavItemUI = DomainNavItem & { icon?: ReactNode } // UI adaptation — adds React-specific fields