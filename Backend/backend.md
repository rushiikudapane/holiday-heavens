express middleware
-Application-level middleware (loggerMiddleware)
-Third party middleware
-Router-level middleware (express.Router())
-Built-in middleware
-Error-handling middleware


Layered architecture in node js:
  - app.js (entry point)
  - routes (all routes)
  - controllers (methods for routes, calls service)
  - services (services related to db, calls repository)
  - repositories (db calls from here, calls db model (db query))
  - models (mongo schema)

