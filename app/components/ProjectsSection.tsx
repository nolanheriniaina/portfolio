"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";
import { useI18n } from "@/app/locales/client";
import FadeIn from "@/app/components/ui/FadeIn";
import SectionHeader from "@/app/components/ui/SectionHeader";
import type { Project } from "@/app/lib/data/portfolio";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const t = useI18n();
  const [slideIdx, setSlideIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [slideDir, setSlideDir] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);

  const project = projects[slideIdx];

  const goNext = useCallback(() => {
    if (animating) return;
    setSlideDir("next");
    setAnimating(true);
    setTimeout(() => {
      setSlideIdx((i) => (i + 1) % projects.length);
      setImgIdx(0);
      setAnimating(false);
    }, 280);
  }, [projects.length, animating]);

  const goPrev = useCallback(() => {
    if (animating) return;
    setSlideDir("prev");
    setAnimating(true);
    setTimeout(() => {
      setSlideIdx((i) => (i - 1 + projects.length) % projects.length);
      setImgIdx(0);
      setAnimating(false);
    }, 280);
  }, [projects.length, animating]);

  const goTo = (i: number) => {
    if (animating || i === slideIdx) return;
    setSlideDir(i > slideIdx ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setSlideIdx(i);
      setImgIdx(0);
      setAnimating(false);
    }, 280);
  };

  useEffect(() => {
    if (hovering || project.images.length <= 1) return;
    const id = setInterval(
      () => setImgIdx((i) => (i + 1) % project.images.length),
      1400
    );
    return () => clearInterval(id);
  }, [project.images.length, hovering, slideIdx]);

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${slideDir === "next" ? "-12px" : "12px"})`
      : "none",
    transition: "opacity 0.28s ease, transform 0.28s ease",
  };

  return (
    <section id="projects" className="px-4 sm:px-8 py-14 border-b border-stone-200">
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            eyebrow={(t as any)("projects.eyebrow")}
            title={(t as any)("projects.title")}
          />
          <div className="flex gap-2 mb-10">
            <button
              onClick={goPrev}
              aria-label="Projet précédent"
              className="w-8 h-8 rounded border border-stone-200 flex items-center justify-center text-stone-400 hover:border-stone-400 hover:text-stone-700 hover:bg-stone-50 transition-all duration-200 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              aria-label="Projet suivant"
              className="w-8 h-8 rounded border border-stone-200 flex items-center justify-center text-stone-400 hover:border-stone-400 hover:text-stone-700 hover:bg-stone-50 transition-all duration-200 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="border border-stone-200 rounded overflow-hidden" style={slideStyle}>

          <div
            className="relative bg-stone-100 h-52 sm:h-64 overflow-hidden"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <img
              key={imgIdx}
              src={project.images[imgIdx]}
              alt=""
              className="w-full h-full object-contain"
              style={{ animation: "imageFadeIn 0.35s ease both" }}
            />

            {project.images.length > 1 && (
              <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/40 text-white text-[10px] rounded font-mono">
                {imgIdx + 1}/{project.images.length}
              </span>
            )}

            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-1.5 px-3 py-2 bg-stone-900/70">
              <AlertTriangle className="w-3 h-3 text-stone-300 flex-shrink-0" />
              {/* @ts-ignore */}
              <span className="text-stone-300 text-[10px]">{t("projects.confidential")}</span>
            </div>

            {project.images.length > 1 && (
              <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-1 pointer-events-none">
                {project.images.map((_, i) => (
                  <span
                    key={i}
                    className="w-1 h-1 rounded-full transition-all duration-300"
                    style={{ background: i === imgIdx ? "white" : "rgba(255,255,255,0.4)" }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="p-5">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-medium bg-stone-100 text-stone-600 rounded transition-colors duration-200 hover:bg-amber-50 hover:text-amber-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* @ts-ignore */}
            <h3 className="text-base font-medium text-stone-900 mb-2">{t(`projects.list.${project.key}.title` as any)}</h3>
            {/* @ts-ignore */}
            <p className="text-sm text-stone-500 leading-relaxed mb-4">{t(`projects.list.${project.key}.description` as any)}</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-amber-50 rounded transition-colors duration-200 hover:bg-amber-100">
                {/* @ts-ignore */}
                <p className="text-[10px] font-medium text-amber-700 uppercase tracking-wider mb-1">{t("projects.challenge")}</p>
                {/* @ts-ignore */}
                <p className="text-xs text-stone-600 leading-relaxed">{t(`projects.list.${project.key}.challenge` as any)}</p>
              </div>
              <div className="p-3 bg-stone-50 rounded transition-colors duration-200 hover:bg-stone-100">
                {/* @ts-ignore */}
                <p className="text-[10px] font-medium text-stone-500 uppercase tracking-wider mb-1">{t("projects.solution")}</p>
                {/* @ts-ignore */}
                <p className="text-xs text-stone-600 leading-relaxed">{t(`projects.list.${project.key}.solution` as any)}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-stone-100 text-xs text-stone-400">
              {/* @ts-ignore */}
              <span><span className="font-medium text-stone-600">{t("projects.year")} :</span> {project.year}</span>
              {/* @ts-ignore */}
              <span><span className="font-medium text-stone-600">{t("projects.duration")} :</span> {project.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              aria-label={`Projet ${i + 1}`}
              className="w-10 h-10 rounded overflow-hidden border transition-all duration-200 active:scale-95"
              style={{
                borderColor: i === slideIdx ? "#f59e0b" : "#e7e5e4",
                opacity: i === slideIdx ? 1 : 0.4,
                transform: i === slideIdx ? "scale(1.05)" : "scale(1)",
              }}
            >
              <img src={p.images[0]} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </FadeIn>

      <style>{`
        @keyframes imageFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}