## TakeNotes

This is NextJs fullstack app build around the MVC architecture. The combination of

#### Example:

## Source Materials

## Project Status

## Key Feautures

- [x] Create Note
- [x] Updated Note
- [x] Delete Note

## Installation and Setup Instructions

Install node_module dependencies

```bash
npm install
```

Run application

```bash
npm run dev
```

create an .env file add the local or cloud base URI

```bash
DATABASE_URL="mysql://root@127.0.0.1:3309/YOUR-DB-NAME-HERE"
```

## Using Prisma

> Prisma helps app developers build faster and make fewer errors with an open source ORM for PostgreSQL, MySQL and SQLite. | [Source](https://www.prisma.io/)

Create database table using prisma ORM

```bash
npx prisma db push
```

### studio

Allows you to interact with and manage your data interactively. For more visit [prisma studio](https://www.prisma.io/docs/reference/api-reference/command-reference/#studio).

```bash
npm run studio
```

## License

MIT (c) 2021 [Ian Adera](https://github.com/ianodad)
