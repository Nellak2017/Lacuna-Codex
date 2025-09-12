import { ReactNode } from 'react'
import { NavItem as DomainNavItem } from '../../../domain/SideNav/NavItem.types'
export type NavItemUI = DomainNavItem & { icon?: ReactNode } // UI adaptation — adds React-specific fields