"use client";

import React from "react";
import type { SectionMetricsCopy } from "../config/types";
import { CenteredLayout } from "../components/layouts/CenteredLayout";
import {
  spacing,
  typography,
  globalBackground,
  ColorTheme,
} from "../config/design-system";

export type MetricsProps = {
  copy: SectionMetricsCopy;
  theme: ColorTheme;
};

function normalizeText(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

export function Metrics({ copy }: MetricsProps) {
  const gridColsClass =
    copy.metrics.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <section
      id="metrics"
      data-section-id="metrics"
      className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}
    >
      <CenteredLayout>
        <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
          {normalizeText(copy.heading)}
        </h2>

        <p className={`${typography.body} text-text-secondary ${spacing.block.y.md}`}>
          {normalizeText(copy.subtitle)}
        </p>

        <div
          className={`grid grid-cols-1 ${gridColsClass} ${spacing.grid.x.md} ${spacing.grid.y.md}`}
        >
          {copy.metrics.map((metric, index) => (
            <div key={index} className="text-left">
              {/* VALUE */}
              <div className={`${typography.h1} text-text-primary ${spacing.block.y.md}`}>
                {normalizeText(metric.value)}
              </div>

              {/* LABEL */}
              <h3 className={`${typography.h3} text-text-primary ${spacing.block.y.md}`}>
                {normalizeText(metric.label)}
              </h3>

              {/* DESCRIPTION */}
              <p className={`${typography.body} text-text-secondary`}>
                {normalizeText(metric.description)}
              </p>
            </div>
          ))}
        </div>
      </CenteredLayout>
    </section>
  );
}
