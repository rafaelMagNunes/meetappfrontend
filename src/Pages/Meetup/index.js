import React, { useEffect, useState } from 'react';
import { Form, Textarea, Input } from '@rocketseat/unform';

import api from '~/Services/api';

import { Container } from './styles';

export default function Meetup({ match }) {
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const { id } = match.params;

      const response = await api.get(`meetupsbyid/${id}`);

      const { data } = response;

      setMeetup(data);
    }

    if (match.params.id) {
      loadMeetup();
    }
  }, [match.params, match.params.id, meetup]);

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Textarea
          name="description"
          type="text"
          placeholder="Descrição completa"
        />
        <Input name="date" type="datetime-local" placeholder="Data do Meetup" />
        <Input
          name="location"
          type="text"
          placeholder="Localização do Meetup"
        />
        <button type="submit">Salvar Perfil</button>
      </Form>
    </Container>
  );
}
