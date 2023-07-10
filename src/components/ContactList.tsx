'use client'

import { useSession } from 'next-auth/react'
import ContactCard from './ContactCard'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

export default function ContactList() {
  const session = useSession()
  const [contacts, setContacts] = useState<any>([])

  useEffect(() => {
    async function getContacts() {
      const { data: contacts } = await api.get('/api/ads/get-contacts', {
        params: { userId: session.data?.user.id },
      })
      console.log(contacts)

      setContacts(contacts)
    }

    getContacts()
  }, [session.data?.user.id])

  return (
    <section className="grid gap-4 lg:gap-3">
      {contacts.map((contacts: any) => {
        return contacts.contacts.map((contactInfo: any) => {
          return (
            <ContactCard
              key={contactInfo.id}
              name={contactInfo.name}
              email={contactInfo.email}
              id={contactInfo.adsId}
            />
          )
        })
      })}
    </section>
  )
}
