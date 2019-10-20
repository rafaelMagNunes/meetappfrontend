import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container, Main } from './styles';
import api from '~/Services/api';

import img from '~/assets/img.jpg';

export default function Details({ match }) {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const { id } = match.params;

      const response = await api.get(`meetupsbyid/${id}`);

      const { data } = response;

      console.log(data);

      setMeetup([data]);
    }

    loadMeetup();
  }, [match.params, meetup]);

  function handleCancel(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      {meetup.map(meetup => (
        <>
          <header>
            <h2>{meetup.title}</h2>
            <aside>
              <button type="button">
                <Link to={`/meetup/${meetup.id}`}>
                  <MdAddCircleOutline size={22} /> <p> Editar </p>
                </Link>
              </button>
              <button type="button" onClick={handleCancel}>
                <p>
                  <MdAddCircleOutline size={22} /> <p> Cancelar </p>
                </p>
              </button>
            </aside>
          </header>

          <Main>
            <img src={img} alt="Imagem teste" />
            <h4>{meetup.description}</h4>
            <footer>
              <span>
                {format(parseISO(meetup.date), `dd 'de' MMMM, 'às' HH:mm'h'`, {
                  locale: ptBR,
                })}
              </span>
              <span>{meetup.location}</span>
            </footer>
          </Main>
        </>
      ))}
    </Container>
  );
}
