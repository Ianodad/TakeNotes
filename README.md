## TakeNotes

This is a [NextJs](https://nextjs.org/) fullstack app built around the MVC architecture. This is done by leveraging tools such as [Prisma](https://www.prisma.io/nextjs) for database modeling and Next-connect to the Api handling. To find out how to recreate this find it on [Medium](https://ianodad.medium.com/building-a-mvc-application-with-nextjs-and-prisma-a4be9276b9f2)

## [LIVE WEBSITE](https://take-notes-nine.vercel.app/)

## ExampleS:

### Create Note

![](https://media.giphy.com/media/cklrnTxvhXhIIzdNYL/giphy.gif)

### Update Note

![](https://media.giphy.com/media/RlkvAoJOEpa8W5BFsx/giphy.gif)

### Delete Note

![](https://media.giphy.com/media/FWqX2de98go8sAh22L/giphy.gif)

## Features

- [x] Create Note
- [x] Updated Note
- [x] Delete Note

## Source Materials

1. [NextJs](https://nextjs.org/)
2. [Prisma](https://www.prisma.io/nextjs)
3. [Typescript](https://www.typescriptlang.org/)
4. [Next-connect](https://github.com/hoangvvo/next-connect)
5. [Axios](https://axios-http.com/)
6. [Eslint](https://eslint.org/)

## Installation and Setup Instructions

```bash
git clone https://github.com/Ianodad/TakeNotes.git
```

create an **.env** file add the local or cloud base URI

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Install node_modules dependencies

```bash
npm install
```

Run application

```bash
npm run dev
```

### Using Prisma

> Prisma helps app developers build faster and make fewer errors with an open source ORM for PostgreSQL, MySQL and SQLite. | [Source](https://www.prisma.io/)

Create database table using prisma ORM

```bash
npx prisma db push
```

### Use Prisma client when model have changed

```bash
npx prisma generate
```

### studio

Allows you to interact with and manage your data interactively. For more visit [prisma studio](https://www.prisma.io/docs/reference/api-reference/command-reference/#studio).

```bash
npm run studio
```

## License

MIT (c) 2021 [Ian Adera](https://github.com/ianodad)
