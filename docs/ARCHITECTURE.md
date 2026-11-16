# SYLVARA — Architecture baseline

## Architecture

Frontend-first, data-driven modular monolith. All calculations, game rules, navigation, and persistence run in the browser.

## Main layers

- Presentation: React components, responsive UI, animation.
- Features: Findings, Explore, Learnings, Achievements, Settings, About.
- Domain engines: meal/nutrition interpretation, scenario validation, quiz/progress and rewards.
- Content: foods, meals, nutrients, plants, scenarios, lessons, quizzes, badges and translations.
- Persistence: Dexie/IndexedDB for structured local data; localStorage for small preferences.

## Shared identifiers

Use stable IDs across features, e.g. `food.mango`, `nutrient.vitamin-c`, `plant.tulsi`, `lesson.fever-safety`, `badge.garden-level-01`.

## Data integrity and safety

- Nutrition data must have traceable sources, licensing details and review dates.
- Track food state, recipe, portion and uncertainty.
- Never silently convert missing data into zero.
- Keep educational plant content distinct from medical advice.
- Enforce quiz attempt limits in domain logic, not only in the UI.

## Persistence boundary

Data stays on the current browser/device unless a user-initiated export/import feature is implemented. No backend or automatic cross-device sync.
