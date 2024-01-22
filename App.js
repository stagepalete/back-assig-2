const routes = require('./Routes.js');
const port = 5000;

routes.listen(port, (err) => {
  console.log(`Running server on port ${port}`, err);
});
