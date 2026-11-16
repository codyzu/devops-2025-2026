# RS509 sessions 3–4 preparation

Prepared 16 November 2026 for 2026–2027. Session 3 is on 17 November; session 4 is the fourth and final RS509 session. These are sessions 6–7 overall across RS507/RS509. Lesson numbers are content identifiers, not session counts.

## Evidence and limits

- Instructor decision: finish Lab 52 in session 3; reserve Lab 62 for session 4. The instructor has no prepared rollout demonstration; revisit that separately rather than depending on it for delivery.
- Current-year [assessment source](https://docs.google.com/spreadsheets/d/16VwDhgWoH5dUIq6UDpU67ybxEvTYngf61jtuHfdLflI/edit), reviewed 16 November 2026: `lab-42!A1:O35` and `lab-52!A1:O35`, with 23 learner rows. Lab 52 component scores are blank throughout, with one positive completion note. This supports the instructor’s recollection of one completion, not a verified count of technical failures. Lab 42 includes both partial scoring and positive notes on unscored rows. A zero total beside blank component scores is not sufficient evidence of failure or incompletion.
- Historical 2025–2026 [assessment source](https://docs.google.com/spreadsheets/d/1mBvFCY7wHHJOL-NYmAHcn5C52SwVoTrZ4pPHU5xNQyA/edit), reviewed 16 November 2026: `509-S1!A1:AC32`, `509-S2!A1:AG32`, `509-S3!A1:L32`, `509-S4!A1:K32`, and `'509 Final Grade'!A1:I32`. S1/S3/S4 each contain 19 recorded assessment totals; S2 has blank component scores. The final sheet includes S1/S3/S4, not S2. This confirms three contributing assessments across four session tabs; it does not prove the precise timing or completion of every activity. Some total-column headers still say “Session 2” in other tabs, so use tab names and criteria together. Combining S2 work into S3 is an inference, not an established classroom record.
- Historical criteria broadly align with current Lab 42, Lab 52/lesson 60 operations, and Lab 62 design. Do not transfer old weights, scores, or deadlines to the current cohort.

Keep identifying records, individual grades, and raw exports in the original sources. These aggregate records are separate from survey evidence in [RS509 feedback](feedback/rs509.md).

## Session 3: finish and verify the working system

Use Lab 52 as the practical source of truth. Reopen the existing VM, namespace, manifests, credentials, and PVC; do not reinstall or reset working components. For incomplete Lab 42 core, use its restart checklist and verify the handoff before database integration.

| Time | Activity |
| --- | --- |
| 0–15 min | Brief lesson 60 opening through “Work on Lab 52”; identify each learner’s first missing checkpoint. |
| 15–30 min | Diagnose a shared blocker if one emerges; otherwise begin supported work immediately. No prepared demo is assumed. |
| 30–105 min | Lab 52 work and short individual checks; supported Lab 42 recovery where needed. |
| 105–120 min | Break and buffer. |
| 120–140 min | Resume lesson 60 at “Pause after the first work block”; discuss failure boundaries, rollout, and rollback using the slides. |
| 140–210 min | Continue practical work, persistence verification, current-system diagrams, and individual reviews. |
| 210–240 min | Save/commit/push evidence, explain boundaries, and record the next checkpoint. |

Do not deliver the entire deck before lab time. Keep its opening to about five minutes within the initial check-in. Use the later discussion for 15–20 minutes after students have worked on their own database; shorten it if common blockers need more support. Rollout commands are reading examples, not a new required execution task. A live demo can be considered later after preparation and rehearsal.

Check four concrete outcomes:

1. PostgreSQL Pod Ready and PVC Bound; saved manifests reference the Secret without committing values.
2. The app inserts and retrieves a distinct quote, rather than only passing `/health`.
3. The same quote is retrieved after database Pod replacement with the same PVC.
4. The actual-system diagram and brief notes explain the shared VM kernel, local storage boundary, and next task or remaining weakness.

Keep evidence in the locations defined by Lab 52 and reuse Lab 42 evidence. A database extension already verified can support the existing Lab 42 extension assessment; no duplicate report is required. Requests/limits and liveness remain optional continuations, not extra Lab 52 requirements.

If many learners remain blocked at the break, prioritize supported practical work in the afternoon and shorten the slide discussion. Label unverified work pending. For verified finishers, reuse one existing extension or annotate a failure boundary; Lab 62 remains the session 4 task. No extra graded lab or new assessment weights are introduced here.

At exit, record aggregate checkpoint counts and blocker categories. Keep individual assessment decisions in the private grading sheet. Do not equate a demonstration, a positive note, or a site build with individual runtime verification.

## Session 4: final architecture challenge

Lab 62 asks learners to improve a fictional flawed system. Lab 52 records what exists; Lab 62 proposes what should change. The final challenge does not require implementing a new production cluster.

Suggested four-hour structure:

| Time | Activity |
| --- | --- |
| 0–15 min | Introduce the scenario, concise deliverables, and review process. Clarify any pending practical evidence. |
| 15–100 min | Analyze risks and design improvements; reuse and annotate the Lab 52 diagram. |
| 100–115 min | Break and buffer. |
| 115–210 min | Short individual oral reviews while others refine their designs. With 23 learners, budget roughly four minutes each including transitions. |
| 210–225 min | Complete commits and identify any still-pending evidence. |
| 225–240 min | Common lessons, course feedback, and closeout. |

Retain Lab 62’s core: at least three risks with consequences/fixes, proposed architecture, operational strategy, remaining weakness, and oral explanation. Keep one concise `final-architecture.md` and one linked/embedded diagram. Distinguish verified components from proposed changes. Discuss Pod versus VM/disk loss, backups/restore, and app rollout versus database recovery. Questions guide reasoning; they do not each require a separate written response.

Learners with unfinished Lab 52 can analyze the scenario while clearly recording their implementation limits; agree the remaining practical checkpoint separately. Do not invent a new deadline or treat the design exercise as proof of completed runtime work. Confirm assessment arrangements before the final session.

## Implementation, release, and validation

Lesson 60 now supports the split presentation, accurate Lab 52 evidence, and a session 4 handoff. Its rollout examples require no live demo. Lab 62 retains the final architecture exercise, clarifies unsafe update/credential/storage behavior, reduces repeated writing, and removes its stale availability date. Release decision on 16 November: enable lesson 60 for session 3 on 17 November; keep Lab 62 at `published: false` until the fourth and final session.

No VM, cluster, database, or rollout demonstration has been exercised in this revision. Completion, teaching timing, and learner outcomes remain unvalidated. Validation completed:

- Normal `pnpm build` passed (12 pages). A temporary preview build enabling only lessons 60/62 additionally passed (14 pages); both source publication flags were restored to false.
- `pnpm lint` passed. Bash fences in lessons 60/62 passed `bash -n`; documentation file links and `git diff --check` passed.
- Inspected all 15 lesson 60 slides at 1280 × 720. Shortened two overflowing slides and rechecked: no measured viewport overflow or browser page errors. Inspected the rendered Lab 62 introduction/checklist and diagram output; unnumbered headings retain their classes and the page has no horizontal overflow at that viewport.
- Local verification required installing the locked dependencies and browser access for Mermaid rendering. No dependency manifest or lockfile changes were made. Build checks under restricted network access reported the existing Google Fonts fetch warning; browser rendering required an unsandboxed local build.

These checks validate content rendering and syntax, not the Kubernetes commands, database behavior, or effectiveness of the session plan.

## Session 3 release checks — 16 November 2026

The release build passed with 13 pages: lesson 60 is generated and listed, while Lab 62 is neither generated nor listed. Verified all 93 local href/src/srcset targets across the two rendered lesson previews and the released lesson 60 page, including fragment targets. Lab 62’s existing RES509 feedback form returned HTTP 200 and displayed its form title; this checks reachability, not response submission or cohort configuration. The repository link also resolves through the GitHub API. No feedback response was submitted. Lab 62 remains hidden until the final-session release.
