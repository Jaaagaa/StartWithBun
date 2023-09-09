import { Elysia } from 'elysia';
import { User } from './app/Routes/user';

const app = new Elysia();

app.get("/", User);

app.listen(Bun.env.PORT ?? 3000);

console.log(`🦊 Elysia is running at on port ${app.server.port}....`)
