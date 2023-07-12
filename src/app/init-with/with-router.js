import { Shared } from '@shared';

const LibRouter = Shared.Lib.Router;

export function withRouter(params) {
  const router = LibRouter.createRouter(params.area, params.baseUrl);
  params.app.use(router);
  return { router };
}
