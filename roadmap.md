# Roadmap — AI Editorial Studio build (uploaded spec)

## Done
- Read full spec (user-uploads/BUILD_A_COMPLETE_FULL-STACK_APPLICATION_AI_pasted.md, 1037 lines)
- User decisions: Studio is the main app; portfolio preserved at /portfolio; private accounts (email/password auth)

## In progress
- [x] Enable Lovable Cloud
- [x] DB migration: sources, research_briefs, research_brief_sources, drafts, writing_suggestions (+ RLS, grants, triggers, indexes)
- [ ] Enable email/password auth

## Todo
- [ ] Edge functions: _shared (run-id, responses helper, url-validation, html-extract, brief-outline) + fetch-source, generate-brief, suggest-rewrites, health
- [ ] Deterministic writing engine (src/lib/writing) + tests
- [ ] Client research lib (URL validation, export helpers) + tests
- [ ] Studio UI: shell/nav, Dashboard, Research Assistant, Writing Assistant, Drafts, Sample Editorial, Notes, Settings, Auth pages
- [ ] Move portfolio to /portfolio
- [ ] Sample editorial article (300-500 words) + before/after workflow page
- [ ] docs/PRODUCT_ENGINEERING_NOTE.md, README.md, .env.example, .gitignore check
- [ ] Persistence (mocked supabase) tests, frontend tests, e2e browser check
- [ ] Final report vs acceptance checklist
