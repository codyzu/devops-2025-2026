# RS509: stalled rollout and rollback demo

Use after the first Lab 52 work block, alongside lesson 60’s rollout slides. Allow 10–15 minutes. No new image or PostgreSQL setup is needed. Use an existing working course VM, or let a volunteer operate theirs. If the baseline is not ready within five minutes, use the slides and prediction questions instead.

## Check the baseline

Run inside the Ubuntu VM, from the learner fork, using the same terminal throughout:

```bash
cd "$(git rev-parse --show-toplevel)/labs/42-kubernetes"
kubectl -n quote-lab rollout status deployment/quote-app --timeout=60s
kubectl -n quote-lab get deployment quote-app
kubectl -n quote-lab get pods -l app=quote-app
kubectl -n quote-lab rollout history deployment/quote-app
kubectl -n quote-lab get deployment quote-app -o jsonpath='{.spec.strategy}{"\n"}'
```

Expect three Ready app replicas, a completed rollout, and the baseline RollingUpdate strategy (25% maxUnavailable / 25% maxSurge). The saved `deployment.yaml` must match the working app, including any Lab 52 Secret references, and use `/health` for readiness. Do not apply an old baseline that removes the database configuration. If the strategy or replica count differs, skip the demo rather than changing the learner’s setup live.

Preserve the working file before editing:

```bash
demo_manifest_backup=$(mktemp /tmp/res509-demo-deployment.XXXXXX)
cp deployment.yaml "$demo_manifest_backup"
```

Ask: **“What happens to the old Pods if the new ones never become Ready?”** Take predictions before applying anything.

## Introduce the failure

Edit only `readinessProbe.httpGet.path` in `deployment.yaml`: change `/health` to `/does-not-exist`. Keep liveness, image, replicas, ports, and database settings unchanged.

```bash
kubectl -n quote-lab apply -f deployment.yaml
kubectl -n quote-lab rollout status deployment/quote-app --timeout=60s
kubectl -n quote-lab get pods -l app=quote-app
kubectl -n quote-lab get rs -l app=quote-app
```

The timeout is expected: it stops waiting, not the rollout. Expect a new Running Pod showing `0/1` Ready while old healthy Pods remain available under the baseline strategy.

Ask: **“Is Running the same as Ready? Has the container necessarily crashed?”**

Replace `POD_NAME` below with the actual new, unready Pod name:

```bash
kubectl -n quote-lab describe pod POD_NAME
kubectl -n quote-lab logs POD_NAME --tail=20
```

Find the readiness HTTP 404 in events. Ask: **“Which signal explains the cause most directly? Why has readiness failure not restarted the container?”** Readiness controls traffic eligibility; liveness controls health-triggered restarts. Logs may contain requests, but events name the failed probe.

## Roll back and leave the system healthy

Restore the saved file, then undo the single template change you just made:

```bash
cp "$demo_manifest_backup" deployment.yaml
kubectl -n quote-lab rollout undo deployment/quote-app
kubectl -n quote-lab rollout status deployment/quote-app --timeout=120s
kubectl -n quote-lab get pods -l app=quote-app
```

Expect three Ready app replicas and a completed rollout. Check app behavior in the existing access session; restart its port-forward if its selected Pod was replaced. Do not treat a successful port-forward as proof of Service load balancing.

If undo fails, apply the restored known-good file and inspect the result:

```bash
kubectl -n quote-lab apply -f deployment.yaml
kubectl -n quote-lab rollout status deployment/quote-app --timeout=120s
```

Ask:

- **“Why could the old Pods remain available?”** The baseline rolling-update limits and readiness checks held back replacement; this is not a blanket zero-downtime guarantee.
- **“Did Kubernetes automatically undo the bad change?”** No. We diagnosed the stall and explicitly requested rollback.
- **“Would this restore deleted quotes or reverse a database migration?”** No. Deployment rollback restores a retained Pod template, not database contents.
- **“Would three replicas protect us from losing this VM?”** No. All three still depend on that VM.

Return to Lab 52. The demo is observed teaching material, not individual completion evidence or an extra required lab report. Never delete the database PVC for this exercise.

## References and validation

The failure reproduces [Lab 42’s readiness exercise](../src/lessons/42-kubernetes.mdx); the recovery illustrates [lesson 60](../src/lessons/60-kubernetes-in-prod.mdx). Official reference: [Deployment rollback](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment).

Prepared 16 November 2026. Shell snippets are syntax-checked; this guide has not been rehearsed on a course VM. Opening baseline checks remain necessary.
