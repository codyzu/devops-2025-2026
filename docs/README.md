# Course documentation

Start here when preparing or changing course work with an agent. The repository serves **RS507 and RS509**; existing files, lessons, and Drive sources also use **RES507 and RES509** for the same courses.

| Document | Purpose |
| --- | --- |
| [Agent instructions](../AGENTS.md) | Authoring, MDX, layout, and static-site constraints |
| [Course context](course-context.md) | Lesson sequence, course boundary, environment, assessment, and publication |
| [RS507 feedback](feedback/rs507.md) | Separate 2025–2026 and 2026–2027 surveys, cohort comparison, and action status |
| [RS509 feedback](feedback/rs509.md) | Historical survey, implications, implementation status, and remaining work |
| [Session 4 audit](../session-4-audit.md) | Detailed review and implementation record from 14 October 2026 |

## Working on a lesson

1. Read `AGENTS.md`, the course context, and the relevant feedback document.
2. Read the lesson and its preceding/following lessons. Check whether prerequisites were required or optional extensions.
3. Identify the learning outcome and the feedback or observed problem motivating the change. Preserve the guided core, meaningful choices, deliberate failure/recovery, and concise evidence.
4. Edit sources directly. Preserve comments, assessment ownership, and publication settings unless the task calls for changing them.
5. For MDX or site changes, run `pnpm build`. For slides, also inspect the rendered deck at the teaching resolution (the session-4 audit used 1280 × 720). Check clipping and links. Verify shell examples in their stated shell and YAML when changed.
6. For runtime changes, exercise the relevant app/VM/cluster flow when available. Record what was actually tested and remaining runtime gaps; a static build cannot validate a Kubernetes deployment.
7. Update the relevant feedback action/status and course context when progression changes. Report changed behavior, validation, and remaining work.

For documentation-only changes, review accuracy and local links; a site build is unnecessary when no site sources changed. `pnpm lint` is available for relevant code changes; there is no test script in `package.json`.

## Maintaining feedback

Keep academic years separate. For each snapshot, record the course, cohort, source link, tab/range, response count, and review date. Use source labels and response timestamps to establish the cohort: an October import date does not turn February/March responses into current-year feedback.

Store aggregate counts and paraphrased themes here. Keep individual responses, identifying details, grades, and raw exports in their original sources. These docs are outside `src/lessons` and do not become lesson pages, but remain part of the repository.

Distinguish **survey evidence**, **instructor observations**, **proposed responses**, **implemented changes**, and **validated outcomes**. Do not mark an improvement effective merely because its text was implemented. Small voluntary samples describe respondents, not necessarily the whole class.

When refreshing a survey, inspect source metadata and bounded response ranges, confirm populated rows, recompute counts, and retain previous cohort summaries. If a current source cannot be located, record that limitation rather than reporting zero responses.
