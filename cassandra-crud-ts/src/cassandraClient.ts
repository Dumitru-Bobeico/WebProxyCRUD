import { Client } from "cassandra-driver";
import dotenv from "dotenv";

dotenv.config();

export const cassandraClient = new Client({
  contactPoints: [process.env.CASSANDRA_HOST || "127.0.0.1"],
  localDataCenter: "datacenter1",
  keyspace: "userdb",
});

export async function connectCassandra() {
  await cassandraClient.connect();
  console.log("Connected to Cassandra");
}
