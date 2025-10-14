// tests/test-render.ts
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { AllProviders } from "./AllProviders";

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllProviders, ...options });
