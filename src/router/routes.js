import News from '../pages/News'
import Test from '../pages/Test'
import Detail from '../pages/Detail'
const routes = [
  { path: '/news', component: News },
  { path: '/test', component: Test },
  { path: '/detail/:id', component: Detail }
]
export default routes
