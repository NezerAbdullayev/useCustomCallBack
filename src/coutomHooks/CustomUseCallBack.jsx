import { useRef } from "react";

export function useCustomCallback(fn, dependencies) {
  const lastDependencies = useRef([]);
  const lastFn = useRef(fn);

  if (
    dependencies.length !== lastDependencies.current.length ||
    dependencies.some((dep, i) => dep !== lastDependencies.current[i])
  ) {
    lastFn.current = fn;
    lastDependencies.current = dependencies;
  }

  return lastFn.current;
}
