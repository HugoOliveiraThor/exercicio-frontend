import React, { useState } from 'react';
import { VscLocation } from 'react-icons/vsc';
import { AiOutlineMail } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import Card from '../../components/card/card';

export default function Contact() {
  const defaultPropsIcons = {
    color: 'black',
    size: '20px',
  };
  const [contacts] = useState([
    {
      item: 'San Francisco, US',
      componentIcon: <VscLocation {...defaultPropsIcons} />,
    },
    {
      item: 'jameslee@website.com',
      componentIcon: <AiOutlineMail {...defaultPropsIcons} />,
    },
    {
      item: 'http://www.website.com',
      componentIcon: <CgWebsite {...defaultPropsIcons} />,
    },
  ]);
  return (
    <Card>
      {contacts.map((contact) => (
        <div key={contact.item} className="row">
          {contact.componentIcon}
          <span className="pr-10 default-text pb-10">{contact.item}</span>
        </div>
      ))}
    </Card>
  );
}
