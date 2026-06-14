# MCP File Server

A simple Model Context Protocol (MCP) Server for file operations built with Node.js.

## Features

- Read files from the data directory
- Write files to the data directory
- Integrates with Claude API

## Setup

1. Install dependencies: `npm install`
2. Set your API key: `export ANTHROPIC_API_KEY=your_key`
3. Start the server: `npm start`
4. Test with Claude: `node test-client.js`

## Project Structure

- `server.js` - MCP Server implementation
- `test-client.js` - Test client for Claude API integration
- `data/` - Directory for file storage
- `package.json` - Project dependencies

## Author

Jose Baez
