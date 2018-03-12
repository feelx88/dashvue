import { Client, connect } from "mqtt";

export default class Mqtt {
  private static clients: Client[] = [];

  public static getClient(url: string): Client {
    let client: Client = Mqtt.clients[<any>url];
    if (!client) {
      client = connect(url);
      Mqtt.clients[<any>url] = client;
    }

    return client;
  }
}
