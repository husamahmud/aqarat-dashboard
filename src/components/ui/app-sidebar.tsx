'use client'

import * as React from 'react'
import { PiBuildingApartmentLight } from 'react-icons/pi'
import { RiAuctionLine } from 'react-icons/ri'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { MdOutlineRealEstateAgent } from 'react-icons/md'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import { FaHouseUser } from 'react-icons/fa'

import { NavMain } from '@/components/ui/nav-main'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar'
import AnimatedLogo from '@/components/components/AnimatedLogo'

const data = [
  {
    title: 'اداره عقارات',
    url: '#',
    icon: PiBuildingApartmentLight,
    isActive: true,
    items: [
      {
        title: 'ادارة العقارات',
        url: '#',
      },
      {
        title: 'إضافة عقار',
        url: '#',
      },
    ],
  },
  {
    title: 'ادارة مزادات',
    url: '#',
    icon: RiAuctionLine,
    items: [
      {
        title: 'ادارة المزادات',
        url: '#',
      },
      {
        title: 'إضافة مزاد',
        url: '#',
      },
    ],
  },
  {
    title: 'ادارة اعلانات',
    url: '#',
    icon: HiOutlineSpeakerphone,
    items: [
      {
        title: 'ادارة الاعلانات',
        url: '#',
      },
      {
        title: 'اضافة اعلان',
        url: '#',
      },
    ],
  },
  {
    title: 'الطلبات العقارية',
    url: '#',
    icon: MdOutlineRealEstateAgent,
  },
  {
    title: 'المدفوعات',
    url: '#',
    icon: LiaFileInvoiceDollarSolid,
    items: [
      {
        title: 'بانتظار الدفع',
        url: '#',
      },
      {
        title: 'سابقة',
        url: '#',
      },
    ],
  },
  {
    title: 'المكاتب الفرعية',
    url: '#',
    icon: FaHouseUser,
    items: [
      {
        title: 'كل المكاتب',
        url: '#',
      },
      {
        title: 'عقارات المكاتب',
        url: '#',
      },
      {
        title: 'مزادات المكاتب',
        url: '#',
      },
      {
        title: 'تقارير المكاتب',
        url: '#',
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar()

  return (
    <Sidebar
      collapsible="icon"
      side="right"
      className="bg-white"
      {...props}
    >
      <SidebarHeader className="pt-5">
        <AnimatedLogo isOpen={open} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
