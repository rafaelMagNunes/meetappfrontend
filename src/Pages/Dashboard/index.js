import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/Services/api';

import { Container } from './styles';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('subscriptions');

      const { data } = response;

      setMeetup(data);
    }

    loadMeetup();
  }, [meetup]);
  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <button type="button">
          <Link to="/meetup">
            <MdAddCircleOutline size={22} /> <p> Novo meetup </p>
          </Link>
        </button>
      </header>
      <ul>
        {meetup.map(meetups => (
          <li key={meetups.Meetup.id}>
            <h4>{meetups.Meetup.title}</h4>
            <aside>
              <p>
                {format(
                  parseISO(meetups.Meetup.date),
                  `dd 'de' MMMM, 'às' HH:mm'h'`,
                  {
                    locale: ptBR,
                  }
                )}
              </p>
              <Link to={`/details/${encodeURIComponent(meetups.Meetup.id)}`}>
                <MdChevronRight size={22} color="#fff" />
              </Link>
            </aside>
          </li>
        ))}
      </ul>
    </Container>
  );
}
