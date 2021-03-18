import { createServer, Model, RestSerializer } from "miragejs";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      user: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("users");
    },

    seeds(server) {
      server.create("user", { id: 1, name: "Ram" });
      server.create("user", { id: 2, name: "Shyam" });
    }
  });
}
