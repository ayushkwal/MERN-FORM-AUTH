MERN stack form authentication

1) I've used Higher Order Component i.e. AuthRoute.js  which can be imported to protect any route.
e.g.   Ironman = withSuit(tonyStark)


2) I've created a middleware {requireLogin} to check jwt for every request.