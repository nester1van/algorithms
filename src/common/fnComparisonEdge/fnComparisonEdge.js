export function fnComparisonEdge(edge1, edge2) {
  if (edge1.weight < edge2.weight) return -1;
  if (edge1.weight > edge2.weight) return 1;
  return 0;
}