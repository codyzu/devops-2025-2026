# RS509 session 2 preparation

Prepared 16 October 2026 for 2026–2027. This is session 5 overall across the shared RS507/RS509 sequence.

## Evidence and response

Instructor observation: only one student completed Lab 42 during session 1. Blockers are unknown/mixed; the opening check-in must distinguish incomplete core work from extensions or final assessment evidence. This is not a current-year survey result. Historical survey context remains separately recorded in [RS509 feedback](feedback/rs509.md).

Session objective: finish the verified Kubernetes core, begin guided PostgreSQL integration when ready, and explain the current system's kernel, storage, and failure boundaries. Lab 42's final rubric remains unchanged. Its extension is not an entry condition for Lab 52; verified database work can satisfy the database extension lane.

## Four-hour delivery plan

| Time | Activity |
| --- | --- |
| 0–15 min | Reopen VM/fork/manifests; identify first missing checkpoint. |
| 15–30 min | Demonstrate a common blocker and the diagnostic process. |
| 30–95 min | Supported Lab 42 completion; verified students begin PostgreSQL. |
| 95–110 min | Break and buffer. |
| 110–130 min | Lesson 50 architecture discussion using students' actual environment. |
| 130–205 min | Guided PostgreSQL work, or continued supported core recovery. |
| 205–225 min | Verify results and diagram the actual system. |
| 225–240 min | Save evidence, commit/push working files, agree next checkpoint. |

Use lesson 50's opening slides briefly; the focused blocker demonstration should respond to opening observations. Reserve its architecture slides for the post-break discussion rather than delivering the entire deck before lab time.

## Instructor preparation

- Have students bring an accessible VM and fork, current manifests, last successful checkpoint, and exact blocking symptom. Do not require all repairs as homework before the recovery session.
- Use Lab 42's restart checklist and troubleshooting sheet. Check both health paths, three replicas, Pod replacement, readiness failure/recovery, and saved evidence before the handoff to database work.
- Dry-run the retained Lab 52 database instructions with the actual learner app and course VM: app SELECT/INSERT handlers, image import, local-path storage, Secret references, SQL initialization, quote insertion/retrieval, and persistence across database Pod replacement. Reuse existing credentials and PVCs; no reset or reinstall is part of the restart procedure.
- Have a working demonstration environment and saved recovery point available. Verify images can be downloaded on the teaching network. Neither a demonstration nor a reference manifest substitutes for individual verification.
- Lessons 50/52 are enabled for the 18 October release, with historical availability dates removed. Lessons 60/62 remain unpublished. Confirm the deployed lesson links before class.

## Fallback and follow-up

If many students still lack a working deployment after the first work block, keep individual core recovery as the practical priority. Demonstrate database insertion and persistence together, let students diagram their actual state, and label demonstrated database work as observed. Individual database integration remains pending.

At entry and exit, record aggregate checkpoint counts (core verified; database persistence verified; blocked) and blocker categories. Keep identifying records and grades outside this repository. Agree one next action per learner.

Before session 3, adapt lessons 60/62 to these checkpoints. Do not automatically add all deferred tasks. Lab 52 no longer requires repeated core failure exercises, a comparison report, or a production design report today; resource/liveness lanes are optional continuations. Controlled changes belong with lesson 60 and production design with Lab 62; confirm achievable remaining scope before release.

## Implementation and validation

- Lab 42: added student restart checklist, symptom-based diagnostics, escalation guidance, and core handoff; retained the rubric.
- Lesson 50: revised to support opening recovery, the short architecture discussion, persistence boundaries, and exit checkpoints.
- Lab 52: retained guided database setup; narrowed required evidence to persistence, actual-system diagram, short boundary notes, and next action; reused existing extension work.
- `pnpm build` passed with the normal publication settings (10 pages). An isolated preview build with only lessons 50/52 additionally enabled passed (12 pages); repository publication flags were preserved. The normal build reported a Google Fonts fetch warning in the restricted environment.
- Inspected all 16 lesson 50 slides at 1280 × 720, including the shortened isolation and diagram slides. Automated viewport checks found no content outside the viewport and no browser page errors. Inspected the rendered Lab 52 introduction and Lab 42 restart/troubleshooting sections; unnumbered checklist headings retain the `no-step` class.
- Verified all four distinct lesson/anchor link targets used by the revised pages against generated preview HTML. Fixed the links to the actual frontmatter-slug routes and generated trailing-hyphen heading anchors. Corrected the route explanation in the course context.
- All 53 Bash fences across lessons 42/50/52 passed `bash -n`; four YAML fences in labs 42/52 parsed, including snippets. These are syntax checks, not command execution or Kubernetes API validation. Documentation local links and `git diff --check` passed.
- The Docker CLI is available but its daemon is unreachable; no learner VM or cluster has been exercised as part of this content revision. A build or slide preview cannot validate runtime behavior, timings, or improved learner outcomes.

## Release preparation — 18 October 2026

Enabled lessons 50/52 for publication and removed their historical availability dates. The instructor plans to proceed without the full teaching-VM dry run; runtime behavior remains unverified. The opening check-in and fallback in this plan still apply.

Release checks: `pnpm build` passed with 12 generated pages; `pnpm lint`, generated lesson/anchor checks, and `git diff --check` passed. The restricted build again reported the Google Fonts fetch warning.
