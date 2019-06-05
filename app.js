import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import Router from 'koa-router';


const app = new Koa();
const router = new Router();

app.use(koaBody());
app.use(cors());
app.use(helmet());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx => {
  ctx.body = ctx.request.url.replace('/','');
});

router.get('/',async (ctx) => {
      ctx.body = 'Hello';
    });

router.get('/1',async (ctx) => {
      ctx.body = 'Hellooooooooooooooooooooooooooo';
    });
  
export default app;