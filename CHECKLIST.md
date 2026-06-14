# MCP File Server — Checklist

## Server Setup
- [x] Install dependencies (`@modelcontextprotocol/sdk`, `@anthropic-ai/sdk`)
- [x] Fix `server.js` startup crash (bad `Tool` import, missing `CallToolRequestSchema`, stray `EOF` line)
- [x] Add `ListTools` handler so `read_file`/`write_file` are advertised with schemas
- [x] Create `data/` directory for file operations
- [ ] Verify server with an actual MCP client (e.g. MCP inspector or Claude Desktop/Code config)

## Test Client (test-client.js)
- [x] Fix `.env` variable name typo: file had `ANTHROIPIC_API_KEY`, code reads `ANTHROPIC_API_KEY`
- [x] Load `.env` in `test-client.js` (added `dotenv` package + `import "dotenv/config"`)
- [x] Fix invalid model id `"claude-opus-4-6"` in `test-client.js` (now `claude-sonnet-4-6`)
- [ ] Run `test-client.js` successfully end-to-end — **blocked: API key in `.env` is rejected by Anthropic (401 invalid x-api-key)**. Replace with a valid key from console.anthropic.com.
- [ ] Confirm Claude responds to test message properly

## Source Control
- [x] Set up Git repository
- [x] Initial commit + push to GitHub

## Documentation
- [x] Add a short README describing how to run the server and connect a client
