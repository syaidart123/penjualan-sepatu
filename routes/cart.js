export default (routes, controller) => {
  routes.post("/addCart", controller.addToCart);
  return routes;
};
