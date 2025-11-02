import { Router } from 'express';
const router = Router();
import { testRoute } from '../modules/test/testRoute';


const moduleRoutes = [
  {
    path: '/test',
    route: testRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;
