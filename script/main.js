const boolzapp = new Vue ({
  el: '#root',
  data: {
    // IO
    user: {
      avatar: "img/avatar_io.jpg",
      nameUser: 'Alessandro'
    },
    // LISTA CONTATTI (ARRAY)
    contactList: [
      // singolo contatto (oggetto):
      {
        avatar: 'img/avatar_1.jpg',
        nameContact: 'Michele',
        ultimoAccesso: 'Ultimo accesso:'
      },
      {
        avatar: 'img/avatar_2.jpg',
        nameContact: 'Fabio',
        ultimoAccesso: 'Ultimo accesso:'
      },
      {
        avatar: 'img/avatar_3.jpg',
        nameContact: 'Samuele',
        ultimoAccesso: 'Ultimo accesso:'
      },
      {
        avatar: 'img/avatar_4.jpg',
        nameContact: 'Luca',
        ultimoAccesso: 'Ultimo accesso:'
      },
      {
        avatar: 'img/avatar_5.jpg',
        nameContact: 'Simone',
        ultimoAccesso: 'Ultimo accesso:'
      },
      {
        avatar: 'img/avatar_6.jpg',
        nameContact: 'Diego',
        ultimoAccesso: 'Ultimo accesso:'
      },
      {
        avatar: 'img/avatar_7.jpg',
        nameContact: 'Cristiano',
        ultimoAccesso: 'Ultimo accesso:'
      },
      {
        avatar: 'img/avatar_8.jpg',
        nameContact: 'Paul',
        ultimoAccesso: 'Ultimo accesso:'
      },
    ]
  }
})
