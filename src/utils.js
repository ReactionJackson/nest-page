export const media = (maxWidth, css) => (
  `@media all and (max-width: ${ maxWidth }px) {
    ${ css }
  }`
)
