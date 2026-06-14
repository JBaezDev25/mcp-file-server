import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs";
import path from "path";

const server = new Server(
  {
    name: "file-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "read_file",
      description: "Read a file from the data directory",
      inputSchema: {
        type: "object",
        properties: {
          filename: { type: "string" },
        },
        required: ["filename"],
      },
    },
    {
      name: "write_file",
      description: "Write a file to the data directory",
      inputSchema: {
        type: "object",
        properties: {
          filename: { type: "string" },
          content: { type: "string" },
        },
        required: ["filename", "content"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const toolName = request.params.name;
  const args = request.params.arguments;

  if (toolName === "read_file") {
    const filePath = path.join("./data", args.filename);
    const content = fs.readFileSync(filePath, "utf-8");
    return {
      content: [{ type: "text", text: content }],
    };
  }

  if (toolName === "write_file") {
    const filePath = path.join("./data", args.filename);
    fs.writeFileSync(filePath, args.content, "utf-8");
    return {
      content: [{ type: "text", text: `File written: ${args.filename}` }],
    };
  }

  return { content: [{ type: "text", text: "Tool not found" }] };
});

const transport = new StdioServerTransport();
await server.connect(transport);
