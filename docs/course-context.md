# Course context

Repository/source review: 16 October 2026. This is the shared static teaching site for RS507/RES507 and RS509/RES509. Learners commit application code, manifests, and assessment evidence to their own work repositories.

## Course progression

| Course | Lessons | Purpose |
| --- | --- | --- |
| RS507 — Automatisation de la chaine de production / DevOps | [10](../src/lessons/10-welcome.mdx), [12](../src/lessons/12-getting-started.mdx), [14](../src/lessons/14-git-foundation.mdx), [16](../src/lessons/16-continuous-integration.mdx) | Welcome, setup, Git workflow; CI preview is optional if time runs out |
| RS507 | [20](../src/lessons/20-containerized-node-app.mdx), [30](../src/lessons/30-continuous-integration-pipeline.mdx), [32](../src/lessons/32-feedback.mdx) | Containerized Node app, PostgreSQL/Compose, CI, failure/recovery, extensions, feedback |
| RS509 — Virtualisation avancée | [40](../src/lessons/40-kubernetes.mdx), [42](../src/lessons/42-kubernetes.mdx) | Day 1 / session 4 overall: single-node k3s, Deployment, Service, scaling, Pod replacement, readiness failure/recovery |
| RS509 | [50](../src/lessons/50-architecture.mdx), [52](../src/lessons/52-architecture.mdx) | Day 2 / session 5 overall: finish Lab 42 core, guided database integration, current-system diagram, containers/VMs and failure boundaries |
| RS509 | [60](../src/lessons/60-kubernetes-in-prod.mdx), [62](../src/lessons/62-final-systems-challenge.mdx) | Production operations, rollouts and rollback, final architecture challenge; remaining scope to be confirmed after session 2 checkpoints |

Lab 30 belongs to RS507; Lab 42 belongs to RS509. Lessons 40/42 time-box RS507 closeout before starting RS509. Do not infer course ownership from the repository name or shared hero image.

## Learner environment and handoffs

- Follow the learner repository/fork named in the lesson. Lesson 12 currently references `https://github.com/codyzu/res507-2025-2026-work.git`; verify that reference when preparing a new cohort rather than inventing a replacement.
- Later labs use `labs/20-containerized-node-app` in the learner's fork. This site repository is not the app scaffold. Do not assume every learner has the instructor's completed branch.
- RS509 reuses the learner's Ubuntu Server VM and app. Lab 42 runs Docker builds and k3s image imports inside that VM. Docker images are not automatically available to k3s/containerd.
- Lab 42's required baseline validates `/health`. PostgreSQL is optional there; Lab 52 supplies a required guided database setup. Do not turn an optional lane into an undocumented prerequisite.
- Three app replicas on one VM do not protect against losing that VM. A health response does not prove database functionality or production resilience. Lab 52 verifies quote insertion and persistence separately.
- Reuse verified extensions. Keep core work and extension entry points explicit; do not require every lane.

## Assessment and teaching approach

Use labs as the authoritative source for rubrics and submissions. Lab 14 has a small practical Git checkpoint. Lab 30 assesses the pipeline, diagnosis/recovery, a meaningful extension, and understanding. Lab 42 has a 20-point rubric: runtime validation (6), diagnosis/recovery (6), one extension (4), and oral understanding (4). Its final assessment is later than the opening session; the date is announced in class.

Session 2 uses a verified Lab 42 core handoff, without requiring an extension before entry to Lab 52. Lab 52 targets database insertion/persistence, working manifests with Secret references, a current-system diagram, and concise boundary notes/evidence. Resource limits and liveness are optional continuations reusing Lab 42 lanes; larger production design remains with Lab 62. A class database demonstration is observed evidence only, with individual work still pending. See the [session 2 preparation record](rs509-session-2.md) for timing, fallback, and validation limits. Reasoning questions support discussion and oral review rather than a written answer to every prompt. Lab 62 remains an open architecture challenge with its own checklist. Do not invent grade weights or deadlines beyond the lessons.

Preserve the existing application, hands-on format, short explanations, autonomy, and instructor check-ins. Feedback supports differentiated extensions and quick observable checks. Avoid expanding every activity into a written report.

## Source map and publication

- `src/lessons`: single MDX content collection; numeric filename prefixes determine ordering by entry ID.
- `src/lesson-schema.ts` and `src/content.config.ts`: schema and collection loader.
- `src/pages/lessons/[slug].astro`: static routes and lab/Reveal layout selection.
- `src/layouts/SlidesLayout.astro`: Reveal setup/themes. `astro.config.mjs`: shared highlighting and heading processing.
- `src/components/LessonList.astro`: published listing and browser-side availability filtering. `src/lib/paths.ts`: base-aware links.
- `.github/workflows/astro.yml`: deployment workflow; inspect before changing deployment.

For the 18 October 2026 release, lessons through 52 are published; 60 and 62 retain `published: false`. Lessons 50/52 no longer carry historical availability dates. Recheck later lessons before release.

Routes use collection entry **IDs**; Astro’s glob loader uses a frontmatter `slug` as the ID override when present. The build generates Lab 42 at `/lessons/42-kubernetes-deployment-runtime-validation/` and Lab 52 at `/lessons/52-architecture-production-design/` when published. Use generated routes when checking links. Only published entries get routes. `availableFrom` hides future items in the browser listing; it does not prevent direct access to generated routes and is not access control. Keep output static.

## Known limits and next work

- The [session-4 audit](../session-4-audit.md) records implemented corrections and build/shell/YAML/slide checks. It explicitly records that a full teaching-VM/k3s/database dry run was not performed.
- Lessons 50/52 were revised for session 2 recovery and staged progression on 16 October 2026. Review lessons 60/62 against actual exit checkpoints before release; do not stack every deferred task into session 3. See the session 2 record for runtime validation still needed.
- Refresh cohort-specific repository URLs, release dates, and site labels deliberately. The homepage currently says RES507 — 2026/2027 while this repo also serves RS509.
- RS507 feedback now includes separate 2025–2026 (18 responses) and 2026–2027 (20 responses) snapshots, reviewed 16 October 2026. Current priorities are clarifying assessment expectations, preserving extension choice, and offering bounded independent practice and CI understanding checks. The fairness ratings warrant investigation; their cause is not established. See [RS507 feedback](feedback/rs507.md) for evidence and action status.
