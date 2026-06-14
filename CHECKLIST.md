# MCP File Server — Checklist

## Server Setup
- [x] Install dependencies (`@modelcontextprotocol/sdk`, `@anthropic-ai/sdk`)
- [x] Fix `server.js` startup crash (bad `Tool` import, missing `CallToolRequestSchema`, stray `EOF` line)
- [x] Add `ListTools` handler so `read_file`/`write_file` are advertised with schemas
- [x] Create `data/` directory for file operations
- [ ] Verify server with an actual MCP client (e.g. MCP inspector or Claude Desktop/Code config)

## Test Client (test-client.js)
- [ ] Fix `.env` variable name typo: file has `ANTHROIPIC_API_KEY`, code reads `ANTHROPIC_API_KEY`
- [ ] Load `.env` in `test-client.js` (no `dotenv` import/config currently — `.env` isn't read automatically)
- [ ] Fix invalid model id `"claude-opus-4-6"` in `test-client.js` (not a real model — use `claude-opus-4-8` or `claude-sonnet-4-6`)
- [ ] Run `test-client.js` successfully end-to-end
- [ ] Confirm Claude responds to test message properly

## Source Control
- [ ] Set up Git repository
- [ ] Initial commit + push to GitHub

## Documentation
- [ ] Add a short README describing how to run the server and connect a client
