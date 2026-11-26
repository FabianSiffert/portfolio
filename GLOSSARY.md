# Glossary

**Element color**: One of the named pastel theme colors (`--element*` in `src/ui/theme/_themes.scss`) used to tint surfaces.

**Tinted surface**: A card whose background is an element color mixed with transparency at one fixed strength, sharing the standard surface shape. Owned by the `tintedSurface` mixin in `src/ui/_cozy.module.scss`; callers choose only the element color.

**Chip link**: A pill-shaped interactive link inside a tinted surface. It inherits the surface's element color via `--tint` and tints itself again, so it reads stronger than its card. Owned by the `chipLink` mixin.
