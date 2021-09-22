import components from "./components";
import paths from "./paths";
import schemas from "./schemas";

export default {
  openapi: "3.0.0",
  info: {
    title: "Ignite SOLID Challenge API",
    description: "This is an API made for Ignite SOLID Challenge",
    version: "1.0.0",
    contact: {
      email: "diogo.fgomes.pinheiro@gmail.com",
    },
  },
  license: {
    name: "MIT",
    url: "https://opensource.org/licenses/MIT",
  },
  tags: [
    {
      name: "User",
      description: "Users Management",
    },
  ],
  paths,
  schemas,
  components,
};
