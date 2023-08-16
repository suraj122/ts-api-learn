import {Express, Request, Response} from 'express';

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
  })
}

export default routes;