const freelance = {
  firstname: 'John',
  lastname: 'Doe',
  url_photo: 'https://m.media-amazon.com/images/I/61HOUWXnmQL._SS500_.jpg',
  email: 'johndoe@doejohn.world',
  phone_number: 3615,
  password: 'johndoe69',
  mainSkills: ['js', 'react', 'node'],
  otherSkills: ['html', 'css', 'redux', 'express', 'design', 'devops', 'docker'],
  average_daily_rate: 1000,
  url_web_site: 'https://www.amazon.fr/John-Doe-Vigilante-Original-Soundtrack/dp/B00KSXEJCO',
  job_title: 'devolopper full-stack',
  bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  siret: '12345678901234',
  vat_number: '348729272',
  registration_date: '2020/01/01',
  last_connection_date: '2020/03/17',
  last_modification_date: '2020/03/17',
  is_active: true,
  is_admin: false,
  is_validated: true,
  address_id: 23,
  street: '742 evergreen terrace',
  city: 'Springflied',
  zip_code: 69100,
  country: 'France',
  company: 'Security Agent',
  references: [{
    name: 'Auchan',
    image: 'data:image/png;base64,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',
    link: ''
  },
    {
      name: 'Redbull',
      image: 'https://enseignestickers.com/wp-content/uploads/2017/11/red-bull-1.jpg',
      link: 'https://www.redbull.com/fr-fr/'
    },
    {
      name: 'Redbull',
      image: 'https://enseignestickers.com/wp-content/uploads/2017/11/red-bull-1.jpg',
      link: 'https://www.redbull.com/fr-fr/'
    },
    {
      name: 'Redbull',
      image: 'https://enseignestickers.com/wp-content/uploads/2017/11/red-bull-1.jpg',
      link: 'https://www.redbull.com/fr-fr/'
    }
  ]
};
export default freelance;
